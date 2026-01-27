import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import arrow from "../assets/topRightTitledArrow.svg";
import logo from "../assets/t4e_icon.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50 text-sm">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex px-5 md:px-0 justify-between md:justify-around items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="shrink-0 z-50 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Tech4Edges Logo" className="h-8 sm:h-10" />
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 cabin-400">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `transition-colors duration-300 relative group ${
                      isActive
                        ? "text-(--color-primary) font-semibold"
                        : "text-(--color-dark) font-medium hover:text-(--color-primary)"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {!isActive && (
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-(--color-primary) transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Get in touch Button (Desktop) */}
          <div className="hidden lg:block">
            
              {" "}
              <button onClick={() => navigate("/contact")} className="cabin-400 text-sm flex items-center gap-4 border border-gray-300 hover:border-(--color-primary) text-(--color-dark) hover:text-(--color-primary) font-medium px-4 py-1.5 transition-all duration-300 group">
                Get in touch
                <img
                  src={arrow}
                  className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  alt="Arrow"
                />
              </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 text-(--color-dark) hover:text-(--color-primary) transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-2 cabin-400">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block py-3 px-4 transition-all duration-300 transform border-l-2 ${
                      isActive
                        ? "text-(--color-primary) bg-gray-50 border-(--color-primary) font-semibold"
                        : "text-(--color-dark) hover:text-(--color-primary) hover:bg-gray-50 border-transparent font-medium"
                    } ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`
                  }
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Get in touch Button */}
          <div
            className={`mt-8 transform transition-all duration-300 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
          >
            <button className="cabin-400 w-full text-sm flex items-center justify-center gap-4 bg-(--color-primary) hover:bg-(--color-primary-dark) text-white font-semibold px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Get in touch
              <img
                src={arrow}
                className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 brightness-0 invert"
                alt="Arrow"
              />
            </button>
          </div>

          {/* Mobile Menu Footer */}
          <div
            className={`mt-auto pb-8 text-center text-xs text-gray-500 cabin-400 transform transition-all duration-300 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? "250ms" : "0ms" }}
          >
            <p>© 2026 Tech4Edges</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
