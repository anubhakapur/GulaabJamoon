import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "/src/assets/images/bgvid.mp4"; // Update this path to your video file
import { Link } from "react-router-dom";

const Button = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md transition duration-300 text-sm ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

const Input = ({ className, ...props }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md transition duration-300 text-sm ${className}`}
    {...props}
  />
);

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-15"></div>

      {/* Sign up form container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 backdrop-blur-sm"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Date of Birth
            </label>
            <Input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Gender
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75 appearance-none"
              style={{ paddingRight: "2.5rem" }} // Padding to ensure arrow is not cut off
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </motion.select>
          </div>
          <Button
            type="submit"
            className="bg-white text-black rounded-md hover:bg-opacity-90 active:bg-opacity-100 transition-all duration-300"
          >
            Sign Up
          </Button>
        </form>

        <div className="flex items-center my-3 sm:my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-2 text-gray-400 text-xs sm:text-sm">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <p className="mt-3 sm:mt-4 text-center text-gray-300 text-xs sm:text-sm">
          Already have an account?
          <Link
            to="/signin"
            className="text-white hover:underline ml-1 transition duration-300"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
