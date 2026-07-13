import React from "react";

const JobsTable = ({ jobs, startEditingJob, setJobPendingDelete }) => {
  return (
    <div className="border border-gray-200 overflow-x-auto">
      <table className="w-full min-w-[760px] text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-3 py-2 cabin-400 text-(--color-dark)">Title</th>
            <th className="px-3 py-2 cabin-400 text-(--color-dark)">Location</th>
            <th className="px-3 py-2 cabin-400 text-(--color-dark)">Type</th>
            <th className="px-3 py-2 cabin-400 text-(--color-dark)">Status</th>
            <th className="px-3 py-2 cabin-400 text-(--color-dark)">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="px-3 py-6 text-center text-(--color-gray-600) cabin-400"
              >
                No jobs created yet.
              </td>
            </tr>
          ) : (
            jobs.map((job) => (
              <tr key={job._id} className="border-t border-gray-200">
                <td className="px-3 py-2 cabin-400">{job.title}</td>
                <td className="px-3 py-2 cabin-400">{job.location || "-"}</td>
                <td className="px-3 py-2 cabin-400">{job.type || "-"}</td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 text-xs cabin-400 ${
                      job.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {job.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEditingJob(job)}
                      className="border border-(--color-primary) text-(--color-primary) px-2 py-1 text-xs cabin-400 hover:bg-(--color-primary) hover:text-white"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setJobPendingDelete(job)}
                      className="border border-red-300 text-red-700 px-2 py-1 text-xs cabin-400 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobsTable;
