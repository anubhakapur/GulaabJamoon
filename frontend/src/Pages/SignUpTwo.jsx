import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "/src/assets/images/bgvid.mp4";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import ROLE from "../common/role";

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

const SignUpTwo = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [otherOccupation, setOtherOccupation] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const [timer, setTimer] = useState(3);
  // const [verificationStatus, setVerificationStatus] = useState(null);
  const [phoneError, setPhoneError] = useState("");
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation()
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);
 

  useEffect(() => {
    if (redirecting && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
    if (timer === 0) {
      navigate("/");
    }
  }, [redirecting, timer, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('verified') === 'true') {
      toast.success('Email is verified!');
    }
  }, [location])

  const validatePhoneNumber = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phone)) {
      setPhoneError("Phone number must contain exactly 10 digits.");
      return;
    } else {
      setPhoneError("");
    }

    if (name && phone && dob && gender && occupation) {
      try{
      const response = await axios.post(`http://localhost:8080/api/signuptwo`,{
        name: name,
        phone: phone,
        dob: new Date(dob),
        gender:gender,
        occupation: occupation,
        email : email
      })

      console.log(response)
      if (response.data.success) {
      toast.success("SignUp successful!");
      setName("");
      setPhone("");
      setDob("");
      setGender("");
      setOccupation("");
      setRedirecting(true);
     
    }
    else{
      toast.error("SignUp failed. Please try again.")
    }
  }catch(error){
       console.error("Error during sign up:", error);
          toast.error(error.response.data.message || "An error occurred during sign up.", {
            position: "top-right",
            autoClose: 3000,
          });
  }
  }
  }

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
        <h1 className="text-2xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
          Help us know more about You
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
              required
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
              required
              className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
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
              required
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
              required
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

          <div>
            <label
              htmlFor="occupation"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Occupation
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75 appearance-none"
              style={{ paddingRight: "2.5rem" }}
            >
              <option value="" disabled>
                Select Occupation
              </option>
              <option value="Engineer">Engineer</option>
              <option value="Teacher">Teacher</option>
              <option value="Doctor">Doctor</option>
              <option value="Accountant">Accountant</option>
              <option value="Business">Business</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </motion.select>
          </div>

          {occupation === "Other" && (
            <div>
              <label
                htmlFor="otherOccupation"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
              >
                Specify Occupation
              </label>
              <Input
                id="otherOccupation"
                type="text"
                placeholder="Enter your occupation"
                value={otherOccupation}
                onChange={(e) => setOtherOccupation(e.target.value)}
                className="bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75"
              />
            </div>
          )}

          {redirecting && (
            <p className="text-center text-white mb-3">
              Redirecting to home in {timer} seconds...
            </p>
          )}

          <Button
            type="submit"
            className="bg-white text-black rounded-md hover:bg-opacity-90 active:bg-opacity-100 transition-all duration-300"
          >
            Sign Up
          </Button>
        </form>
  
      </motion.div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SignUpTwo;
