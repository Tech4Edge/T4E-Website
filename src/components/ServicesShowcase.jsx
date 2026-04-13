import React from "react";
import shape01 from "../assets/shape01.png";
import shape02 from "../assets/shape02.png";
import cardHoverImg from "../assets/cardHoverImg.png";
import servicesTopLeft from "../assets/servicesTopLeft.png";
import web1 from "../assets/services/web1.jpeg";
import web2 from "../assets/services/web2.jpeg";
import web3 from "../assets/services/web3.jpg";
import web4 from "../assets/services/web4.png";
import app1 from "../assets/services/app1.jpg";
import app2 from "../assets/services/app2.jpg";
import app3 from "../assets/services/app3.jpg";
import app4 from "../assets/services/app4.jpeg";
import uiux1 from "../assets/services/uiux1.png";
import uiux2 from "../assets/services/uiux2.jpg";
import uiux3 from "../assets/services/uiux3.png";
import uiux4 from "../assets/services/uiux4.jpg";
import dm1 from "../assets/services/dm1.jpg";
import dm2 from "../assets/services/dm2.jpg";
import dm3 from "../assets/services/dm3.png";
import dm4 from "../assets/services/dm4.jpg";
import saas1 from "../assets/services/saas1.jpg";
import saas2 from "../assets/services/saas2.jpg";
import saas3 from "../assets/services/saas3.jpg";
import saas4 from "../assets/services/saas4.jpg";
import cs1 from "../assets/services/cs1.jpg";
import cs2 from "../assets/services/cs2.jpg";
import cs3 from "../assets/services/cs3.jpg";
import cs4 from "../assets/services/cs4.jpg";

