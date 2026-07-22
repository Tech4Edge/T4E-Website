import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";
import JobBuilder from "../components/admin/JobBuilder";
import JobsTable from "../components/admin/JobsTable";
import ApplicationsTable from "../components/admin/ApplicationsTable";
import AdminLayout from "../components/admin/AdminLayout";
import AdminLoginScreen from "../components/admin/AdminLoginScreen";
import DashboardAnalytics from "../components/admin/DashboardAnalytics";
import PreviewModal from "../components/admin/PreviewModal";
import { useNotifications } from "../hooks/useNotifications";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const defaultField = {
  label: "",
  fieldType: "text",
  required: false,
  optionsText: "",
};


const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [globalSearch, setGlobalSearch] = useState("");
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

  const [jobForm, setJobForm] = useState({
    title: "",
    location: "",
    type: "",
    description: "",
    isActive: true,
  });
  const [dynamicFields, setDynamicFields] = useState([defaultField]);
  const [isCreatingJob, setIsCreatingJob] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);
  const [jobPendingDelete, setJobPendingDelete] = useState(null);
  const [previewJob, setPreviewJob] = useState(null);

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [jobFilter, setJobFilter] = useState("All");
  const [applicationSearch, setApplicationSearch] = useState("");
  const [isLoadingApps, setIsLoadingApps] = useState(false);

  const defaultHeaders = useMemo(
    () => ({
      "Content-Type": "application/json",
    }),
    [],
  );

  const postStatus = (message, type = "success") => {
    setStatusType(type);
    setStatusMessage(message);
  };

  const clearSession = () => {
    setIsAuthenticated(false);
    setJobs([]);
    setApplications([]);
    setSelectedApplication(null);
    setEditingJobId(null);
    setJobPendingDelete(null);
  };

  const handleUnauthorized = (message = "Session expired. Please login again.") => {
    clearSession();
    postStatus(message, "error");
    navigate("/admin");
  };

  const fetchWithAdminAuth = async (url, options = {}) => {
    const response = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (response.status === 401) {
      handleUnauthorized(data?.message || "Session expired. Please login again.");
      return { response, data, unauthorized: true };
    }

    return { response, data, unauthorized: false };
  };

  const { notifications, unreadCount, markAllRead, deleteOne, deleteAll } = useNotifications(isAuthenticated, fetchWithAdminAuth);

  const loadJobs = async () => {
    if (!isAuthenticated) {
      handleUnauthorized();
      return;
    }
    try {
      const { response, data, unauthorized } = await fetchWithAdminAuth(`${API_BASE_URL}/admin/jobs`);
      if (unauthorized) {
        return;
      }
      if (!response.ok) {
        throw new Error(data.message || "Failed to load jobs");
      }
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      postStatus(error.message || "Could not load jobs.", "error");
    }
  };

  const loadApplications = async () => {
    if (!isAuthenticated) {
      handleUnauthorized();
      return;
    }

    setIsLoadingApps(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "All") {
        params.set("status", statusFilter);
      }
      if (jobFilter !== "All") {
        params.set("jobId", jobFilter);
      }
      if (applicationSearch.trim()) {
        params.set("search", applicationSearch.trim());
      }

      const { response, data, unauthorized } = await fetchWithAdminAuth(
        `${API_BASE_URL}/admin/applications${params.toString() ? `?${params.toString()}` : ""}`,
      );
      if (unauthorized) {
        return;
      }
      if (!response.ok) {
        throw new Error(data.message || "Failed to load applications");
      }
      setApplications(Array.isArray(data.applications) ? data.applications : []);
      setSelectedApplication((prev) =>
        prev ? (data.applications || []).find((item) => item._id === prev._id) || null : null,
      );
    } catch (error) {
      postStatus(error.message || "Could not load applications.", "error");
    } finally {
      setIsLoadingApps(false);
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/me`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsInitializing(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadJobs();
      loadApplications();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    
    let timeoutId;
    const resetTimer = () => {
      clearTimeout(timeoutId);
      // 30 minutes
      timeoutId = setTimeout(() => {
        handleLogout();
        postStatus("Session expired due to inactivity.", "error");
      }, 30 * 60 * 1000);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => document.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => document.removeEventListener(event, resetTimer));
    };
  }, [isAuthenticated]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }
      setIsAuthenticated(true);
      setLoginForm({ username: "", password: "" });
      postStatus("Logged in successfully.", "success");
    } catch (error) {
      postStatus(error.message || "Could not log in.", "error");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/admin/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error(err);
    }
    clearSession();
    postStatus("Logged out successfully.", "success");
  };

  const updateJobForm = (key, value) => {
    setJobForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateDynamicField = (index, key, value) => {
    setDynamicFields((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  const addField = () => {
    setDynamicFields((prev) => [...prev, { ...defaultField }]);
  };

  const removeField = (index) => {
    setDynamicFields((prev) => prev.filter((_, fieldIndex) => fieldIndex !== index));
  };

  const resetJobBuilder = () => {
    setJobForm({
      title: "",
      location: "",
      type: "",
      description: "",
      isActive: true,
    });
    setDynamicFields([{ ...defaultField }]);
    setEditingJobId(null);
    setIsJobFormOpen(false);
  };

  const startEditingJob = (job) => {
    setEditingJobId(job._id);
    setActiveTab("jobs");
    setIsJobFormOpen(true);
    setJobForm({
      title: job.title || "",
      location: job.location || "",
      type: job.type || "",
      description: job.description || "",
      isActive: typeof job.isActive === "boolean" ? job.isActive : true,
    });
    setDynamicFields(
      Array.isArray(job.formSchema) && job.formSchema.length > 0
        ? job.formSchema.map((field) => ({
            label: field.label || "",
            fieldType: field.fieldType || "text",
            required: Boolean(field.required),
            optionsText: Array.isArray(field.options) ? field.options.join(", ") : "",
          }))
        : [{ ...defaultField }],
    );
  };

  const duplicateJob = (job) => {
    setActiveTab("jobs");
    setIsJobFormOpen(true);
    setEditingJobId(null); // It's a new job
    setJobForm({
      title: `${job.title} (Copy)`,
      location: job.location || "",
      type: job.type || "",
      department: job.department || "",
      description: job.description || "",
      isActive: false, // Default to inactive when duplicating
    });
    setDynamicFields(
      Array.isArray(job.formSchema) && job.formSchema.length > 0
        ? job.formSchema.map((field) => ({
            label: field.label || "",
            fieldType: field.fieldType || "text",
            required: Boolean(field.required),
            optionsText: Array.isArray(field.options) ? field.options.join(", ") : "",
          }))
        : [{ ...defaultField }],
    );
    postStatus("Job duplicated. Please review and save.", "success");
  };

  const submitJob = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      postStatus("Please login as admin first.", "error");
      return;
    }

    const parsedSchema = dynamicFields
      .filter((field) => field.label.trim())
      .map((field) => ({
        label: field.label.trim(),
        fieldType: field.fieldType,
        required: field.required,
        options:
          field.fieldType === "dropdown"
            ? field.optionsText
                .split(",")
                .map((option) => option.trim())
                .filter(Boolean)
            : [],
      }));

    setIsCreatingJob(true);
    try {
      const url = editingJobId
        ? `${API_BASE_URL}/admin/jobs/${editingJobId}`
        : `${API_BASE_URL}/admin/jobs`;
      const method = editingJobId ? "PATCH" : "POST";

      const { response, data, unauthorized } = await fetchWithAdminAuth(url, {
        method,
        body: JSON.stringify({
          ...jobForm,
          formSchema: parsedSchema,
        }),
      });
      if (unauthorized) {
        return;
      }
      if (!response.ok) {
        throw new Error(data.message || "Failed to save job");
      }

      postStatus(editingJobId ? "Job updated successfully." : "Job created successfully.");
      resetJobBuilder();
      loadJobs();
    } catch (error) {
      postStatus(error.message || "Could not save job.", "error");
    } finally {
      setIsCreatingJob(false);
    }
  };

  const deleteJob = async () => {
    if (!jobPendingDelete) {
      return;
    }
    try {
      const { response, data, unauthorized } = await fetchWithAdminAuth(
        `${API_BASE_URL}/admin/jobs/${jobPendingDelete._id}`,
        {
        method: "DELETE",
        },
      );
      if (unauthorized) {
        return;
      }
      if (!response.ok) {
        throw new Error(data.message || "Failed to delete job");
      }
      if (editingJobId === jobPendingDelete._id) {
        resetJobBuilder();
      }
      postStatus("Job deleted successfully.");
      setJobPendingDelete(null);
      loadJobs();
    } catch (error) {
      postStatus(error.message || "Could not delete job.", "error");
    }
  };

  const updateApplicationStatus = async (applicationId, status) => {
    if (!isAuthenticated) {
      postStatus("Please login as admin first.", "error");
      return;
    }

    try {
      const { response, data, unauthorized } = await fetchWithAdminAuth(
        `${API_BASE_URL}/admin/applications/${applicationId}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({ status }),
        },
      );
      if (unauthorized) {
        return;
      }
      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      postStatus(`Application marked as ${status}.`);
      loadApplications();
    } catch (error) {
      postStatus(error.message || "Could not update status.", "error");
    }
  };

  const formatResponses = (responses) => {
    if (!responses || typeof responses !== "object") {
      return [];
    }
    return Object.entries(responses);
  };

  const handleGlobalSearchSubmit = () => {
    if (activeTab === "dashboard") {
      setApplicationSearch(globalSearch);
      setActiveTab("applications");
    } else if (activeTab === "applications") {
      setApplicationSearch(globalSearch);
      loadApplications();
    }
  };

  const filteredJobs = useMemo(() => {
    if (!globalSearch.trim()) return jobs;
    const lower = globalSearch.toLowerCase();
    return jobs.filter(j => 
      j.title.toLowerCase().includes(lower) || 
      (j.location && j.location.toLowerCase().includes(lower)) ||
      (j.department && j.department.toLowerCase().includes(lower))
    );
  }, [jobs, globalSearch]);

  if (isInitializing) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return (
      <AdminLoginScreen 
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        isLoggingIn={isLoggingIn}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <>
      <AdminLayout 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onLogout={handleLogout}
        globalSearch={globalSearch}
        onGlobalSearchChange={setGlobalSearch}
        onGlobalSearchSubmit={handleGlobalSearchSubmit}
        notifications={notifications}
        unreadCount={unreadCount}
        markAllRead={markAllRead}
        deleteNotification={deleteOne}
        deleteAllNotifications={deleteAll}
      >
        {statusMessage && (
          <div
            className={`p-3 text-sm border mb-6 ${
              statusType === "success"
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {activeTab === "dashboard" && (
          <DashboardAnalytics 
            fetchWithAdminAuth={fetchWithAdminAuth} 
            postStatus={postStatus} 
            onSwitchTab={setActiveTab}
            onViewApplication={(app) => {
              setSelectedApplication(app);
              setActiveTab("applications");
            }}
          />
        )}

        {activeTab === "jobs" && (
          <div className="space-y-8">
            <div className="flex justify-end">
              <button 
                onClick={() => {
                  if (isJobFormOpen) {
                    resetJobBuilder();
                  } else {
                    setIsJobFormOpen(true);
                  }
                }}
                className="bg-[#1E90FF] hover:bg-[#1570d1] text-white px-4 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
              >
                {isJobFormOpen ? "Cancel" : "+ Create Job"}
              </button>
            </div>
            {isJobFormOpen && (
              <div className="bg-white border border-gray-200 p-6 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                <JobBuilder
                  jobForm={jobForm}
                  updateJobForm={updateJobForm}
                  dynamicFields={dynamicFields}
                  updateDynamicField={updateDynamicField}
                  addField={addField}
                  removeField={removeField}
                  resetJobBuilder={resetJobBuilder}
                  submitJob={submitJob}
                  isCreatingJob={isCreatingJob}
                  editingJobId={editingJobId}
                />
              </div>
            )}
            <JobsTable
              jobs={filteredJobs}
              startEditingJob={startEditingJob}
              setJobPendingDelete={setJobPendingDelete}
              duplicateJob={duplicateJob}
              setPreviewJob={setPreviewJob}
            />
          </div>
        )}

        {activeTab === "applications" && (
          <ApplicationsTable
            applications={applications}
            isLoadingApps={isLoadingApps}
            applicationSearch={applicationSearch}
            setApplicationSearch={setApplicationSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            jobFilter={jobFilter}
            setJobFilter={setJobFilter}
            jobs={jobs}
            loadApplications={loadApplications}
            updateApplicationStatus={updateApplicationStatus}
            setSelectedApplication={setSelectedApplication}
          />
        )}
      </AdminLayout>

      {/* Selected Application Drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-black/30 transition-opacity duration-200 ${
          selectedApplication ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectedApplication(null)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[110] border-l border-gray-200 shadow-xl transform transition-transform duration-200 ${
          selectedApplication ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedApplication && (
          <div className="h-full overflow-y-auto p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#0F172B] cabin-400">
                Applicant Detail
              </h3>
              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
                className="text-gray-600 text-xs border border-gray-300 px-2 py-1 cabin-400"
              >
                Close
              </button>
            </div>
            <p className="text-sm cabin-400 text-[#0F172B]">
              <span className="font-semibold">Name:</span> {selectedApplication.candidateName}
            </p>
            <p className="text-sm cabin-400 text-[#0F172B]">
              <span className="font-semibold">Email:</span> {selectedApplication.candidateEmail}
            </p>
            <p className="text-sm cabin-400 text-[#0F172B]">
              <span className="font-semibold">Role:</span>{" "}
              {selectedApplication.jobId?.title || "N/A"}
            </p>
            <p className="text-sm cabin-400 text-[#0F172B]">
              <span className="font-semibold">CV:</span>{" "}
              <a
                href={selectedApplication.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#1E90FF] hover:underline"
              >
                View uploaded CV
              </a>
            </p>
            <div>
              <p className="text-sm font-semibold text-[#0F172B] cabin-400 mb-2">
                Dynamic Responses
              </p>
              <div className="space-y-2">
                {formatResponses(selectedApplication.responses).length === 0 ? (
                  <p className="text-xs text-gray-600 cabin-400">
                    No responses submitted.
                  </p>
                ) : (
                  formatResponses(selectedApplication.responses).map(([key, value]) => (
                    <div key={key} className="text-sm cabin-400 text-[#0F172B]">
                      <span className="font-semibold">{key}:</span> {String(value)}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Delete Job Modal */}
      <div
        className={`fixed inset-0 z-[120] bg-black/40 transition-opacity duration-200 ${
          jobPendingDelete ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-full w-full flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-gray-200 p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-[#0F172B] cabin-400">Delete Job</h3>
            <p className="mt-2 text-sm text-gray-600 cabin-400">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{jobPendingDelete?.title || "this job"}</span>?
              This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setJobPendingDelete(null)}
                className="border border-gray-300 text-[#0F172B] px-4 py-2 text-sm cabin-400 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={deleteJob}
                className="bg-red-600 text-white px-4 py-2 text-sm cabin-400 hover:bg-red-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <PreviewModal job={previewJob} onClose={() => setPreviewJob(null)} />
    </>
  );
};

export default Admin;
