import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector } from "react-redux";

const ResetPassword = () => {

  const user = useSelector((state) => state?.user?.user);
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  // const mockProfile = {
  //   email: "john.doe@example.com",
  //   password: "OldPassword123!",
  // };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{7,}$/;
    return regex.test(password);
  };

  const handleResetPassword = async() => {
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validatePassword(newPassword)) {
      newErrors.newPassword =
        "Password must be at least 7 characters long, contain at least 1 uppercase letter, 1 special symbol, and 1 digit";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (email !== user.email) {
      toast.error("Invalid email address");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    // toast.success("Password Changed");
    
    // Add the API call here to send the data to the backend
    try{
      const response = await axios.post("http://localhost:8080/api/reset-password",{
        email,
        oldPassword,
        newPassword
      })

      if(response.data.success){
        toast.success(response.data.message);
        setEmail("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        
      }  
        
    }
    catch(error){
      console.error(error);
      toast.error(error.response.data.message || "Server error");
    }

  };

  const handleForgotPassword = () => {
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (email !== mockProfile.email) {
      toast.error("Invalid email");
    } else {
      toast.success("Verification email sent");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-12 mb-12">
        <ToastContainer /> {/* Ensure this is included */}
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          {forgotPasswordMode ? "Forgot Password" : "Reset Password"}
        </h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: focusedField === "email" ? 1.05 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <input
              type="email"
              value={email}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out"
            />
          </motion.div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>
        {!forgotPasswordMode && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Old Password
              </label>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: focusedField === "oldPassword" ? 1.05 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <input
                  type="password"
                  value={oldPassword}
                  onFocus={() => setFocusedField("oldPassword")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out"
                />
              </motion.div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: focusedField === "newPassword" ? 1.05 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <input
                  type="password"
                  value={newPassword}
                  onFocus={() => setFocusedField("newPassword")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      newPassword: "",
                    }));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out"
                />
              </motion.div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.newPassword}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <motion.div
                initial={{ scale: 1 }}
                animate={{
                  scale: focusedField === "confirmPassword" ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <input
                  type="password"
                  value={confirmPassword}
                  onFocus={() => setFocusedField("confirmPassword")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out"
                />
              </motion.div>
            </div>
          </>
        )}
        <div className="text-center">
          {forgotPasswordMode ? (
            <>
              <button
                onClick={handleForgotPassword}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 active:outline-none active:ring-2 active:ring-offset-2 active:ring-black transition duration-150 ease-in-out"
              >
                Verify Email
              </button>
              <p className="mt-4 text-sm text-gray-600">
                <button
                  onClick={() => setForgotPasswordMode(false)}
                  className="text-black underline hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Back to Reset Password
                </button>
              </p>
            </>
          ) : (
            <>
              <button
                onClick={handleResetPassword}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 active:outline-none active:ring-2 active:ring-offset-2 active:ring-black transition duration-150 ease-in-out"
              >
                Reset Password
              </button>
              <p className="mt-4 text-sm text-gray-600">
                <button
                  onClick={() => setForgotPasswordMode(true)}
                  className="text-black underline hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Forgot Password?
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
