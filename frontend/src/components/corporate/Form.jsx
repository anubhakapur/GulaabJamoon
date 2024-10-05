import React, { useState } from 'react';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import riverraft from '../../assets/images/riverraft.jpg';
import parasailing from '../../assets/images/parasailing.jpg';
import {BASE_URL} from '../../constants';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    participants: '',
    budget: '',
    tripDates: '',
    findUs: '',
    moreInfo: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.participants.trim()) newErrors.participants = "Number of participants is required";
    else if (isNaN(formData.participants)) newErrors.participants = "Must be a number";
    if (!formData.budget.trim()) newErrors.budget = "Budget is required";
    else if (isNaN(formData.budget) || parseFloat(formData.budget) < 250000) newErrors.budget = "Budget must be at least $250,000";
    if (!formData.tripDates.trim()) newErrors.tripDates = "Trip dates are required";
    if (!formData.findUs) newErrors.findUs = "Please select an option";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your server
      try{
      const response = await axios.post(`${BASE_URL}/corporate`,formData);
      
      if(response.data.success){
        toast.success(response.data.message);
        setFormData({
          name: '',
          email: '',
          companyName: '',
          participants: '',
          budget: '',
          tripDates: '',
          findUs: '',
          moreInfo: ''
        });
        setErrors({});
      }
    }
    catch(err){
      console.log(err)
      toast.error(err.response.data.message || 'Something went wrong')

    }

      
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <div className="bg-teal-950 text-white min-h-screen flex flex-col lg:flex-row">
      {/* Form Section */}
      <div className="lg:w-1/2 p-8 lg:p-16">
        <h2 className="text-xs uppercase tracking-wide mb-2">START PLANNING YOUR CORPORATE RETREAT</h2>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Request a Complimentary Retreat Proposal</h1>
        <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
        <p className="mb-8 text-xs">
          We'll provide you with an array of hand-selected destinations, potential team activities as well as the corresponding budgets and flights costs for each proposed location.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Inputs */}
          {['name', 'email', 'companyName', 'participants', 'budget', 'tripDates'].map((field) => (
            <div key={field}>
              <input 
                type={field === 'email' ? 'email' : 'text'} 
                name={field} 
                value={formData[field]} 
                onChange={handleChange}
                placeholder={field === 'budget' ? "Trip Budget (Min. $250K)" : field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} 
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
              />
              {errors[field] && <p className="text-red-400 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}

          {/* Dropdown */}
          <div>
            <select 
              name="findUs" 
              value={formData.findUs} 
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            >
              <option value="">Where did you find us?</option>
              <option value="google" className=' bg-black bg-opacity-50'>Google</option>
              <option value="article" className=' bg-black bg-opacity-50'>Article</option>
              <option value="advertisement" className=' bg-black bg-opacity-50'>Advertisement</option>
              <option value="referral" className=' bg-black bg-opacity-50'>Referral</option>
              <option value="social"className=' bg-black bg-opacity-50'>Social Media</option>
              <option value="other" className=' bg-black bg-opacity-50'>Other</option>
            </select>
            {errors.findUs && <p className="text-red-400 text-sm mt-1">{errors.findUs}</p>}
          </div>

          {/* Textarea */}
          <div>
            <textarea
              name="moreInfo" 
              value={formData.moreInfo} 
              onChange={handleChange}
              placeholder="Tell us a bit more about what you're looking to plan (type of experience, locations, etc.)" 
              className="w-full text-sm bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500 h-16"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 transition duration-300">
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 bg-gray-200">
        <div className="h-full flex flex-col">
          <img src={riverraft} alt="River Rafting" className="object-cover flex-1" />
          <img src={parasailing} alt="Parasailing" className="object-cover flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Form;
