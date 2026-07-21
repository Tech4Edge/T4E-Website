import { useEffect, useMemo, useState } from "react";
import FilterBar from "../components/careers/FilterBar";
import JobCard from "../components/careers/JobCard";
import ApplicationModal from "../components/careers/ApplicationModal";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const JOBS_PER_PAGE = 10;

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/jobs`);
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        setJobs(Array.isArray(data) ? data : []);
      } catch {
        setJobs([]);
        setErrorMsg("Could not fetch open positions at this time.");
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
  const uniqueDepartments = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.department).filter(Boolean))],
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const text = `${job.title} ${job.description || ""}`.toLowerCase();
      return (
        text.includes(search.toLowerCase()) &&
        (typeFilter === "All" || job.type === typeFilter) &&
        (locationFilter === "All" || job.location === locationFilter) &&
        (departmentFilter === "All" || job.department === departmentFilter)
      );
    });
  }, [jobs, search, typeFilter, locationFilter, departmentFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, typeFilter, locationFilter, departmentFilter]);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + JOBS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const featureTiles = [
    {
      title: "INNOVATE FASTER",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
    },
    {
      title: "COLLABORATE SMARTER",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
    },
    {
      title: "BUILD THE FUTURE",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    },
    {
      title: "DEV INNOVATION",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* 1. Hero Section (Stitch Redesign) */}
      <section className="relative bg-[#061121] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#061121] to-[#061121]"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15)_0%,rgba(6,17,33,0)_70%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 z-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold cabin-400 leading-tight mb-6">
              Join the Frontier of <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Digital Innovation
              </span>
            </h1>
            <p className="text-lg text-gray-400 cabin-400 max-w-2xl mx-auto lg:mx-0 mb-10">
              Join us for next-gen modern design, innovating, and technology of digital innovation.
            </p>
            <a
              href="#open-roles"
              className="inline-block bg-(--color-primary) hover:bg-(--color-primary-dark) text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_15px_rgba(29,78,216,0.5)] transition-all hover:scale-105"
            >
              Explore Open Roles &rarr;
            </a>
          </div>

          {/* Right Graphic */}
          <div className="w-full lg:w-2/5 hidden lg:block z-10 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-[#0a1930] to-[#061121] rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 bg-blue-500/30 rounded-full blur-3xl absolute"></div>
                <svg className="w-32 h-32 text-blue-400 relative z-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Tiles (Stitch Redesign) */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x hide-scrollbar">
            {featureTiles.map((tile, idx) => (
              <div
                key={idx}
                className="relative min-w-[280px] w-72 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden group snap-start cursor-pointer shadow-md border border-gray-100"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-black text-white leading-tight uppercase tracking-wide">
                  {tile.title.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main ATS Section */}
      <section id="open-roles" className="max-w-7xl mx-auto py-12">
        
        {/* Top Filter Bar */}
        <FilterBar
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          uniqueTypes={uniqueTypes}
          uniqueLocations={uniqueLocations}
          uniqueDepartments={uniqueDepartments}
          onReset={() => {
            setSearch("");
            setTypeFilter("All");
            setLocationFilter("All");
            setDepartmentFilter("All");
          }}
        />

        <div className="px-4 sm:px-6 lg:px-8 mt-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-(--color-dark) cabin-400">
              Open Positions
            </h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {filteredJobs.length} roles
            </span>
          </div>

          {errorMsg && (
            <div className="p-4 mb-6 bg-red-50 text-red-700 border border-red-200 rounded-lg">
              {errorMsg}
            </div>
          )}

          {isLoadingJobs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-xl animate-pulse h-40">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No roles found</h3>
              <p className="text-gray-500 mb-6">We couldn't find any positions matching your criteria.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setTypeFilter("All");
                  setLocationFilter("All");
                }}
                className="text-(--color-primary) font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {paginatedJobs.map((job) => (
                  <JobCard 
                    key={job._id} 
                    job={job} 
                    onClick={handleOpenModal} 
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <span className="text-sm font-medium text-gray-600 px-4">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 4. Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen}
        job={selectedJob}
        onClose={() => setIsModalOpen(false)}
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
};

export default Careers;
