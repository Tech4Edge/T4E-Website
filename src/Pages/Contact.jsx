import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import arrow from "../assets/topRightTitledArrow.svg";
import heroImg from "../assets/contact_hero.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToPrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[200px] md:h-[280px] bg-gray-200 flex items-center justify-center overflow-hidden">
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img src={heroImg} alt="Hero" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-(--color-primary) mb-2 cabin-400">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-(--color-white) max-w-2xl mx-auto cabin-400">
            We'd love to hear from you. Get in touch with Tech4Edges
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-(--color-dark) mb-2 cabin-400">
                  Get in touch
                </h2>
                <p className="text-(--color-gray-600) text-sm md:text-base cabin-400">
                  We'd love to hear from you. Please fill out this form.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First and Last Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-medium text-(--color-gray-600) mb-1 cabin-400"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="w-full px-3 py-2 text-sm border border-(--color-gray-300) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 outline-none transition-all duration-300 cabin-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-medium text-(--color-gray-600) mb-1 cabin-400"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="w-full px-3 py-2 text-sm border border-(--color-gray-300) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 outline-none transition-all duration-300 cabin-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-(--color-gray-600) mb-1 cabin-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 text-sm border border-(--color-gray-300) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 outline-none transition-all duration-300 cabin-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-(--color-gray-600) mb-1 cabin-400"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-sm border border-(--color-gray-300) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 outline-none transition-all duration-300 cabin-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-(--color-gray-600) mb-1 cabin-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave us a message..."
                    rows="4"
                    required
                    className="w-full px-3 py-2 text-sm border border-(--color-gray-300) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 outline-none transition-all duration-300 resize-none cabin-400"
                  ></textarea>
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agreeToPrivacy"
                    name="agreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-4 h-4 text-(--color-primary) border-(--color-gray-300) focus:ring-(--color-primary)"
                  />
                  <label
                    htmlFor="agreeToPrivacy"
                    className="text-xs text-(--color-gray-600) cabin-400"
                  >
                    You agree to our friendly{" "}
                    <a
                      href="#"
                      className="text-(--color-primary) hover:underline"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-dark) text-(--color-white) hover:cursor-pointer font-semibold px-6 py-2.5 text-sm transition-all duration-300 shadow-lg hover:shadow-xl group cabin-400"
                >
                  Send message
                  <img
                    src={arrow}
                    className="h-3.5 w-3.5 brightness-0 invert group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    alt="Arrow"
                  />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-(--color-dark) mb-4 cabin-400">
                  Our Office
                </h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-(--color-primary)/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-(--color-primary)"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-(--color-dark) mb-0.5 text-sm cabin-400">
                        Visit us
                      </h4>
                      <p className="text-(--color-gray-600) text-xs cabin-400">
                        Office 332, Sami Tower, Ring Road, Peshawar
                      </p>
                      <p className="text-(--color-gray-600) text-xs cabin-400">
                        Kp, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-(--color-primary)/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-(--color-primary)"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-(--color-dark) mb-0.5 text-sm cabin-400">
                        Email us
                      </h4>
                      <a
                        href="mailto:info@tech4edges.com"
                        className="text-(--color-primary) hover:underline text-xs cabin-400"
                      >
                        info@tech4edges.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-(--color-primary)/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-(--color-primary)"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-(--color-dark) mb-0.5 text-sm cabin-400">
                        Call us
                      </h4>
                      <a
                        href="tel:+92327 5792600"
                        className="text-(--color-primary) hover:underline text-xs cabin-400"
                      >
                        +92 3275792600
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-(--color-primary)/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-(--color-primary)"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-(--color-dark) mb-0.5 text-sm cabin-400">
                        Office Hours
                      </h4>
                      <p className="text-(--color-gray-600) text-xs cabin-400">
                        Monday - Friday
                      </p>
                      <p className="text-(--color-gray-600) text-xs cabin-400">
                        10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Service Image Placeholder */}
              <div className="hidden lg:block mt-8 rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-(--color-primary)/5 to-purple-500/5 h-48 flex items-center justify-center">
                  <p className="text-(--color-gray-400) text-sm cabin-400">
                    Customer Service Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-(--color-gray-200)">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-(--color-dark) mb-2 cabin-400">
              Find Us
            </h2>
            <p className="text-(--color-gray-600) text-sm md:text-base max-w-2xl mx-auto cabin-400">
              Visit our office and let's discuss how we can help transform your
              business
            </p>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.714980587851!2d71.4571641!3d33.9741646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911b7da5ee61b%3A0xb3e8afe37787327!2sTech4Edges!5e0!3m2!1sen!2s!4v1769428871212!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tech4Edges Location"
            ></iframe>
          </div>

          {/* Location Card */}
          <div className="max-w-sm mx-auto">
            <div className="bg-(--color-white) rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-(--color-primary)/10 rounded-full flex items-center justify-center mx-auto mb-3">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-(--color-dark) mb-1 cabin-400">
                Tech4Edges Office
              </h3>
              <p className="text-(--color-gray-600) text-sm mb-3 cabin-400">
                Pakistan
              </p>
              <div className="border-t border-(--color-gray-200) pt-3">
                <p className="text-xs font-semibold text-(--color-gray-600) mb-1 cabin-400">
                  Opening Hours
                </p>
                <p className="text-(--color-gray-600) text-xs cabin-400">
                  Mon-Fri 10am to 5pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
