import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import MainNavbar from "./nav/MainNavbar";
import { Link } from "react-router-dom";

function Header () {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(prev => !prev);
   const closeMenu = () => setIsMenuOpen(false);

return (
    <>
    <div className="w-full">
    <header className="flex items-center justify-between p-4 mx-4">
        {/* Logo */}
        <div className="flex items-center">
            <Link href="/Home" className="h-16 w-auto"><img 
                className="h-16 w-auto"
                src={logo}
                alt=""
            />
            </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden text-center sm:block flex-1 mx-2 sm:mx-4 lg:mx-8">
            <input
            type="text"
            className="w-full max-w-[150px] sm:max-w-xs lg:max-w-md px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm lg:text-base"
            />
        </div>

        <div className="hidden sm:flex space-x-2 sm:space-x-4 lg:space-x-6">
            <nav className="flex space-x-10">
                <MainNavbar />
            </nav>
        </div>

         {/* Hamburger */}
         <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        </header>

       {/* Mobile Dropdown */}
       <div
        className={`sm:hidden items-start overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <Link to="/tech" className="text-gray-700 w-full ml-14 hover:text-blue-600" onClick={closeMenu}>tech</Link>
          <Link to="/media" className="text-gray-700 w-full ml-14 hover:text-blue-600" onClick={closeMenu}>media</Link>
          <Link to="/culinary" className="text-gray-700 w-full ml-14 hover:text-blue-600" onClick={closeMenu}>culinary</Link>
        </nav>
      </div>
      </div>
    </>
    
            
    )
}

export default Header;