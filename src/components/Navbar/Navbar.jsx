import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false); // State to toggle products dropdown
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const location = useLocation(); // Get the current route

  const dropdownRef = useRef(null); // Ref for the dropdown container

  const handleLogOut = () => {
    localStorage.setItem("user", "");
    toast.success("User logged out successfully");
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const closeProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
  };


  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-[170]">
      {/* Desktop View */}
      <div className="container mx-auto bg-white p-[12px] md:py-4 md:px-[24px] flex justify-between items-center">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
            <h2 className="text-xl font-bold text-gray-800">SmartCard Ai</h2>
          </Link>
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/whysmartcardai">Why SmartCard Ai?</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/consulting">Consulting</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/">Contact</Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleProductsDropdown}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                Products
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute z-[180] mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/smartcard-ai"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMobileMenu();
                    }}
                  >
                    SmartCard AI
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Conditional Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
            Download
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          <Link
            to="/whysmartcardai"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
            onClick={closeMobileMenu}
          >
            Why SmartCard Ai?
          </Link>
          <Link
            to="/docs"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
            onClick={closeMobileMenu}
          >
            Docs
          </Link>
          <Link
            to="/consulting"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
            onClick={closeMobileMenu}
          >
            Consulting
          </Link>
          <Link
            to="/features"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
            onClick={closeMobileMenu}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
            onClick={closeMobileMenu}
          >
            Pricing
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          {/* Products Dropdown for Mobile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleProductsDropdown}
              className="text-gray-700 hover:text-gray-900 font-medium text-lg focus:outline-none"
            >
              Products
            </button>
            {isProductsDropdownOpen && (
              //   <button
              //     onClick={handleSmartCardAIClick}
              //     className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              //   >
              //     SmartCard Ai
              //   </button>
              <div className="ml-4 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link
                  to="/smartcard-ai"
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    closeProductsDropdown();
                    closeMobileMenu();
                  }}
                >
                  SmartCard AI
                </Link>
              </div>
            )}
          </div>

          {/* Conditional Mobile Buttons */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md text-lg font-semibold transition-colors">
            Download
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
