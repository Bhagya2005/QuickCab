import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
            QuickCab
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-600">Home</Link>

            <Link to="/about" className="hover:text-gray-600">Services</Link>
            <Link to="/support" className="hover:text-gray-600">24x7 Support</Link>
            <Link to="/developer" className="hover:text-gray-600">Developer</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">
              Home
            </Link>
            
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">
              Services
            </Link>
            <Link to="/support" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">
              24x7 Support
            </Link>
            <Link to="/developer" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">
              Developer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
