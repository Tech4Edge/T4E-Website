import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import cardHoverImg from "../assets/cardHoverImg.png";
import servicesTopLeft from "../assets/servicesTopLeft.png";
import arrow from "../assets/topRightTitledArrow.svg";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile Development",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-7 h-7 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Digital Marketing",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: "SaaS Solutions",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      id: 6,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Consulting & Support",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
  ];

  gsap.registerPlugin(useGSAP);

  const iconRefs = useRef([]);
  const imgRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        color: "var(--color-primary)",
        duration: 0.3,
      });
      gsap.to(iconRefs.current[index], {
        rotate: 180,
        duration: 0.5,
      });
    }

    if (imgRefs.current[index]) {
      gsap.to(imgRefs.current[index], {
        width: "125px",
        duration: 0.5,
      });
    }
  };

  const handleCardLeave = (index) => {
    setHoveredCard(null);
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        color: "var(--color-white)",
        duration: 0.3,
      });
      gsap.to(iconRefs.current[index], {
        rotate: 0,
        duration: 0.5,
      });
    }

    if (imgRefs.current[index]) {
      gsap.to(imgRefs.current[index], {
        width: "0px",
        duration: 0.5,
      });
    }
  };

  return (
    <section className="min-h-screen w-full bg-[var(--color-dark-bg)] py-24 px-4 relative">
      <img
        src={servicesTopLeft}
        alt="Decorative Top Left"
        className="absolute -top-6 left-20"
      />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="cabin-400 text-4xl md:text-5xl font-bold text-white mb-6">
            Innovative solutions from experts!
          </h2>
          <p className="cabin-400 text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Offers a unified platform that fosters innovation while providing
            end-to-end data management. See how we help your team solve today's
            biggest challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isHovered = hoveredCard === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
                className={`border border-[var(--color-border)] p-6 transition-all duration-300 relative ${
                  isHovered ? "border-white bg-white" : "bg-transparent"
                }`}
              >
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  src={cardHoverImg}
                  alt="Card Hover"
                  className="w-0 absolute top-0 right-0"
                />

                {/* Icon */}
                <div className="mb-6">
                  <div
                    ref={(el) => (iconRefs.current[index] = el)}
                    className="bg-transparent w-8 h-8 rounded-lg flex items-center text-white justify-center transition-colors duration-300"
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`cabin-400 text-xl font-bold mb-4 transition-colors duration-300 ${
                    isHovered ? "text-gray-900" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`cabin-400 text-sm leading-relaxed mb-6 transition-colors duration-300 ${
                    isHovered ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {service.description}
                </p>

                {/* Service Details Link */}
                <a
                  href="#"
                  className={`cabin-400 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 group text-sm ${
                    isHovered ? "text-gray-900" : "text-white"
                  }`}
                >
                  Service Details
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* More Solutions Button */}
        <div className="flex justify-center mt-16">
          <button className="cabin-400 text-sm flex items-center gap-4 border bg-white hover:text-[var(--color-primary)] text-black font-medium px-6 py-2.5 transition-all duration-300 group">
            More Solutions
            <img
              src={arrow}
              className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform duration-300 brightness-0 "
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
