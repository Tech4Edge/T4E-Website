import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-your-information", title: "How We Use Your Information" },
    { id: "cookies", title: "Cookies" },
    { id: "data-security", title: "Data Security" },
    { id: "third-party-services", title: "Third-Party Services" },
    { id: "data-sharing", title: "Data Sharing" },
    { id: "your-rights", title: "Your Rights" },
    { id: "external-links", title: "External Links" },
    { id: "policy-updates", title: "Policy Updates" },
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
      { rootMargin: "-100px 0px -60% 0px" } // Adjust to trigger highlight when section is near top
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
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for fixed headers if any
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 cabin-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hidden md:block">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Table of Contents
            </h3>
            <ul className="space-y-3 border-l-2 border-gray-100">
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
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
            Effective Date: July 2026
          </p>

          <div className="space-y-12 text-gray-600 text-sm md:text-base leading-relaxed">
            <section id="introduction">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Introduction</h2>
              <p>At Tech4Edges, protecting your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
            </section>

            <section id="information-we-collect">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect information including:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Name</li>
                <li>Project Requirements</li>
                <li>Messages submitted through contact forms</li>
              </ul>
              <p className="mb-4">We may also collect basic technical information such as:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Website Usage Data</li>
              </ul>
            </section>

            <section id="how-we-use-your-information">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">How We Use Your Information</h2>
              <p className="mb-4">Your information may be used to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Respond to inquiries</li>
                <li>Prepare quotations and proposals</li>
                <li>Deliver requested services</li>
                <li>Improve our website</li>
                <li>Communicate project updates</li>
                <li>Send important service-related information</li>
              </ul>
              <p>We do not sell or rent your personal information.</p>
            </section>

            <section id="cookies">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Cookies</h2>
              <p className="mb-4">Our website may use cookies to improve user experience, analyze website traffic, and enhance functionality.</p>
              <p>You can disable cookies through your browser settings if you prefer.</p>
            </section>

            <section id="data-security">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Data Security</h2>
              <p className="mb-4">We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, misuse, or disclosure.</p>
              <p>However, no online system can guarantee absolute security.</p>
            </section>

            <section id="third-party-services">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Third-Party Services</h2>
              <p className="mb-4">Our website may use third-party tools such as:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Google Analytics</li>
                <li>Google Maps</li>
                <li>Payment Gateways</li>
                <li>Hosting Providers</li>
                <li>Social Media Platforms</li>
              </ul>
              <p>These providers have their own privacy policies governing how they handle your information.</p>
            </section>

            <section id="data-sharing">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Data Sharing</h2>
              <p className="mb-4">We only share information when necessary to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deliver requested services</li>
                <li>Meet legal obligations</li>
                <li>Protect our legal rights</li>
              </ul>
            </section>

            <section id="your-rights">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Your Rights</h2>
              <p className="mb-4">You may request to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p>Requests will be processed within a reasonable timeframe.</p>
            </section>

            <section id="external-links">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">External Links</h2>
              <p className="mb-4">Our website may contain links to external websites.</p>
              <p>Tech4Edges is not responsible for the privacy practices or content of third-party websites.</p>
            </section>

            <section id="policy-updates">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Policy Updates</h2>
              <p className="mb-4">This Privacy Policy may be updated periodically.</p>
              <p>Any changes will be published on this page with the updated effective date.</p>
            </section>

            <section id="contact-us">
              <h2 className="text-xl font-bold text-(--color-dark) mb-4">Contact Us</h2>
              <p>If you have questions regarding this Privacy Policy or how your information is handled, please contact us through our official communication channels.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
