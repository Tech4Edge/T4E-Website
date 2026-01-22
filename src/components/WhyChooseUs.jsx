import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shape01 from "../assets/shape01.png";
import servicesTopLeft from "../assets/servicesTopLeft.png";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  const features = [
    {
      id: 1,
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
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Rapid Deployment",
      description:
        "Launch your product faster with our agile development methodology and streamlined workflows.",
      number: "01",
    },
    {
      id: 2,
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
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Security-First Mindset",
      description:
        "Enterprise-grade security measures to protect your data and ensure compliance at every layer.",
      number: "02",
    },
    {
      id: 3,
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
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      title: "Scalable Architecture",
      description:
        "Built to grow with your business. Our solutions scale seamlessly from startup to enterprise.",
      number: "03",
    },
    {
      id: 4,
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
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
      number: "04",
    },
  ];

  useGSAP(
    () => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
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
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Continuous icon rotation
      // iconsRef.current.forEach((icon) => {
      //   if (icon) {
      //     gsap.to(icon, {
      //       rotateY: 360,
      //       duration: 5,
      //       repeat: -1,
      //       ease: "none",
      //     });
      //   }
      // });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-(--color-dark) py-24 px-4"
    >
      <img
        src={servicesTopLeft}
        alt="Decorative Top Left"
        className="absolute -top-6 left-20"
      />

      {/* decorative Top Left Image */}
      <img
        src={shape01}
        alt="Decorative Shape"
        className="absolute top-0 right-0 w-32 h-32 transform rotate-270"
      />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-(--color-primary) rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-primary) rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="cabin-400 text-(--color-primary) text-xs tracking-[0.3em] uppercase font-semibold">
              Excellence
            </span>
          </div>
          <h2 className="cabin-400 text-3xl md:text-5xl font-black text-white mb-6">
            Why Choose{" "}
            <span className="text-(--color-primary)">Tech4Edges</span>?
          </h2>
          <p className="cabin-400 text-gray-400 text-sm md:text-md max-w-2xl mx-auto leading-relaxed">
            We combine technical excellence with business acumen to deliver
            solutions that drive real results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-(--color-dark-bg) border-2 border-(--color-border) rounded-2xl px-6 py-4 overflow-hidden hover:border-(--color-primary) transition-all duration-500"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-(--color-primary) to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-(--color-primary) opacity-20 text-4xl font-black cabin-400">
                {feature.number}
              </div>

              {/* Geometric Corner Accent */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-(--color-primary) rounded-tl-2xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-(--color-primary) rounded-br-2xl opacity-30"></div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-6 inline-block">
                  <div
                    ref={(el) => (iconsRef.current[index] = el)}
                    className="w-15 h-15 bg-linear-to-br from-(--color-primary) to-(--color-primary-dark) rounded-2xl flex items-center justify-center text-white shadow-lg shadow-(--color-primary)/20 group-hover:shadow-(--color-primary)/40 transition-all duration-500 group-hover:scale-110"
                    // style={{ transformStyle: "preserve-3d" }}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="cabin-400 text-xl font-bold text-white mb-4 group-hover:text-(--color-primary) transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="cabin-400 text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Line Indicator */}
                <div className="mt-4 h-1 w-0 bg-(--color-primary) group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
