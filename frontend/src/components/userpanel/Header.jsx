import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="lg:hidden mr-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md">Logout</button>
      </div>
    </header>
  );
};

export default Header;