import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shape01 from "../assets/shape01.png";

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: (
        <svg
          className="w-12 h-12"
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
          className="w-12 h-12"
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
          className="w-12 h-12"
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
          className="w-12 h-12"
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

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const cardRefs = useRef([]);
  const iconRefs = useRef([]);
  const numberRefs = useRef([]);
  const sectionRef = useRef(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Entrance animations on scroll
  useGSAP(() => {
    // Animate cards on scroll
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Continuous floating animation for icons
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: -8,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Number badge pulse animation
    numberRefs.current.forEach((badge, index) => {
      if (badge) {
        gsap.to(badge, {
          scale: 1.05,
          duration: 1.5 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, []);

  const handleStepHover = (index) => {
    setHoveredStep(index);
    if (cardRefs.current[index]) {
      gsap.to(cardRefs.current[index], {
        y: -15,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // Rotate icon on hover
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        rotation: 360,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    }

    // Number badge scale
    if (numberRefs.current[index]) {
      gsap.to(numberRefs.current[index], {
        scale: 1.2,
        rotation: 5,
        duration: 0.3,
        ease: "back.out(2)",
      });
    }
  };

  const handleStepLeave = (index) => {
    setHoveredStep(null);
    if (cardRefs.current[index]) {
      gsap.to(cardRefs.current[index], {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // Reset icon rotation
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // Reset number badge
    if (numberRefs.current[index]) {
      gsap.to(numberRefs.current[index], {
        scale: 1,
        rotation: 0,
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

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-block mb-4">
            <span className="cabin-400 text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full">
              Our Process
            </span>
          </div> */}
          <h2 className="cabin-400 text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
            How We Transform Your Vision
          </h2>
          <p className="cabin-400 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A systematic approach that combines strategy, creativity, and
            technology to deliver exceptional results at every stage.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const isHovered = hoveredStep === index;
            return (
              <div
                key={step.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => handleStepHover(index)}
                onMouseLeave={() => handleStepLeave(index)}
                className={`group relative bg-white border-2 transition-all duration-300 p-8 ${
                  isHovered
                    ? "border-[var(--color-primary)] shadow-2xl"
                    : "border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Number Badge */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-[var(--color-primary)] text-white font-bold text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[var(--color-primary)] to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-transparent"></div>
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 mt-4 transition-colors duration-300 ${
                    isHovered ? "text-[var(--color-primary)]" : "text-[var(--color-dark)]"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="cabin-400 text-2xl font-bold text-[var(--color-dark)] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="cabin-400 text-gray-600 text-base leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isHovered
                            ? "bg-[var(--color-primary)] scale-150"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span
                        className={`cabin-400 transition-colors duration-300 ${
                          isHovered
                            ? "text-[var(--color-dark)] font-medium"
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
                    className="w-6 h-6 text-[var(--color-primary)]"
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
          <p className="cabin-400 text-gray-600 mb-6 text-lg">
            Ready to start your journey with us?
          </p>
          <button className="cabin-400 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-8 py-3.5 transition-all duration-300 inline-flex items-center gap-3 group shadow-lg hover:shadow-xl">
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
