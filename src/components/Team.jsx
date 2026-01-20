import React, { useState } from "react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Syed Tatheer Hussain",
      position: "Chief Executive Officer (CEO)",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 2,
      name: "Muhammad Atif",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 3,
      name: "Faras Khursheed",
      position: "App Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 4,
      name: "Waleed",
      position: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 5,
      name: "Muhammad Ali",
      position: "Mern Stack Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 6,
      name: "Muhammad Jalal",
      position: "Mern Stack Developer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <section className="w-full bg-[var(--color-gray-100)] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="cabin-400 text-4xl md:text-5xl font-black text-[var(--color-dark)] mb-4">
            Meet the People Behind Tech4Edges
          </h2>
          <p className="cabin-400 text-[var(--color-gray-600)] text-lg md:text-xl max-w-4xl mx-auto">
            A team of strategists, designers, and engineers building impactful
            digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => {
                setHoveredMember(null);
                setHoveredSocial(null);
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group"
            >
              {/* Social Share Icon - Appears on card hover */}
              <div
                className={`absolute top-4 left-4 z-20 transition-all duration-300 ${
                  hoveredMember === member.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                <div
                  className="relative flex items-center gap-2"
                  onMouseEnter={() => setHoveredSocial(member.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {/* Main Share Button */}
                  <button className="w-10 h-10 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>

                  {/* Social Icons Menu - Expands on share icon hover */}
                  <div
                    className={`flex gap-2 transition-all duration-300 ${
                      hoveredSocial === member.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4 pointer-events-none"
                    }`}
                  >
                    {/* LinkedIn */}
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#0077B5] hover:bg-[#005885] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: "0ms" }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#333333] hover:bg-[#1a1a1a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: "50ms" }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:opacity-80 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Image */}
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center bg-white">
                <h3 className="cabin-400 text-2xl font-bold text-[var(--color-dark)] mb-2">
                  {member.name}
                </h3>
                <p className="cabin-400 text-[var(--color-gray-600)] text-base">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
