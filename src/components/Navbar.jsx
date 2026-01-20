import arrow from "../assets/topRightTitledArrow.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-around items-center py-4">
          {/* Logo */}
          <div className="shrink-0">
            <img src={logo} alt="Tech4Edges Logo" className="h-10" />
          </div>

          {/* Navigation Links - Center */}
          <ul className="hidden lg:flex items-center gap-8 cabin-400">
            <li>
              <a href="#" className=" text-[#0F172B] hover:text-[#1E90FF] font-medium transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" text-[#0F172B] hover:text-[#1E90FF] font-medium transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className=" text-[#0F172B] hover:text-[#1E90FF] font-medium transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" text-[#0F172B] hover:text-[#1E90FF] font-medium transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Get in touch Button */}
          <div className="hidden lg:block">
            <button className="cabin-400 text-sm flex items-center gap-4 border border-gray-300 hover:border-[#1E90FF] text-[#0F172B] hover:text-[#1E90FF] font-medium px-4 py-1.5 transition-all duration-300 group">
              Get in touch
              <img src={arrow} className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" alt="Arrow" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-[#0F172B] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
