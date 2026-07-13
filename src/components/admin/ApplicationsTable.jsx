import React from "react";

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
          onChange={(event) => setStatusFilter(event.target.value)}
          className="border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
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
          className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-4 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
        >
          {isLoadingApps ? "Loading..." : "Search"}
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
                    <span
                      className={`px-2 py-1 text-xs cabin-400 ${
                        application.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : application.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 cabin-400">
                    {new Date(application.appliedAt).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedApplication(application)}
                        className="border border-(--color-primary) text-(--color-primary) px-2 py-1 text-xs cabin-400 hover:bg-(--color-primary) hover:text-white"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          updateApplicationStatus(application._id, "Accepted")
                        }
                        className="border border-green-300 text-green-700 px-2 py-1 text-xs cabin-400 hover:bg-green-50"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          updateApplicationStatus(application._id, "Rejected")
                        }
                        className="border border-red-300 text-red-700 px-2 py-1 text-xs cabin-400 hover:bg-red-50"
                      >
                        Reject
                      </button>
                    </div>
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
