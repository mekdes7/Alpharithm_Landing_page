import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-[rgb(2,34,70)] text-white p-4 flex items-center justify-between w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
     
      <span className="text-lg font-semibold pl-4 lg:mr-40">
        <img className="logo h-8 md:h-10" src="Logo.png" alt="Logo" />
      </span>

     
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

     
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-grow md:justify-center md:gap-4 lg:gap-10 absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0`}
      >
        <a
          href="/Model"
          className="block md:inline hover:text-gray-300 font-bold py-2 md:py-0 text-sm md:text-balance relative group"
        >
          Models
        
        </a>
        <a
          href="/pricing"
          className="block md:inline hover:text-gray-300 font-bold py-2 md:py-0 text-sm md:text-balance relative group"
        >
          Pricing
         
        </a>
        <a
          href="/about-us"
          className="block md:inline hover:text-gray-300 font-bold py-2 md:py-0 text-sm md:text-balance relative group"
        >
          About Us
         
        </a>
        <a
          href="/contact"
          className="block md:inline hover:text-gray-300 py-2 md:py-0 font-bold text-sm md:text-balance relative group"
        >
          Contact Us
         
        </a>
        <a
          href="/custom"
          className="block md:inline hover:text-gray-300 py-2 md:py-0 font-bold text-sm md:text-balance relative group"
        >
          Custom Models
          
        </a>
      </div>

     
      <div className="hidden md:flex gap-4">
        <button className="relative mt-6 px-4 md:px-3 py-2 md:py-0.5 text-white bg-transparent border-1 font-bold overflow-hidden transition-all duration-500 rounded-xl group">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-sky-600 to-sky-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute inset-0 top-1/4 h-1/4 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 delay-100 ease-out"></span>
          <span className="absolute inset-0 top-1/2 h-1/4 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 delay-200 ease-out"></span>
          <span className="absolute inset-0 top-3/4 h-1/4 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 delay-300 ease-out"></span>
          <span className="absolute top-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[-100%] transition-all duration-300 delay-150"></span>
          <span className="absolute bottom-0 right-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[100%] transition-all duration-300 delay-200"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Login
          </span>
        </button>

        <button className="relative mt-6 px-4 md:px-4 py-2 md:py-2 text-black font-bold rounded-xl overflow-hidden transition-all duration-500 bg-white group">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-sky-600 to-sky-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute inset-0 top-1/4 h-1/4 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 delay-100 ease-out"></span>
          <span className="absolute inset-0 top-1/2 h-1/4 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 delay-200 ease-out"></span>
          <span className="absolute inset-0 top-3/4 h-1/4 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 delay-300 ease-out"></span>
          <span className="absolute top-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[-100%] transition-all duration-300 delay-150"></span>
          <span className="absolute bottom-0 right-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[100%] transition-all duration-300 delay-200"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Get Started Now
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;