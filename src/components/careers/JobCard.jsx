import React from "react";

const formatPostedDate = (rawDate) => {
  const date = new Date(rawDate);
  if (Number.isNaN(date.getTime())) {
    return "Recently posted";
  }
  return `Posted ${date.toLocaleDateString()}`;
};

const getJobIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("backend") || t.includes("node")) return "⚙️";
  if (t.includes("frontend") || t.includes("react")) return "💻";
  if (t.includes("design") || t.includes("ui") || t.includes("ux")) return "🎨";
  if (t.includes("marketing") || t.includes("seo")) return "📈";
  if (t.includes("mern") || t.includes("full stack") || t.includes("fullstack")) return "🌐";
  return "⚡";
};

const JobCard = ({ job, onClick }) => {
  const isPremium = job.isActive && new Date(job.postedDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // Posted in last 7 days

  return (
    <article
      className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-(--color-primary) transition-all duration-300 flex flex-col justify-between group cursor-pointer"
      onClick={() => onClick(job)}
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
            {getJobIcon(job.title)}
          </div>
          {isPremium && (
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              🔥 New
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-(--color-dark) cabin-400 mb-2 group-hover:text-(--color-primary) transition-colors">
          {job.title.replace(/^\[TEST\]\s*/i, "")}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2 text-xs cabin-400 mb-6">
          <span className="px-2 py-1 bg-gray-100 text-(--color-gray-600) rounded-md">
            {job.type || "Role"}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-(--color-gray-600) rounded-md">
            {job.location || "Location flexible"}
          </span>
          <span className="text-(--color-gray-500) ml-1">
            • {formatPostedDate(job.postedDate)}
          </span>
        </div>
      </div>

      <div className="flex items-center text-sm font-semibold text-(--color-primary) group-hover:translate-x-1 transition-transform">
        View Details 
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </article>
  );
};

export default JobCard;
