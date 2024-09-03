import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const Sidebar = ({ setActiveMenu, activeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Profile', 'Reset Password', 'My Bookings'];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 text-3xl font-bold">User Profile</div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item}
            className={`block w-full text-left px-6 py-3 hover:bg-gray-800 transition-colors duration-200 ${
              activeMenu === item ? 'bg-gray-800 border-l-4 border-white' : ''
            }`}
            onClick={() => {
              setActiveMenu(item);
              setIsOpen(false);
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* Hamburger menu for medium and small screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-black text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar for large screens */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-black text-white z-30">
        <SidebarContent />
      </div>

      {/* Animated sidebar for medium and small screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 h-full w-64 bg-black text-white z-30"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for closing sidebar on medium and small screens */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;