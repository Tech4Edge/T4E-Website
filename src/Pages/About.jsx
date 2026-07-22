import React, { useEffect, useRef } from "react";
import Team from "../components/Team";
import CTA from "../components/CTA";

const services = [
  {
    title: "Custom Website Development",
    icon: "language",
  },
  {
    title: "Mobile App Development",
    icon: "smartphone",
  },
  {
    title: "SaaS Product Development",
    icon: "cloud",
  },
  {
    title: "Business Management Systems",
    icon: "settings_system_daydream",
  },
  {
    title: "UI/UX & Graphic Design",
    icon: "design_services",
  },
  {
    title: "Digital Marketing",
    icon: "campaign",
  },
  {
    title: "Business Consultation",
    icon: "support_agent",
    span2: true,
  }
];

const About = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden cabin-400">
      <style>{`
        .hero-gradient {
            background: linear-gradient(135deg, var(--color-dark, #0f172a) 0%, var(--color-primary, #3b82f6) 100%);
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(226, 232, 240, 0.8);
        }
        .animate-on-scroll {
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--color-primary) opacity-20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              Every business starts with an idea, but turning that idea into a successful digital product requires the right team, the right strategy, and the right execution. At Tech4Edges, we help businesses build modern websites, scalable applications, business management systems, SaaS products, and digital marketing strategies that solve real problems.
            </p>
            <p className="text-base text-white/85 max-w-xl">
              We don't believe in creating products just for the sake of technology—we build solutions that make businesses more efficient, visible, and ready for growth.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              alt="Team Collaboration"
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZ2V8y2e_QPFG0OeuS0OphsjZDEOH3yTI_YiXWJPvFtgHYRA_-x_DwGEjbq4-Y5IO_zj1WLxEzeyOBkn7ZLNNyp2LEWHG9CRF4nik3IfWq-tSMqEX2GyPqbATj0_KACOHqEm8n6XzWLS8stAfbMQm-Rifcr29P6q6SRECAKlECJdcNQIOdbhhAi2K2ERg_BGHCBAA-CfsdQKmVkfbquGCbRVCG3UnBZ9YDvb2zIBQVCiXrYB0zZPy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-(--color-primary)">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-(--color-dark) mb-4">Our Mission</h2>
            <p className="text-lg text-(--color-gray-600)">
              To help businesses embrace digital transformation by delivering reliable, user-focused, and innovative technology solutions that create measurable business value.
            </p>
          </div>
          {/* Vision Card */}
          <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '100ms' }}>
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-(--color-primary)">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-(--color-dark) mb-4">Our Vision</h2>
            <p className="text-lg text-(--color-gray-600)">
              To become a trusted technology partner for businesses across the world by delivering software solutions that inspire confidence, drive growth, and simplify the way organizations operate.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different & Location */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg animate-on-scroll opacity-0 translate-y-8">
            <img
              alt="Abstract Tech Concept"
              className="object-contain w-full h-full"
              src="/t4e_icon.png"
            />
            {/* Location Badge Overlay */}
            <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-lg flex items-center gap-3">
              <svg className="w-6 h-6 text-(--color-primary)" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <p className="text-xs text-gray-800 uppercase tracking-wider font-semibold">Based In</p>
                <p className="text-sm font-bold text-(--color-dark)">Office 332, Sami Tower, Ring Road, Peshawar Kp, Pakistan</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-8 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '200ms' }}>
            <div>
              <h2 className="text-4xl font-bold text-(--color-dark) mb-4">What Makes Us Different</h2>
              <div className="w-20 h-1 bg-(--color-primary) mb-6 rounded-full"></div>
            </div>
            <p className="text-lg text-(--color-gray-600)">
              Instead of offering one-size-fits-all solutions, we take the time to understand every business, its challenges, and its goals. Every website, application, management system, or marketing strategy we create is designed around the client's unique requirements.
            </p>
            <p className="text-lg text-(--color-gray-600)">
              We believe that technology should not only look impressive—it should solve problems, improve productivity, and create opportunities for growth.
            </p>
            <div className="bg-blue-50/50 p-6 border-l-4 border-(--color-primary) rounded-r-lg shadow-sm">
              <p className="text-base italic text-gray-800">
                "Whether you're launching a startup, expanding an existing business, or moving your operations online, our team works closely with you from planning to deployment, ensuring every project is built with purpose and attention to detail."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl font-bold text-(--color-dark) mb-4">Our Core Values</h2>
          <p className="text-lg text-(--color-gray-600) max-w-2xl mx-auto">
            The principles that guide our work, our decisions, and our relationships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Value 1 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 animate-on-scroll opacity-0 translate-y-8">
            <svg className="w-8 h-8 text-(--color-primary) mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="text-2xl font-semibold text-(--color-dark) mb-2">Client-First Approach</h3>
            <p className="text-base text-(--color-gray-600)">
              Every decision begins with understanding our client's business needs.
            </p>
          </div>
          {/* Value 2 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '100ms' }}>
            <svg className="w-8 h-8 text-(--color-primary) mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-semibold text-(--color-dark) mb-2">Quality Over Quantity</h3>
            <p className="text-base text-(--color-gray-600)">
              We focus on delivering work we're proud to stand behind.
            </p>
          </div>
          {/* Value 3 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '200ms' }}>
            <svg className="w-8 h-8 text-(--color-primary) mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-2xl font-semibold text-(--color-dark) mb-2">Innovation with Purpose</h3>
            <p className="text-base text-(--color-gray-600)">
              We adopt modern technologies where they genuinely improve results.
            </p>
          </div>
          {/* Value 4 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '300ms' }}>
            <svg className="w-8 h-8 text-(--color-primary) mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <h3 className="text-2xl font-semibold text-(--color-dark) mb-2">Transparency</h3>
            <p className="text-base text-(--color-gray-600)">
              Clear communication and honest collaboration are at the heart of every project.
            </p>
          </div>
          {/* Value 5 */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 lg:col-span-2 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '400ms' }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <svg className="w-12 h-12 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold text-(--color-dark) mb-2">Continuous Growth</h3>
                <p className="text-base text-(--color-gray-600)">
                  Technology evolves every day, and so do we. We continuously learn, improve, and adapt to deliver better solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-4xl font-bold text-(--color-dark) mb-6">Our Core Expertise</h2>
            <p className="text-lg text-(--color-gray-600) mb-8">
              Comprehensive digital solutions tailored to elevate your business operations and market presence.
            </p>
            <a className="inline-flex items-center gap-2 text-(--color-primary) font-semibold hover:underline" href="/services">
              Explore All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '200ms' }}>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, idx) => (
                <li key={idx} className={`flex items-center gap-3 py-3 border-b border-gray-200 ${service.span2 ? 'sm:col-span-2' : ''}`}>
                  {/* We use basic SVG for icons here, substituting Google Material Icons */}
                  <div className="text-(--color-primary)">
                    {service.icon === "language" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
                    {service.icon === "smartphone" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                    {service.icon === "cloud" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
                    {service.icon === "settings_system_daydream" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    {service.icon === "design_services" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
                    {service.icon === "campaign" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>}
                    {service.icon === "support_agent" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
                  </div>
                  <span className="text-base font-medium text-(--color-dark)">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <Team />

      {/* CTA */}
      <CTA />
    </main>
  );
};

export default About;