const ServicesShowcase = () => {
  const makePlaceholder = (text, width, height) =>
    `https://placehold.co/${width}x${height}/0f123f/9bb4ff?text=${encodeURIComponent(
      text,
    )}`;

  const services = [
    {
      id: 1,
      title: "Web Development",
      category: "Engineering",
      timeline: "6-14 weeks",
      engagement: "Project / Dedicated Team",
      centerLabel: "WEB",
      description:
        "Scalable, secure web products engineered for growth, reliability, and smooth user journeys across devices.",
      focus: "Modern websites, portals, and enterprise web apps",
      highlights: [
        "Information architecture and conversion-focused page planning",
        "Robust frontend with reusable component systems",
        "Backend integrations, security, and role-based access",
      ],
      deliverables: [
        "Sitemap, UI pages, and frontend build",
        "Admin panels, API integrations, and QA suite",
        "Deployment, handover docs, and optimization roadmap",
      ],
      tools: ["React", "Node.js", "Tailwind", "Vite", "Postman"],
      images: [
        web1,
        web2,
        web3,
        web4,
        makePlaceholder("Web Diagonal Banner", 1600, 640),
      ],
      outcome:
        "Launch-ready web experiences built for speed, trust, and scale.",
    },
    {
      id: 2,
      title: "Mobile Development",
      category: "App Engineering",
      timeline: "8-16 weeks",
      engagement: "MVP / Full Product Team",
      centerLabel: "APP",
      description:
        "Native and cross-platform mobile applications with strong performance, intuitive UX, and reliable release cycles.",
      focus: "Consumer and enterprise mobile products",
      highlights: [
        "Platform strategy for iOS, Android, or cross-platform",
        "Secure authentication and offline-first data handling",
        "Push notifications, analytics, and release governance",
      ],
      deliverables: [
        "Feature map, app flows, and high-fidelity prototypes",
        "Production app modules with testing automation",
        "Store publishing, crash monitoring, and version plan",
      ],
      tools: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
      images: [
        app1,
        app2,
        app3,
        app4,
        makePlaceholder("Mobile Diagonal Banner", 1600, 640),
      ],
      outcome: "Reliable mobile experiences with strong user retention.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      category: "Product Design",
      timeline: "3-8 weeks",
      engagement: "Audit / End-to-End Design",
      centerLabel: "UX",
      description:
        "Human-centered interfaces that combine visual clarity, accessibility, and conversion-driven product thinking.",
      focus: "Research-backed digital product design systems",
      highlights: [
        "User interviews, journey mapping, and usability diagnosis",
        "Wireframes to high-fidelity prototypes with clear states",
        "Design systems and tokenized component specifications",
      ],
      deliverables: [
        "UX audit report with prioritized improvements",
        "Design kit, flows, and responsive screen set",
        "Developer handoff with annotations and interactions",
      ],
      tools: ["Figma", "Adobe XD", "Miro", "Framer", "Hotjar"],
      images: [
        uiux1,
        uiux2,
        uiux3,
        uiux4,
        makePlaceholder("Design Ddiagonal Banner", 1600, 640),
      ],
      outcome: "Intuitive interfaces that raise engagement and trust.",
    },
    {
      id: 4,
      title: "Digital Marketing",
      category: "Growth",
      timeline: "4-12 weeks",
      engagement: "Campaign / Retainer",
      centerLabel: "GROW",
      description:
        "Growth campaigns across SEO, paid channels, and social media to improve visibility and quality lead flow.",
      focus: "Acquisition, visibility, and measurable growth campaigns",
      highlights: [
        "Channel strategy and audience-level campaign mapping",
        "Creative testing and conversion-focused landing optimization",
        "Attribution tracking and weekly performance refinement",
      ],
      deliverables: [
        "Monthly strategy plan and creative direction",
        "Ad sets, copy variants, and funnel landing pages",
        "Performance dashboard and ROI optimization loop",
      ],
      tools: [
        "Google Ads",
        "Meta Ads",
        "Google Analytics",
        "SEMrush",
        "Mailchimp",
      ],
      images: [
        dm1,
        dm2,
        dm3,
        dm4,
        makePlaceholder("Marketing Diagonal Banner", 1600, 640),
      ],
      outcome: "Consistent lead generation supported by clean analytics.",
    },
    {
      id: 5,
      title: "SaaS Solutions",
      category: "Cloud Products",
      timeline: "10-20 weeks",
      engagement: "MVP to Scale",
      centerLabel: "SAAS",
      description:
        "Cloud-first SaaS platforms with modular architecture, subscription workflows, and scalable product foundations.",
      focus: "Productized platforms for recurring revenue models",
      highlights: [
        "Multitenant data architecture and access model design",
        "Billing, trial lifecycle, and subscription automation",
        "Monitoring, backup policy, and incident resilience setup",
      ],
      deliverables: [
        "Roadmap, domain model, and feature sequencing",
        "Auth, billing, workspace, and analytics modules",
        "Cloud deployment pipeline and observability stack",
      ],
      tools: ["AWS", "Stripe", "Docker", "PostgreSQL", "Redis"],
      images: [
        saas1,
        saas2,
        saas3,
        saas4,
        makePlaceholder("SaaS Diagonal Banner", 1600, 640),
      ],
      outcome: "SaaS products designed for recurring growth and resilience.",
    },
    {
      id: 6,
      title: "Consulting & Support",
      category: "Advisory",
      timeline: "Ongoing",
      engagement: "SLA / Strategic Advisory",
      centerLabel: "CARE",
      description:
        "Strategic technology consulting and proactive support that improve reliability, security, and execution clarity.",
      focus: "Technology consulting and long-term reliability support",
      highlights: [
        "Architecture reviews and technical due diligence",
        "Risk logs, security posture checks, and mitigation plans",
        "Runbooks, SLA workflow, and escalation structure",
      ],
      deliverables: [
        "Assessment report with action priority matrix",
        "Process docs, SOPs, and governance recommendations",
        "Maintenance, incident support, and advisory calls",
      ],
      tools: ["Jira", "Confluence", "Sentry", "Datadog", "GitHub"],
      images: [
        cs1,
        cs2,
        cs3,
        cs4,
        makePlaceholder("Consulting Diagonal Banner", 1600, 640),
      ],
      outcome:
        "Stable systems, reduced downtime, and better technical clarity.",
    },
  ];

  return (
    <section className="services_page relative min-h-screen w-full overflow-hidden bg-(--color-dark-bg) py-24 px-4 md:px-8">
      <img
        src={servicesTopLeft}
        alt="decorative shape"
        className="absolute left-10 top-10 h-14 w-14 opacity-70 hidden md:block"
      />
      <img
        src={servicesTopLeft}
        alt="decorative shape mirrored"
        className="absolute right-10 top-10 h-14 w-14 opacity-70 hidden md:block -scale-x-100"
      />
      <img
        src={shape01}
        alt="shape"
        className="absolute left-[14%] top-[18%] h-20 w-20 opacity-45 hidden lg:block"
      />
      <img
        src={shape01}
        alt="shape mirrored"
        className="absolute right-[14%] top-[18%] h-20 w-20 opacity-45 hidden lg:block -scale-x-100"
      />
      <img
        src={shape02}
        alt="shape"
        className="absolute left-[12%] bottom-[14%] h-26 w-26 opacity-35 hidden lg:block"
      />
      <img
        src={shape02}
        alt="shape mirrored"
        className="absolute right-[12%] bottom-[14%] h-26 w-26 opacity-35 hidden lg:block -scale-x-100"
      />

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1e90ff]/25"></div>
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#1e90ff]/25"></div>
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#5d5fff]/20"></div>
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#5d5fff]/20"></div>

      <div className="absolute left-10 top-20 hidden lg:block h-36 w-36 rotate-45 border border-white/20"></div>
      <div className="absolute right-10 top-20 hidden lg:block h-36 w-36 rotate-45 border border-white/20"></div>
      <div className="absolute left-10 bottom-20 hidden lg:block h-36 w-36 rotate-45 border border-white/20"></div>
      <div className="absolute right-10 bottom-20 hidden lg:block h-36 w-36 rotate-45 border border-white/20"></div>
      <div className="absolute top-[28%] left-[8%] hidden lg:block h-8 w-8 rounded-full border border-[#7ec1ff]/50"></div>
      <div className="absolute top-[28%] right-[8%] hidden lg:block h-8 w-8 rounded-full border border-[#7ec1ff]/50"></div>
      <div className="absolute bottom-[26%] left-[7%] hidden lg:block h-10 w-10 border border-[#6b7aff]/45 rotate-45"></div>
      <div className="absolute bottom-[26%] right-[7%] hidden lg:block h-10 w-10 border border-[#6b7aff]/45 rotate-45"></div>
      <div className="absolute top-[45%] left-[4%] hidden xl:block h-14 w-[2px] bg-[#7ec1ff]/40"></div>
      <div className="absolute top-[45%] right-[4%] hidden xl:block h-14 w-[2px] bg-[#7ec1ff]/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="cabin-400 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs tracking-[0.2em] text-white/90">
            DETAILED SERVICES
          </span>
          <h2 className="cabin-400 mt-6 text-3xl md:text-5xl font-bold text-white">
            In-Depth Capabilities
            <span className="text-(--color-primary)">
              {" "}
              Built Around Results
            </span>
          </h2>
          <p className="cabin-400 mt-5 text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-gray-300">
            Every service area includes strategic planning, detailed execution,
            and measurable outcomes so your team gets clarity from day one.
          </p>
        </div>

        <div className="space-y-8 pb-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-[#3e4dba]/70 bg-[#090b30] p-6 md:p-8 hover:border-[#5d78ff]"
            >
              <img
                src={cardHoverImg}
                alt="card decoration"
                className="pointer-events-none absolute right-0 top-0 h-28 w-28 opacity-65"
              />
              <img
                src={shape01}
                alt="shape decoration"
                className="pointer-events-none absolute left-3 top-2 h-12 w-12 opacity-25"
              />
              <img
                src={shape02}
                alt="shape decoration"
                className="pointer-events-none absolute right-3 bottom-3 h-14 w-14 opacity-20"
              />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(30,144,255,0.25),transparent_40%)] opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10 grid lg:grid-cols-[320px,1fr] gap-8 items-start">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="mx-auto lg:mx-0 mb-6 h-44 w-44 relative">
                    <img
                      src={service.images[0]}
                      alt={`${service.title} visual top`}
                      className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-xl border border-[#8ea2ff]/50 object-cover shadow-lg shadow-black/50"
                    />
                    <img
                      src={service.images[1]}
                      alt={`${service.title} visual right`}
                      className="absolute right-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-xl border border-[#8ea2ff]/50 object-cover shadow-lg shadow-black/50"
                    />
                    <img
                      src={service.images[2]}
                      alt={`${service.title} visual bottom`}
                      className="absolute bottom-0 left-1/2 h-14 w-14 -translate-x-1/2 rounded-xl border border-[#8ea2ff]/50 object-cover shadow-lg shadow-black/50"
                    />
                    <img
                      src={service.images[3]}
                      alt={`${service.title} visual left`}
                      className="absolute left-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-xl border border-[#8ea2ff]/50 object-cover shadow-lg shadow-black/50"
                    />

                    <div className="absolute left-1/2 top-1/2 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7ec1ff]/55 bg-[#141953] shadow-[0_0_20px_rgba(30,144,255,0.35)]">
                      <img
                        src={cardHoverImg}
                        alt="center decoration"
                        className="absolute inset-0 h-full w-full object-cover opacity-45 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="cabin-400 text-xs tracking-[0.15em] font-semibold text-white">
                          {service.centerLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="cabin-400 text-xs text-center lg:text-left tracking-[0.2em] text-[#c7d4ff]">
                    {service.focus}
                  </p>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="cabin-400 text-[11px] rounded-full border border-[#6f84ff]/50 bg-[#172061] px-3 py-1 text-[#e3ecff]">
                      {service.category}
                    </span>
                    <span className="cabin-400 text-[11px] rounded-full border border-[#6f84ff]/40 bg-[#111646] px-3 py-1 text-[#d2ddff]">
                      Timeline: {service.timeline}
                    </span>
                    <span className="cabin-400 text-[11px] rounded-full border border-[#6f84ff]/40 bg-[#111646] px-3 py-1 text-[#d2ddff]">
                      {service.engagement}
                    </span>
                  </div>

                  <h3 className="cabin-400 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="cabin-400 mt-3 text-sm leading-relaxed text-[#c7d2ef]">
                    {service.description}
                  </p>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#3245a5] bg-[#0d1038] p-4">
                      <h4 className="cabin-400 text-[#f1f4ff] text-sm font-semibold mb-3">
                        What We Cover
                      </h4>
                      <ul className="space-y-2">
                        {service.highlights.map((item) => (
                          <li
                            key={item}
                            className="cabin-400 text-xs text-[#c2cced] flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7ec1ff]"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-[#3245a5] bg-[#0d1038] p-4">
                      <h4 className="cabin-400 text-[#f1f4ff] text-sm font-semibold mb-3">
                        Core Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="cabin-400 text-xs text-[#c2cced] flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5d78ff]"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="cabin-400 text-xs rounded-full border border-[#4b5fcb] bg-[#111646] px-3 py-1 text-[#dce5ff]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#5a73ff] bg-[#151d59] px-4 py-3">
                    <p className="cabin-400 text-sm text-[#d9e6ff]">
                      <span className="font-semibold text-white">Outcome:</span>{" "}
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
