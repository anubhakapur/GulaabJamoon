import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import backgroundVideo from "/src/assets/images/bgvid.mp4";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

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

const SignUpOne = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  // const loginwithgoogle = ()=>{
  //       window.open("/auth/google/callback","_self")
  //   }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must include at least 7 characters, a symbol, a number, and an uppercase letter."
      );
    } else {

        try {
      // Make a POST request to your backend API to send a verification email
      const response = await axios.post(`http://localhost:8080/api/signupone`,{email,password});
      console.log(response.data)
      if (response.data.sucess) {
        toast.success(response.data.message || "Verification email sent. Please check your inbox.");
        setEmail("");
        setPassword("");

        const email = response.data.data.email;
        console.log("one",email)
        localStorage.setItem("email", email);
  }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(error.response.data.message || "Error sending verification email. Please try again later.");
    }

    }
  };

  const googleLogin = async() => {
    const provider = new GoogleAuthProvider()
    try{
      const result = await signInWithPopup(auth, provider)
      console.log("result",result)
      try{
        const response = await axios.post('http://localhost:8080/api/signUpGoogle',{email:result.user.email})
        console.log(response.data)
        if(response.data.success){
          toast.success(response.data.message)
          navigate('/signuptwo')
        }
      }
      catch(err){
        console.error(err);
        toast.error(err.response.data.message || "Server error")
      }
      
    }
    catch(err){
      console.error(err);
      toast.error(err.response.data.message || "Server error")
    }
}

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
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

      <div className="absolute inset-0 bg-black opacity-15"></div>

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
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75 ${
                emailError ? "border-red-500" : ""
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
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
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`bg-black bg-opacity-50 text-white placeholder-gray-400 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white hover:bg-opacity-75 ${
                passwordError ? "border-red-500" : ""
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <Button
            type="submit"
            className="bg-white text-black rounded-md hover:bg-opacity-90 active:bg-opacity-100 transition-all duration-300"
          >
            Continue
          </Button>
        </form>

        <div className="flex items-center my-3 sm:my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-2 text-gray-400 text-xs sm:text-sm">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <Button onClick={googleLogin} className="bg-black bg-opacity-50 text-white border border-white rounded-md hover:bg-opacity-75 active:bg-opacity-100 flex items-center justify-center transition-all duration-300">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
          Sign up with Google
        </Button>

        <p className="mt-3 sm:mt-4 text-center text-gray-300 text-xs sm:text-sm">
          Already have an account?
          <Link
            to="/signin"
            className="text-white hover:underline ml-1 transition duration-300"
          >
            Sign in
          </Link>
        </p>
      </motion.div>

      <ToastContainer />
    </div>
  );
};

export default SignUpOne;
