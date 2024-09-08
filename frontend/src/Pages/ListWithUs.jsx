import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ListWithUs = ({ setShowModal }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    experienceIdea: "",
    experienceDescription: "",
    estPeople: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value ? "" : "Name is required";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Valid email is required";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Valid 10-digit phone number is required";
      case "experienceIdea":
        return value ? "" : "Experience Idea is required";
      case "experienceDescription":
        return value ? "" : "Experience Description is required";
      case "estPeople":
        return /^\d+$/.test(value) ? "" : "Estimated number of people must be a number";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(userData).forEach((key) => {
      const error = validateField(key, userData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setUserData({
      name: "",
      email: "",
      phone: "",
      experienceIdea: "",
      experienceDescription: "",
      estPeople: "",
    });
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateForm()) {
      clearForm();
      toast.success("Request Sent!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const renderInput = (name, placeholder, type = "text", size = "full") => (
    <div className={`w-${size}`}>
      <input
        type={type}
        name={name}
        value={userData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50">
      <ToastContainer />
      <motion.div
        className="bg-white text-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-y-auto relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={() => setShowModal(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
        >
          &times;
        </motion.button>

        <h2 className="text-3xl font-bold mb-6">List With Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Larger input fields */}
          {renderInput("name", "Name", "text", "full")}
          {renderInput("email", "Email", "email", "full")}
          {renderInput("phone", "Phone", "text", "full")}
        </div>

        {/* Larger area for Experience Idea and Description */}
        <div className="mt-4">
          {renderInput("experienceIdea", "Experience Idea", "text", "full")}
        </div>
        <div className="mt-4">
          <textarea
            name="experienceDescription"
            value={userData.experienceDescription}
            onChange={handleChange}
            placeholder="Experience Idea Description"
            className={`bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full h-32 resize-none ${
              errors.experienceDescription ? "border-red-500" : ""
            }`}
          />
          {errors.experienceDescription && <p className="text-red-500 text-sm mt-1">{errors.experienceDescription}</p>}
        </div>

        {/* Smaller field for Estimated People */}
        <div className="mt-4 w-1/2">
          {renderInput("estPeople", "Estimated No. of People", "text", "full")}
        </div>

        <div className="flex justify-center mt-6">
          <motion.button
            className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-all duration-300"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ListWithUs;
