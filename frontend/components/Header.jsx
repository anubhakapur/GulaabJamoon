import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/">Logo</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/about-us" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/testimonials" className="text-white hover:text-gray-300">
            Testimonials
          </Link>
          <Link to="/contact-us" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-500 px-3 py-2 rounded hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
