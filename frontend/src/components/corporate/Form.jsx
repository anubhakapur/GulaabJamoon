import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your server
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <div className="bg-teal-950 text-white min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-8 lg:p-16">
        <h2 className="text-xs uppercase tracking-wide mb-2">START PLANNING YOUR CORPORATE RETREAT</h2>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Request a Complimentary Retreat Proposal</h1>
        <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
        <p className="mb-8 text-xs">We'll provide you with an array of hand-selected destinations, potential team activities as well as the corresponding budgets and flights costs for each proposed location.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Your Name" 
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder="Your Email" 
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange}
              placeholder="Company Name" 
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            />
            {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="participants" 
              value={formData.participants} 
              onChange={handleChange}
              placeholder="Number of Participants" 
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            />
            {errors.participants && <p className="text-red-400 text-sm mt-1">{errors.participants}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="budget" 
              value={formData.budget} 
              onChange={handleChange}
              placeholder="Trip Budget (Min. $250K)" 
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            />
            {errors.budget && <p className="text-red-400 text-sm mt-1">{errors.budget}</p>}
          </div>
          <div>
            <input 
              type="text" 
              name="tripDates" 
              value={formData.tripDates} 
              onChange={handleChange}
              placeholder="Trip Dates (Exact or Time of Year)" 
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            />
            {errors.tripDates && <p className="text-red-400 text-sm mt-1">{errors.tripDates}</p>}
          </div>
          <div>
            <select 
              name="findUs" 
              value={formData.findUs} 
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500"
            >
              <option value="">Where did you find us?</option>
              <option value="google">Google</option>
              <option value="article">Article</option>
              <option value="advertisement">Advertisement</option>
              <option value="referral">Referral</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
            {errors.findUs && <p className="text-red-400 text-sm mt-1">{errors.findUs}</p>}
          </div>
          <div>
            <textarea
              name="moreInfo" 
              value={formData.moreInfo} 
              onChange={handleChange}
              placeholder="Tell us a bit more about what you're looking to plan (type of experience, locations, etc.) Please note that Moniker is unable to assist with retreats with budgets under $250K at this time." 
              className="w-full text-sm bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-yellow-500 h-16"
            ></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-black font-bold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 bg-gray-200">
        <div className="h-full flex flex-col">
          <img src="/api/placeholder/800/400?text=Camel+Riding" alt="Camel Riding" className="object-cover flex-1" />
          <img src="/api/placeholder/800/400?text=Lake+Activities" alt="Lake Activities" className="object-cover flex-1" />
          <img src="/api/placeholder/800/400?text=Mountain+View" alt="Mountain View" className="object-cover flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Form;