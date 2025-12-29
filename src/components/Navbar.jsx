import logo from "../assets/logo.svg";

const Navbar = () => {
    // navLink Classes
    const navLinkClasses = "text-[#45556C] hover:text-[#1E90FF] cursor-pointer";

  return (
    <div className="flex justify-between items-center px-10 py-4" >
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="flex gap-10 items-center">
        <li className={navLinkClasses} >Home</li>
        <li className={navLinkClasses}>Services</li>
        <li className={navLinkClasses}>About</li>
        <li className={navLinkClasses}>Contact</li>
        <li>
          {" "}
          <button className="bg-[#1E90FF] appearance-none text-white px-4 py-2 rounded-lg" >Start Your Project</button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
