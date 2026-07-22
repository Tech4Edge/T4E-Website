import React from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const ApplicationsTable = ({
  applications,
  isLoadingApps,
  applicationSearch,
  setApplicationSearch,
  statusFilter,
  setStatusFilter,
  jobFilter,
  setJobFilter,
  jobs,
  loadApplications,
  updateApplicationStatus,
  setSelectedApplication,
}) => {
  const exportApplications = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/applications/export`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Export failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `applications_export_${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to export applications.");
    }
  };
  return (
    <div className="space-y-5">
      <div className="grid md:grid-cols-4 gap-3">
        <input
          value={applicationSearch}
          onChange={(event) => setApplicationSearch(event.target.value)}
          placeholder="Search by candidate name or email"
          className="border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm cabin-400 bg-white min-w-[140px] focus:outline-none focus:ring-1 focus:ring-[#1E90FF]"
        >
          <option value="All">All Statuses</option>
          <option value="New">New</option>
          <option value="Under Review">Under Review</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </select>
        <select
          value={jobFilter}
          onChange={(event) => setJobFilter(event.target.value)}
          className="border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
        >
          <option value="All">All Jobs</option>
          {jobs.map((job) => (
            <option key={job._id} value={job._id}>
              {job.title}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={loadApplications}
          className="bg-[#1E90FF] hover:bg-[#1570d1] text-white px-4 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
        >
          {isLoadingApps ? "Loading..." : "Search"}
        </button>
        <button
          type="button"
          onClick={exportApplications}
          className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
        >
          Export Excel
        </button>
      </div>

      <div className="border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-3 py-2 cabin-400 text-(--color-dark)">Candidate</th>
              <th className="px-3 py-2 cabin-400 text-(--color-dark)">Email</th>
              <th className="px-3 py-2 cabin-400 text-(--color-dark)">Role</th>
              <th className="px-3 py-2 cabin-400 text-(--color-dark)">Status</th>
              <th className="px-3 py-2 cabin-400 text-(--color-dark)">Applied</th>
              <th className="px-3 py-2 cabin-400 text-(--color-dark)">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-3 py-6 text-center text-(--color-gray-600) cabin-400"
                >
                  No applications found.
                </td>
              </tr>
            ) : (
              applications.map((application) => (
                <tr key={application._id} className="border-t border-gray-200">
                  <td className="px-3 py-2 cabin-400">{application.candidateName}</td>
                  <td className="px-3 py-2 cabin-400">{application.candidateEmail}</td>
                  <td className="px-3 py-2 cabin-400">
                    {application.jobId?.title || "N/A"}
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={application.status}
                      onChange={(e) => updateApplicationStatus(application._id, e.target.value)}
                      className={`text-xs font-semibold px-2 py-1 rounded border outline-none cursor-pointer appearance-none ${
                        application.status === "New" ? "text-gray-500 border-gray-300 bg-gray-50" :
                        application.status === "Under Review" ? "text-blue-600 border-blue-400 bg-blue-50" :
                        application.status === "Interview" ? "text-yellow-600 border-yellow-400 bg-yellow-50" :
                        application.status === "Offer" ? "text-orange-600 border-orange-400 bg-orange-50" :
                        application.status === "Hired" ? "text-green-600 border-green-400 bg-green-50" :
                        "text-red-600 border-red-400 bg-red-50"
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Interview">Interview</option>
                      <option value="Offer">Offer</option>
                      <option value="Hired">Hired</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-3 py-2 cabin-400">
                    {new Date(application.appliedAt).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2">
                    <button
                      type="button"
                      onClick={() => setSelectedApplication(application)}
                      className="text-[#1E90FF] hover:underline text-xs font-semibold"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsTable;
