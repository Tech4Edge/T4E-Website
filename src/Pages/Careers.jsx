import { useEffect, useMemo, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const SAMPLE_JOBS = [
  {
    _id: "sample-frontend-engineer",
    title: "Frontend Engineer (React)",
    location: "Peshawar",
    type: "Full-time",
    description:
      "Build modern product interfaces with performance-first implementation and polished user experiences.",
    postedDate: new Date().toISOString(),
    formSchema: [
      { label: "Expected Salary (PKR)", fieldType: "number", required: true },
      { label: "Portfolio URL", fieldType: "text", required: false },
      {
        label: "Notice Period",
        fieldType: "dropdown",
        required: true,
        options: ["Immediate", "15 days", "30 days"],
      },
    ],
  },
  {
    _id: "sample-backend-engineer",
    title: "Backend Engineer (Node.js)",
    location: "Remote",
    type: "Full-time",
    description:
      "Design scalable APIs, secure business logic, and data models that power reliable product workflows.",
    postedDate: new Date().toISOString(),
    formSchema: [
      { label: "Current CTC", fieldType: "number", required: true },
      { label: "GitHub Profile", fieldType: "text", required: false },
      {
        label: "Preferred Shift",
        fieldType: "dropdown",
        required: true,
        options: ["Day", "Evening", "Flexible"],
      },
    ],
  },
];

const formatPostedDate = (rawDate) => {
  const date = new Date(rawDate);
  if (Number.isNaN(date.getTime())) {
    return "Recently posted";
  }
  return `Posted ${date.toLocaleDateString()}`;
};

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [dynamicResponses, setDynamicResponses] = useState({});
  const [cvFile, setCvFile] = useState(null);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/jobs`);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        const list = Array.isArray(data) && data.length > 0 ? data : SAMPLE_JOBS;
        setJobs(list);
        setSelectedJobId(list[0]?._id || "");
      } catch {
        setJobs(SAMPLE_JOBS);
        setSelectedJobId(SAMPLE_JOBS[0]._id);
        setStatusType("error");
        setStatusMessage("Backend unavailable right now. Showing sample jobs.");
      } finally {
        setIsLoadingJobs(false);
      }
    };
    loadJobs();
  }, []);

  const uniqueTypes = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.type).filter(Boolean))],
    [jobs],
  );
  const uniqueLocations = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.location).filter(Boolean))],
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const text = `${job.title} ${job.description || ""}`.toLowerCase();
      return (
        text.includes(search.toLowerCase()) &&
        (typeFilter === "All" || job.type === typeFilter) &&
        (locationFilter === "All" || job.location === locationFilter)
      );
    });
  }, [jobs, search, typeFilter, locationFilter]);

  useEffect(() => {
    if (filteredJobs.length > 0 && !filteredJobs.some((job) => job._id === selectedJobId)) {
      setSelectedJobId(filteredJobs[0]._id);
    }
    if (filteredJobs.length === 0) {
      setSelectedJobId("");
    }
  }, [filteredJobs, selectedJobId]);

  const selectedJob =
    filteredJobs.find((job) => job._id === selectedJobId) ?? filteredJobs[0] ?? null;

  const handleFieldChange = (label, value) => {
    setDynamicResponses((prev) => ({ ...prev, [label]: value }));
  };

  const resetForm = () => {
    setCandidateName("");
    setCandidateEmail("");
    setDynamicResponses({});
    setCvFile(null);
  };

  const handleApply = async (event) => {
    event.preventDefault();
    if (!selectedJob || !cvFile) {
      setStatusType("error");
      setStatusMessage("Please select a job and attach your CV.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("jobId", selectedJob._id);
      formData.append("candidateName", candidateName);
      formData.append("candidateEmail", candidateEmail);
      formData.append("responses", JSON.stringify(dynamicResponses));
      formData.append("cv", cvFile);

      const response = await fetch(`${API_BASE_URL}/apply`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      setStatusType("success");
      setStatusMessage("Application submitted successfully.");
      resetForm();
    } catch (error) {
      setStatusType("error");
      setStatusMessage(error.message || "Could not submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <section className="relative border-b border-gray-200 bg-gradient-to-br from-(--color-dark) via-[#0B3A7A] to-(--color-primary)">
        <div className="absolute -top-12 -left-8 w-48 h-48 rounded-full bg-(--color-primary)/12" />
        <div className="absolute top-20 right-12 w-24 h-24 rotate-12 bg-(--color-primary)/15" />
        <div className="absolute -bottom-10 left-[42%] w-36 h-36 rounded-full border-8 border-(--color-primary)/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-white/85 text-xs md:text-sm font-semibold cabin-400 tracking-wide uppercase">
                Careers at Tech4Edges
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl text-white font-bold cabin-400 leading-tight">
                Build with a team that ships real tech impact.
              </h1>
              <p className="mt-4 text-sm md:text-base text-white/85 cabin-400 max-w-2xl">
                We combine product thinking, design quality, and engineering rigor
                to deliver modern digital systems for ambitious organizations.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              <div className="border border-white/30 bg-white/10 backdrop-blur-sm p-4">
                <p className="text-xs text-white/80 cabin-400">Open Roles</p>
                <p className="text-2xl font-bold text-white cabin-400">{jobs.length}</p>
              </div>
              {/*<div className="border border-white/30 bg-white/10 backdrop-blur-sm p-4">
                <p className="text-xs text-white/80 cabin-400">Teams</p>
                <p className="text-2xl font-bold text-white cabin-400">6</p>
              </div>*/}
              <div className="border border-white/30 bg-white/10 backdrop-blur-sm p-4">
                <p className="text-xs text-white/80 cabin-400">Response</p>
                <p className="text-2xl font-bold text-white cabin-400">48h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <article className="border border-gray-200 p-5 bg-white">
            <h2 className="text-lg font-semibold text-(--color-dark) cabin-400">
              Why Tech4Edges
            </h2>
            <p className="mt-2 text-sm text-(--color-gray-600) cabin-400">
              We solve complex business challenges through focused execution,
              high-quality engineering, and responsible product design.
            </p>
          </article>
          <article className="border border-gray-200 p-5 bg-gradient-to-br from-(--color-primary)/12 to-white">
            <h2 className="text-lg font-semibold text-(--color-dark) cabin-400">
              How We Work
            </h2>
            <p className="mt-2 text-sm text-(--color-gray-600) cabin-400">
              Clear ownership, rapid feedback, practical architecture decisions,
              and a collaborative team culture.
            </p>
          </article>
          <article className="border border-gray-200 p-5 bg-white">
            <h2 className="text-lg font-semibold text-(--color-dark) cabin-400">
              What You Build
            </h2>
            <p className="mt-2 text-sm text-(--color-gray-600) cabin-400">
              Scalable web platforms, internal tools, and customer-facing apps that
              create measurable operational value.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-4">
            <div className="border border-gray-200 bg-white p-5 lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold text-(--color-dark) cabin-400">
                Search & Filter Roles
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                    Search
                  </label>
                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Role or keyword"
                    className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                    Job Type
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(event) => setTypeFilter(event.target.value)}
                    className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                  >
                    {uniqueTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                    Location
                  </label>
                  <select
                    value={locationFilter}
                    onChange={(event) => setLocationFilter(event.target.value)}
                    className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                  >
                    {uniqueLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setTypeFilter("All");
                    setLocationFilter("All");
                  }}
                  className="w-full border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-white px-4 py-2 text-sm transition-colors duration-200 cabin-400"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-6">
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

            {isLoadingJobs ? (
              <div className="border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                <p className="text-sm text-(--color-gray-600) cabin-400">
                  Loading available positions...
                </p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                <p className="text-sm text-(--color-gray-600) cabin-400">
                  No roles matched your filters.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <article
                    key={job._id}
                    className="border border-gray-200 hover:border-(--color-primary) bg-white p-5 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-(--color-dark) cabin-400">
                          {job.title}
                        </h3>
                        <p className="mt-2 text-sm text-(--color-gray-600) cabin-400">
                          {job.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedJobId(job._id)}
                        className="shrink-0 bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-4 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
                      >
                        Apply Now
                      </button>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs cabin-400">
                      <span className="px-2 py-1 bg-(--color-primary)/10 text-(--color-primary)">
                        {job.type || "Role"}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-(--color-dark)">
                        {job.location || "Location flexible"}
                      </span>
                      <span className="text-(--color-gray-600) ml-auto">
                        {formatPostedDate(job.postedDate)}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {selectedJob && (
              <section className="border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-xl font-bold text-(--color-dark) cabin-400">
                  Apply for {selectedJob.title}
                </h2>
                <p className="mt-1 text-sm text-(--color-gray-600) cabin-400">
                  Submit your details and attach your CV to apply.
                </p>

                <form className="mt-5 grid md:grid-cols-2 gap-4" onSubmit={handleApply}>
                  <div>
                    <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={candidateName}
                      onChange={(event) => setCandidateName(event.target.value)}
                      className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={candidateEmail}
                      onChange={(event) => setCandidateEmail(event.target.value)}
                      className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                    />
                  </div>

                  {selectedJob.formSchema.map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                        {field.label}
                      </label>
                      {field.fieldType === "dropdown" ? (
                        <select
                          required={field.required}
                          value={dynamicResponses[field.label] ?? ""}
                          onChange={(event) => handleFieldChange(field.label, event.target.value)}
                          className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                        >
                          <option value="">Select an option</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.fieldType}
                          required={field.required}
                          value={dynamicResponses[field.label] ?? ""}
                          onChange={(event) => handleFieldChange(field.label, event.target.value)}
                          className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                        />
                      )}
                    </div>
                  ))}

                  <div className="md:col-span-2">
                    <label className="block text-xs mb-1 text-(--color-gray-600) cabin-400">
                      Upload CV (PDF or DOCX)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(event) => setCvFile(event.target.files?.[0] || null)}
                      className="w-full border border-(--color-gray-300) px-3 py-2 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 cabin-400 bg-white"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white px-6 py-2 text-sm font-semibold transition-colors duration-200 cabin-400"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
