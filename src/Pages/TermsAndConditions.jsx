import React, { useEffect, useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "services", title: "1. Services" },
    { id: "project-agreement", title: "2. Project Agreement" },
    { id: "payment-terms", title: "3. Payment Terms" },
    { id: "client-responsibilities", title: "4. Client Responsibilities" },
    { id: "intellectual-property", title: "5. Intellectual Property" },
    { id: "revisions", title: "6. Revisions" },
    { id: "project-delivery", title: "7. Project Delivery" },
    { id: "third-party-services", title: "8. Third-Party Services" },
    { id: "website-maintenance", title: "9. Website Maintenance" },
    { id: "limitation-of-liability", title: "10. Limitation of Liability" },
    { id: "confidentiality", title: "11. Confidentiality" },
    { id: "termination", title: "12. Termination" },
    { id: "changes-to-terms", title: "13. Changes to These Terms" },
    { id: "contact-us", title: "Contact Us" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 cabin-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hidden md:block">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Document Outline
            </h3>
            <ul className="space-y-3 border-l-2 border-gray-100 mb-8">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleScrollTo(section.id)}
                    className={`text-left text-sm transition-colors duration-200 pl-4 border-l-2 -ml-[2px] ${
                      activeSection === section.id
                        ? "text-(--color-primary) border-(--color-primary) font-semibold"
                        : "text-gray-600 hover:text-(--color-primary) border-transparent"
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-(--color-primary) border border-(--color-primary) rounded-md hover:bg-(--color-primary)/5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Version
              </button>
              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-white bg-(--color-primary) rounded-md hover:bg-(--color-primary-dark) transition-colors shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
            Effective Date: July 2026
          </p>

          <div className="space-y-12 text-gray-600 text-sm md:text-base leading-relaxed">
            <div>
              <p>Welcome to Tech4Edges. By accessing our website or using our services, you agree to comply with the following Terms & Conditions. Please read them carefully before using our website or engaging our services.</p>
            </div>

            <section id="services">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">1. Services</h2>
              <p className="mb-4">Tech4Edges provides digital solutions including, but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Website Development</li>
                <li>Mobile Application Development</li>
                <li>SaaS Solutions</li>
                <li>Business Management Systems</li>
                <li>UI/UX & Graphic Design</li>
                <li>Digital Marketing</li>
                <li>Business Consultation</li>
              </ul>
              <p>The scope of each project will be defined through a mutually agreed proposal, quotation, or service agreement.</p>
            </section>

            <section id="project-agreement">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">2. Project Agreement</h2>
              <p className="mb-2">Every project begins after the client approves the proposal and any required advance payment is received.</p>
              <p>Changes requested after project approval may affect the timeline, scope, and pricing.</p>
            </section>

            <section id="payment-terms">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">3. Payment Terms</h2>
              <p className="mb-2">Clients agree to make payments according to the agreed payment schedule.</p>
              <p className="mb-2">Late payments may result in delays or suspension of work until outstanding balances are cleared.</p>
              <p>All completed work remains the property of Tech4Edges until full payment has been received.</p>
            </section>

            <section id="client-responsibilities">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">4. Client Responsibilities</h2>
              <p className="mb-4">The client agrees to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Provide accurate project requirements.</li>
                <li>Submit content, images, and necessary information on time.</li>
                <li>Review project milestones promptly.</li>
                <li>Provide feedback within a reasonable timeframe.</li>
              </ul>
              <p>Delays in client communication may impact project deadlines.</p>
            </section>

            <section id="intellectual-property">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">5. Intellectual Property</h2>
              <p className="mb-2">Upon full payment, ownership of the final approved project will be transferred to the client unless otherwise agreed in writing.</p>
              <p>Tech4Edges reserves the right to showcase completed work in its portfolio unless the project is covered by a confidentiality agreement.</p>
            </section>

            <section id="revisions">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">6. Revisions</h2>
              <p className="mb-2">The number of revisions included in a project depends on the agreed proposal.</p>
              <p>Requests beyond the agreed revisions may incur additional charges.</p>
            </section>

            <section id="project-delivery">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">7. Project Delivery</h2>
              <p className="mb-2">Delivery timelines are estimates based on the agreed project scope.</p>
              <p>Unexpected technical challenges or client delays may require adjustments to delivery schedules.</p>
            </section>

            <section id="third-party-services">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">8. Third-Party Services</h2>
              <p className="mb-2">Projects may involve third-party tools, hosting providers, APIs, payment gateways, or software.</p>
              <p>Tech4Edges is not responsible for downtime, policy changes, or service interruptions caused by third-party providers.</p>
            </section>

            <section id="website-maintenance">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">9. Website Maintenance</h2>
              <p>Unless covered under a maintenance agreement, Tech4Edges is not responsible for future updates, security patches, or ongoing maintenance after project completion.</p>
            </section>

            <section id="limitation-of-liability">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">10. Limitation of Liability</h2>
              <p>Tech4Edges shall not be held responsible for indirect, incidental, or consequential damages arising from the use of our services or website.</p>
            </section>

            <section id="confidentiality">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">11. Confidentiality</h2>
              <p>All confidential information shared during a project will be handled responsibly and will not be disclosed without permission unless required by law.</p>
            </section>

            <section id="termination">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">12. Termination</h2>
              <p className="mb-2">Either party may terminate a project with written notice.</p>
              <p>Completed work and payments made prior to termination are non-refundable unless otherwise agreed.</p>
            </section>

            <section id="changes-to-terms">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">13. Changes to These Terms</h2>
              <p className="mb-2">Tech4Edges reserves the right to update these Terms & Conditions at any time.</p>
              <p>The latest version will always be available on this website.</p>
            </section>

            <section id="contact-us" className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions regarding these Terms & Conditions, please contact us.</p>
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-(--color-primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@tech4edges.com" className="text-(--color-primary) font-semibold hover:underline">
                  info@tech4edges.com
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
