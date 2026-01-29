import React, { useState } from "react";
import ali from "../assets/team/ali.jpeg";
import jalal from "../assets/team/jalal.png";
import faras from "../assets/team/faras.png";
import komal from "../assets/team/komal.jpeg";
import masood from "../assets/team/masood.jpeg";
import shaheer from "../assets/team/shaheer.jpeg";
import hadi from "../assets/team/hadi.jpeg";
import asad from "../assets/team/asad.png";
import sadam from "../assets/team/sadam.jpg";
import hassan from "../assets/team/hassan.png";
import tatheer from "../assets/team/tatheer.jpeg";
import shaheen from "../assets/team/shaheen.jpeg";
import haneef from "../assets/team/haneef.jpeg";
import elhaj from "../assets/team/elhaj.jpeg";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Syed Tatheer Hussain",
      position: "Chief Executive Officer (CEO)",
      classes: " object-[50%_15%]",
      image: tatheer,
      social: {
        linkedin: "https://www.linkedin.com/in/tatheer-hussain/",
        github: "https://github.com/00tatheer00",
        instagram: "https://www.instagram.com/tatheerii?igsh=bjlpYmNweTUzZGpi",
      },
    },
    {
      id: 2,
      name: "Shaheen Shah",
      position: "Business Advisor",
      classes: " object-[25%_0%]",
      image: shaheen,
      social: {
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
        // instagram: "https://instagram.com",
      },
    },
    {
      id: 3,
      name: "Elhadj Bah",
      position: "Software Developer (USA)",
      classes: " object-[25%_10%] scale-110",
      image: elhaj,
      social: {
        linkedin: "https://www.linkedin.com/in/elhadj-bah-b5a91b274/",
      },
    },
    {
      id: 4,
      name: "Muhammad Ali",
      position: "Mern stack developer",
      classes: " object-[25%_13%] scale-100",
      image: ali,
      social: {
        linkedin:
          "https://www.linkedin.com/in/muhammadali-dev5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/mali14655",
        instagram: "https://www.instagram.com/ur.ali6?igsh=Yzg3amNidHZqZHZh",
      },
    },
    {
      id: 5,
      name: "Muhammad Haneef Iqbal",
      position: "Lead Generation Specialist",
      classes: " object-[25%_10%]",
      image: haneef,
      social: {
        linkedin: "https://www.linkedin.com/in/muhammad-haneef-iqbal-smm",
      },
    },
    {
      id: 6,
      name: "Muhammad Jalal",
      position: "Mern Intern",
      classes: " object-[25%_22%]",
      image: jalal,
      social: {
        linkedin: "http://www.linkedin.com/in/mjdevstudio",
        github: "http://www.github.com/jalal1122",
        instagram:
          "https://www.instagram.com/jalalkhan2084?igsh=MmowZ215d3pobGUx",
      },
    },
    {
      id: 7,
      name: "Faras Khursheed",
      position: "Mobile Application Developer Intern",
      classes: " object-[25%_18%]",
      image: faras,
      social: {
        linkedin: "https://www.linkedin.com/in/faras-khursheed-b19b23270/",
        github: "https://github.com/Faras-khursheed99",
      },
    },
    {
      id: 8,
      name: "Sadam Hussain",
      position: "Project Manager Intern",
      classes: " object-[25%_15%]",

      image: sadam,
      social: {
        linkedin:
          "https://www.linkedin.com/in/sadamhussain17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/Sadamhussain226",
        instagram:
          "https://www.instagram.com/sadam_hussain220?igsh=eGI3dTJ6bjF2aTdt&utm_source=qr",
      },
    },
    {
      id: 9,
      name: "Masood Haider",
      position: "Mern Intern",
      classes: " object-[25%_30%]",
      image: masood,
      social: {
        linkedin:
          "https://www.linkedin.com/in/masood-haider?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Masood-Haider",
        instagram:
          "https://www.instagram.com/masoodhaiderr?igsh=bjlsMTlnd3h0Z3Bu",
      },
    },
    {
      id: 10,
      name: "Shaheer Ali",
      position: "React Intern",
      classes: " object-[25%_30%] scale-120",
      image: shaheer,
      social: {
        linkedin: "https://www.linkedin.com/in/shaheerali838",
        github: "https://github.com/shaheerali838",
        instagram: "https://www.instagram.com/shaheerali838",
      },
    },
    {
      id: 11,
      name: "Abdul Hadi Shahid",
      position: "Mern Intern",
      classes: " object-top",

      image: hadi,
      social: {
        linkedin: "http://www.linkedin.com/in/abdul-hadi-shahid",
        github: "https://github.com/CH-Abdul-Hadi",
        instagram: "https://www.instagram.com/abdul_hadi_502/",
      },
    },
    {
      id: 12,
      name: "Asad Gul",
      position: "Graphic Designer Intern",
      classes: " object-top",

      image: asad,
      social: {
        linkedin: "https://www.linkedin.com/in/asadgull708/",
        github: "https://github.com/asadgull123",
        instagram:
          "https://www.instagram.com/aggraphics_1?igsh=bXY5ZTUxbm54OXl2&utm_source=qr",
      },
    },
    {
      id: 13,

      name: "Komal Bibi",
      position: "React Intern",
      classes: " object-[25%_22%]",
      image: komal,
      social: {
        linkedin: "https://www.linkedin.com/in/komal-bibi",
        github: "https://github.com/komalbibi",
      },
    },
    {
      id: 14,
      name: "Hassan Ali",
      position: "WordPress Intern",
      classes: " object-[25%_30%]",

      image: hassan,
      social: {
        linkedin:
          "https://www.linkedin.com/in/hassan-ali-90a8a23a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/hassanali69466-lang",
        instagram:
          "https://www.instagram.com/hassanali.87?igsh=dTd2YWllYnljc2kw",
      },
    },
    
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="cabin-400 text-3xl md:text-4xl font-black text-(--color-dark) mb-4">
            Meet the People Behind Tech4Edges
          </h2>
          <p className="cabin-400 text-gray-600 text-sm md:text-md max-w-3xl mx-auto">
            A team of strategists, designers, and engineers building impactful
            digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6">
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
                  <button className="w-8 h-8 bg-(--color-primary) hover:bg-(--color-primary-dark) text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                    <svg
                      className="w-4 h-4"
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
                      className="w-8 h-8 bg-[#0077B5] hover:bg-[#005885] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: "0ms" }}
                    >
                      <svg
                        className="w-4 h-4"
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
                      className="w-8 h-8 bg-[#333333] hover:bg-[#1a1a1a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: "50ms" }}
                    >
                      <svg
                        className="w-4 h-4"
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
                      className="w-8 h-8 bg-linear-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:opacity-80 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <svg
                        className="w-4 h-4"
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
              <div className="w-full h-70 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className={
                    "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" +
                    member.classes
                  }
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center bg-white">
                <h3 className="cabin-400 text-xl font-bold text-(--color-dark) mb-2">
                  {member.name}
                </h3>
                <p className="cabin-400 text-gray-600 text-[13px]">
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
