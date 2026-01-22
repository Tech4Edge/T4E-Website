import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import shape01 from "../assets/shape01.png";

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Discovery & Consultation",
      description:
        "We dive deep into understanding your business goals, challenges, and vision to craft a tailored strategy.",
      features: [
        "Initial Assessment",
        "Requirement Analysis",
        "Strategic Planning",
      ],
    },
    {
      id: 2,
      number: "02",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Design & Development",
      description:
        "Our expert team brings your vision to life with cutting-edge design and robust development practices.",
      features: ["UI/UX Design", "Agile Development", "Quality Assurance"],
    },
    {
      id: 3,
      number: "03",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Launch & Optimization",
      description:
        "We ensure a seamless launch and continuously optimize for peak performance and user satisfaction.",
      features: ["Deployment", "Performance Tuning", "Ongoing Support"],
    },
    {
      id: 4,
      number: "04",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Scale & Grow",
      description:
        "We monitor, analyze, and enhance your solution as your business evolves and grows over time.",
      features: ["Analytics", "Scalability", "Continuous Innovation"],
    },
  ];

  gsap.registerPlugin(useGSAP);
  const cardRefs = useRef([]);
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleStepHover = (index) => {
    setHoveredStep(index);
    if (cardRefs.current[index]) {
      gsap.to(cardRefs.current[index], {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleStepLeave = (index) => {
    setHoveredStep(null);
    if (cardRefs.current[index]) {
      gsap.to(cardRefs.current[index], {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 relative overflow-hidden">
      {/* decorative Top Left Image */}
      <img
        src={shape01}
        alt="Decorative Shape"
        className="absolute top-0 left-0 w-32 h-32 transform rotate-180"
      />

      {/* decorative Bottom Right Image */}
      <img
        src={shape01}
        alt="Decorative Shape"
        className="absolute bottom-0 right-0 w-32 h-32"
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-(--color-primary) opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-primary) opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-block mb-4">
            <span className="cabin-400 text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full">
              Our Process
            </span>
          </div> */}
          <h2 className="cabin-400 text-3xl md:text-4xl font-bold text-(--color-dark) mb-6">
            How We Transform Your Vision
          </h2>
          <p className="cabin-400 text-gray-600 text-sm md:text-md max-w-2xl mx-auto leading-relaxed">
            A systematic approach that combines strategy, creativity, and
            technology to deliver exceptional results at every stage.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isHovered = hoveredStep === index;
            return (
              <div
                key={step.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => handleStepHover(index)}
                onMouseLeave={() => handleStepLeave(index)}
                className={`group relative bg-white border-2 transition-all duration-300 py-2 px-8 ${
                  isHovered
                    ? "border-(--color-primary) shadow-2xl"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-(--color-primary) text-white font-bold text-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-l from-(--color-primary) to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-linear-to-b from-(--color-primary) to-transparent"></div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 w-20 h-20 transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-(--color-primary) to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-full bg-linear-to-t from-(--color-primary) to-transparent"></div>
                </div>

                {/* Icon */}
                <div
                  className={`mb-3 mt-2 transition-colors duration-300 ${
                    isHovered ? "text-(--color-primary)" : "text-(--color-dark)"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="cabin-400 text-xl font-bold text-(--color-dark) mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="cabin-400 text-gray-600 text-[13px] leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isHovered
                            ? "bg-(--color-primary) scale-150"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span
                        className={`cabin-400 transition-colors text-xs duration-300 ${
                          isHovered
                            ? "text-(--color-dark) font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div
                  className={`absolute bottom-6 right-6 transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-(--color-primary)"
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="cabin-400 text-gray-600 mb-6 text-md">
            Ready to start your journey with us?
          </p>
          <button className="cabin-400 text-sm bg-(--color-primary) hover:bg-(--color-primary-dark) text-white font-semibold px-8 py-3.5 transition-all duration-300 inline-flex items-center gap-3 group shadow-lg hover:shadow-xl">
            Start Your Project
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
