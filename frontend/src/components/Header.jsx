import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['ABOUT','EXPERIENCES', 'GALLERY', 'TESTIMONIALS','CONTACT US','LOGIN'];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-yellow-500 rounded-full mr-2"></div>
          <h1 className="text-black text-xl font-bold">Experiences</h1>
        </div>
        
        {/* Hamburger menu for small screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Navigation for larger screens */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-black hover:text-yellow-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <ul className="bg-white border-t border-gray-200">
            {menuItems.map((item) => (
              <li key={item} className="border-b border-gray-200">
                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;