import React, { useState, useCallback } from 'react';
import { Camera, Save, UserCircle, XCircle, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
  const [editMode, setEditMode] = useState('view'); // 'view', 'edit', or 'photo'
  const [profile, setProfile] = useState({
    photo: '',
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '+1 (555) 123-4567',
    dob: '1990-01-01',
    gender: 'Male',
    occupation: 'Software Developer'
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSave = useCallback(() => {
    console.log('Saving profile:', profile);
    setEditMode('view');
  }, [profile]);

  const handlePhotoChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile(prev => ({ ...prev, photo: e.target.result }));
        setEditMode('view');
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const handleCancelPhotoChange = () => {
    setEditMode('view');
  };

  const handleDeletePhoto = () => {
    setProfile(prev => ({ ...prev, photo: '' }));
  };

  const Field = useCallback(({ label, value, editable, name }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <motion.div 
        className="mb-6"
        initial={{ scale: 1 }}
        animate={{ scale: isFocused && editMode === 'edit' ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        {editMode === 'edit' && editable ? (
          <motion.input
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out"
          />
        ) : (
          <p className="text-black text-lg">{value}</p>
        )}
      </motion.div>
    );
  }, [editMode, handleChange]);

  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-black">User Profile</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <div className="relative mb-6 text-center">
            {profile.photo ? (
              <img 
                src={profile.photo} 
                alt="Profile" 
                className="rounded-full w-48 h-48 object-cover mx-auto shadow-md"
              />
            ) : (
              <div className="rounded-full w-48 h-48 bg-gray-200 flex items-center justify-center mx-auto shadow-md">
                <UserCircle size={96} className="text-gray-400" />
              </div>
            )}
            {editMode === 'photo' && (
              <label htmlFor="photo-upload" className="absolute bottom-2 right-1/2 transform translate-x-1/2 bg-black text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-gray-800 transition duration-150 ease-in-out">
                <Camera size={24} />
                <input 
                  id="photo-upload" 
                  type="file" 
                  className="hidden" 
                  onChange={handlePhotoChange}
                  accept="image/*"
                />
              </label>
            )}
          </div>
          {editMode === 'photo' ? (
            <>
              <button 
                onClick={handleCancelPhotoChange}
                className="w-full px-4 py-2 bg-gray-300 text-black rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
              >
                <XCircle className="mr-2 h-5 w-5 inline-block" /> Cancel
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setEditMode('photo')}
                className="w-full px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out"
              >
                {profile.photo ? 'Change Profile Photo' : 'Add Profile Photo'}
              </button>
              {profile.photo && (
                <button 
                  onClick={handleDeletePhoto}
                  className="mt-2 w-full px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                >
                  <Trash className="mr-2 h-5 w-5 inline-block" /> Delete Photo
                </button>
              )}
            </>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <Field label="Name" value={profile.name} editable={true} name="name" />
          <Field label="Email" value={profile.email} editable={false} />
          <Field label="Mobile Number" value={profile.mobile} editable={true} name="mobile" />
          <Field label="Date of Birth" value={profile.dob} editable={false} />
          <Field label="Gender" value={profile.gender} editable={false} />
          <Field label="Occupation" value={profile.occupation} editable={true} name="occupation" />
        </div>
      </div>
      <div className="mt-8 text-center">
        {editMode === 'edit' ? (
          <button 
            onClick={handleSave}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 active:outline-none active:ring-2 active:ring-offset-2 active:ring-black transition duration-150 ease-in-out"
          >
            <Save className="mr-2 h-5 w-5" /> Save Changes
          </button>
        ) : editMode === 'view' ? (
          <button 
            onClick={() => setEditMode('edit')}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 active:outline-none active:ring-2 active:ring-offset-2 active:ring-black transition duration-150 ease-in-out"
          >
            Edit Profile
          </button>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Profile;
