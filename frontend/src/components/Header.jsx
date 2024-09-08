import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import GJlogo from "../assets/images/GJlogo.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import { setUserDetails } from "../store/userSlice";

const Header = ({ home }) => {
  const user = useSelector((state) => state?.user);
  const user_id = user?.user?._id;
  console.log("user",user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleLogout = async() => {

    try{
    const response = await axios.get('http://localhost:8080/api/logout')
    console.log(response.data)
    if(response.data.success){
      toast.success(response.data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(response.data.error){
      toast.error(data.message)
    }
  }
  catch(err){
    console.log(err)
    toast.error(err.response.data.message || "Something went wrong")
  }
  }


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Experiences", href: "/experiences" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/", id: "testimonials" }, // Add id for testimonials
    { label: "Contact Us", href: "/contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          !home || !isAtTop ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""
        }`}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between relative py-4 px-4">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link to="/">
              <motion.img
                src={GJlogo}
                alt="GJ"
                className="w-[7vh] mr-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Link>

            <h1 className="text-white text-xl font-bold">Gulaab Jamoon</h1>
          </motion.div>

          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none w-8 h-8 relative"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-[3px] w-8 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-[3px] w-8 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-[3px] w-8 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>

          <motion.nav
            className="hidden lg:flex flex-grow justify-center items-center"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="flex gap-6">
              {menuItems.map(({ label, href }) => (
                <motion.li key={label} variants={itemVariants}>
                  <Link
                    to={href}
                    className={`text-white relative group transition-colors duration-300 hover:text-gray-300 pb-1 ${
                      location.pathname === href ? "text-gray-300" : ""
                    }`}
                  >
                    {label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            className="hidden lg:block"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
          {
            user_id ? (
               <Link
              onClick={handleLogout}
              className="text-white border border-white rounded-full px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
            >
              Logout
            </Link>
            ) :
           ( <Link
              to="/signin"
              className="text-white border border-white rounded-full px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
            >
              Login
            </Link>)
          }
            
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 lg:hidden flex items-center justify-center"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white focus:outline-none w-8 h-8"
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="text-center">
              {menuItems.map(({ label, href }) => (
                <motion.li key={label} className="mb-6" variants={itemVariants}>
                  <Link
                    to={href}
                    className={`text-white text-2xl relative group transition-colors duration-300 hover:text-gray-300 pb-1 ${
                      location.pathname === href ? "text-gray-300" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </motion.li>
              ))}
              <motion.li className="mb-6" variants={itemVariants}>
                <Link
                  to="/signin"
                  className="text-white text-2xl relative group transition-colors duration-300 hover:text-gray-300 pb-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
