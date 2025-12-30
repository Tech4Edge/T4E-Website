import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the hero section (adjust threshold as needed)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic navLink classes based on scroll state
  const navLinkClasses = isScrolled 
    ? "text-[#45556C] hover:text-[#1E90FF] cursor-pointer transition-colors duration-300" 
    : "text-white hover:text-[#1E90FF] cursor-pointer transition-colors duration-300";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg" 
          : "bg-white/10 backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <ul className="flex gap-10 items-center">
        <li className={navLinkClasses}>Home</li>
        <li className={navLinkClasses}>Services</li>
        <li className={navLinkClasses}>About</li>
        <li className={navLinkClasses}>Contact</li>
        <li>
          <button  className="bg-[#1E90FF] hover:bg-[#1570d1] appearance-none text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Start Your Project
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
