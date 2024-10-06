import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ExperienceForm from './ExperienceForm';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { useLocation } from 'react-router-dom';
import {BASE_URL} from "../../../constants";
// import { Link } from 'react-router-dom';


const CreateExperience = ({ setPendingExperiences, setIsCreatingExperience }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = new URLSearchParams(location.search).get('id');

  const initialExperience = {
    name: '',
    url: '',
    description: '',
    shortDescription: '',
    tourCaptain: '',
    experienceType: '',
    images: [],
    state: '',
    city: '',
    boardingLocation: {
      lat: '',
      lng: ''
    },
    startDate: '',
    endDate: '',
    startTime: '',
    duration: '',
    overview: '',
    highlights: [''],
    itinerary: [''],
    inclusions: [''],
    exclusions: [''],
    cancellationPolicy: '',
    knowBeforeYouGo: [''],
    faqs: [{ question: '', answer: '' }],
    
    price: '',
    taxes: '',
    fees: '',
  };

  const [experience, setExperience] = useState(initialExperience);

  useEffect(() => {
    const fetchExperience = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`${BASE_URL}/experiences/${id}`);
        if (response.data.success) {
        }
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || 'Something went wrong');
      }
    };

    fetchExperience();
  }, [id]);



  const handleSaveExperience = async(e) => {
    e.preventDefault();
    // setPendingExperiences(prevExperiences => [...prevExperiences, { ...experience, id: Date.now(), status: 'Pending' }]);
    // setIsCreatingExperience(false);
try{
    if(id){
      //update place
      console.log("update place")
      const response = await axios.put(`${BASE_URL}/update-experiences`, {id,...experience})
      if(response.data.success){
        toast.success("Experience updated successfully")
        navigate('/admin')
      }
    }
    else{
      // new place
      
      const response = await axios.post(`${BASE_URL}/experiences`, experience)
     if(response.data.success){
       toast.success("Experience created successfully")
        navigate('/admin')
     }

    }
     

}
catch(err){
  console.log(err)
  toast.error(err.response.data.message || 'Something went wrong')
}
  };

  const handleSaveVariant = (variant) => {
    setExperience(prev => {
      const updatedVariants = [...prev.variants];
      if (editingVariantIndex !== null) {
        updatedVariants[editingVariantIndex] = variant;
      } else {
        updatedVariants.push(variant);
      }
      return { ...prev, variants: updatedVariants };
    });
    setIsCreatingVariant(false);
    setEditingVariantIndex(null);
  };

  const addVariant = () => {
    setIsCreatingVariant(true);
    setEditingVariantIndex(null);
  };

  const editVariant = (index) => {
    setIsCreatingVariant(true);
    setEditingVariantIndex(index);
  };

  const deleteVariant = (index) => {
    setExperience(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSaveExperience}>
        <ExperienceForm
          experience={experience}
          setExperience={setExperience}
          isVariant={false}
        />

        <div className="flex items-center justify-between mt-6">
          <button
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            {id ? "Update Experience" : "Create Experience"}
          </button>
          <button
            className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            onClick={() => navigate('/admin')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExperience;