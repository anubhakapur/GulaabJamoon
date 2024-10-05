import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExperienceForm from './ExperienceForm';
import VariantForm from './VariantForm';
import VariantPreview from './VariantPreview';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import {BASE_URL} from "../../../constants";
import { Link } from 'react-router-dom';

const CreateExperience = ({ setPendingExperiences, setIsCreatingExperience }) => {

  const location = useLocation()
  const navigate = useNavigate()
  const id = new URLSearchParams(location.search).get('id');
  console.log("id",id)
  const initialExperience = {
    name: '',
    url: '',
    description: '',
    shortDescription: '',
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
  const [isCreatingVariant, setIsCreatingVariant] = useState(false);
  const [editingVariantIndex, setEditingVariantIndex] = useState(null);
    console.log("experience",experience)


 useEffect(() => {
  const fetchExperience = async () => {
    if (!id) {
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/experiences/${id}`);
      console.log(response.data)
      if (response.data.success) {
        setExperience(response.data.data);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message || 'Something went wrong');
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
      {!isCreatingVariant ? (
        <form onSubmit={handleSaveExperience}>
          <ExperienceForm
            experience={experience}
            setExperience={setExperience}
            isVariant={false}
          />

          {experience.variants && experience.variants.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Saved Variants</h3>
              {experience.variants.map((variant, index) => (
                <VariantPreview 
                  key={index} 
                  variant={variant} 
                  index={index} 
                  onEdit={() => editVariant(index)}
                  onDelete={() => deleteVariant(index)}
                />
              ))}
              <button
                type="button"
                onClick={addVariant}
                className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
              >
                Add Another Variant
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mt-6">
            <button
              className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
              
            >
              Create Experience
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
      ) : (
        <VariantForm 
          onSave={handleSaveVariant} 
          onCancel={() => {
            setIsCreatingVariant(false);
            setEditingVariantIndex(null);
          }} 
          initialVariant={editingVariantIndex !== null ? experience.variants[editingVariantIndex] : null}
        />
      )}
    </div>
  );
};

export default CreateExperience;