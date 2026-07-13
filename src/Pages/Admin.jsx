import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";
import JobBuilder from "../components/admin/JobBuilder";
import JobsTable from "../components/admin/JobsTable";
import ApplicationsTable from "../components/admin/ApplicationsTable";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const defaultField = {
  label: "",
  fieldType: "text",
  required: false,
  optionsText: "",
};

const defaultField = {
  label: "",
  fieldType: "text",
  required: false,
  optionsText: "",
};

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("jobs");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("success");

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
      setApplications(Array.isArray(data) ? data : []);
      setSelectedApplication((prev) =>
        prev ? data.find((item) => item._id === prev._id) || null : null,
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
  };

  const startEditingJob = (job) => {
    setEditingJobId(job._id);
    setActiveTab("jobs");
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

  if (isInitializing) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-(--color-dark)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white cabin-400">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-300 cabin-400">
              Manage jobs and applications from one ATS workspace.
            </p>
          </div>
          {isAuthenticated && (
            <button
              type="button"
              onClick={handleLogout}
              className="border border-white/30 text-white hover:bg-white hover:text-(--color-dark) px-4 py-2 text-sm cabin-400 transition-colors duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {statusMessage && (
          <div
            className={`p-3 text-sm border cabin-400 ${
              statusType === "success"
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {!isAuthenticated ? (
          <div className="max-w-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-(--color-dark) cabin-400">
              Admin Login
            </h2>
            <p className="mt-1 text-sm text-(--color-gray-600) cabin-400">
              Use `ADMIN_USERNAME` and `ADMIN_PASSWORD` configured on the backend.
            </p>
            <form className="mt-4 space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                  Username
                </label>
                <input
                  required
                  value={loginForm.username}
                  onChange={(event) =>
                    setLoginForm((prev) => ({ ...prev, username: event.target.value }))
                  }
                  className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
                />
              </div>
              <div>
                <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(event) =>
                    setLoginForm((prev) => ({ ...prev, password: event.target.value }))
                  }
                  className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
                />
              </div>
              <button
                type="submit"
                disabled={isLoggingIn}
                className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-6 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
              >
                {isLoggingIn ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        ) : (
          <div className="border border-gray-200 bg-white">
            <div className="border-b border-gray-200 flex">
              <button
                type="button"
                onClick={() => setActiveTab("jobs")}
                className={`px-5 py-3 text-sm font-semibold cabin-400 transition-colors duration-200 ${
                  activeTab === "jobs"
                    ? "text-(--color-primary) border-b-2 border-(--color-primary)"
                    : "text-(--color-dark)"
                }`}
              >
                Jobs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("applications")}
                className={`px-5 py-3 text-sm font-semibold cabin-400 transition-colors duration-200 ${
                  activeTab === "applications"
                    ? "text-(--color-primary) border-b-2 border-(--color-primary)"
                    : "text-(--color-dark)"
                }`}
              >
                Applications
              </button>
            </div>

            <div className="p-5">
              {activeTab === "jobs" ? (
                <div className="space-y-8">
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

                  <JobsTable
                    jobs={jobs}
                    startEditingJob={startEditingJob}
                    setJobPendingDelete={setJobPendingDelete}
                  />
                </div>
              ) : (
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
            </div>
          </div>
        )}
      </section>

      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 ${
          selectedApplication ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectedApplication(null)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 border-l border-gray-200 shadow-xl transform transition-transform duration-200 ${
          selectedApplication ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedApplication && (
          <div className="h-full overflow-y-auto p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-(--color-dark) cabin-400">
                Applicant Detail
              </h3>
              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
                className="text-(--color-gray-600) text-xs border border-gray-300 px-2 py-1 cabin-400"
              >
                Close
              </button>
            </div>
            <p className="text-sm cabin-400 text-(--color-dark)">
              <span className="font-semibold">Name:</span> {selectedApplication.candidateName}
            </p>
            <p className="text-sm cabin-400 text-(--color-dark)">
              <span className="font-semibold">Email:</span> {selectedApplication.candidateEmail}
            </p>
            <p className="text-sm cabin-400 text-(--color-dark)">
              <span className="font-semibold">Role:</span>{" "}
              {selectedApplication.jobId?.title || "N/A"}
            </p>
            <p className="text-sm cabin-400 text-(--color-dark)">
              <span className="font-semibold">CV:</span>{" "}
              <a
                href={selectedApplication.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="text-(--color-primary) hover:underline"
              >
                View uploaded CV
              </a>
            </p>
            <div>
              <p className="text-sm font-semibold text-(--color-dark) cabin-400 mb-2">
                Dynamic Responses
              </p>
              <div className="space-y-2">
                {formatResponses(selectedApplication.responses).length === 0 ? (
                  <p className="text-xs text-(--color-gray-600) cabin-400">
                    No responses submitted.
                  </p>
                ) : (
                  formatResponses(selectedApplication.responses).map(([key, value]) => (
                    <div key={key} className="text-sm cabin-400 text-(--color-dark)">
                      <span className="font-semibold">{key}:</span> {String(value)}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </aside>

      <div
        className={`fixed inset-0 z-60 bg-black/40 transition-opacity duration-200 ${
          jobPendingDelete ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-full w-full flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-gray-200 p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-(--color-dark) cabin-400">Delete Job</h3>
            <p className="mt-2 text-sm text-(--color-gray-600) cabin-400">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{jobPendingDelete?.title || "this job"}</span>?
              This action cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setJobPendingDelete(null)}
                className="border border-gray-300 text-(--color-dark) px-4 py-2 text-sm cabin-400 hover:bg-gray-50"
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
    </main>
  );
};

export default Admin;
