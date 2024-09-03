import React, { useState } from 'react';
import { FaEye, FaLink, FaEdit, FaPauseCircle, FaPlayCircle, FaPlus } from 'react-icons/fa';
import CreateExperience from './createExperience/CreateTrips';

const Trips = () => {
  const [experiences, setExperiences] = useState([
    { id: 1, name: 'Floating Feni Experience', status: 'Live', bookings: 618 },
    { id: 2, name: 'Slaves and Sultans of Qutub with Shah Umar', status: 'Live', bookings: 28 },
    { id: 3, name: 'One Heart, Two Worlds: A Walk of Jew Town', status: 'Live', bookings: 13 },
    { id: 4, name: 'A Day Trip to Kracadawna Farm', status: 'Live', bookings: 0 },
    { id: 5, name: "Exploring Sultan Ghari - Delhi's First Mausoleum", status: 'Live', bookings: 21 },
  ]);

  const [isCreatingExperience, setIsCreatingExperience] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  const handleAction = (action, id) => {
    setExperiences(experiences.map(exp => {
      if (exp.id === id) {
        if (action === 'edit') {
          setEditingId(id);
          setEditingName(exp.name);
        } else if (action === 'save') {
          exp.name = editingName;
          setEditingId(null);
        } else if (action === 'hold') {
          return { ...exp, status: 'Inactive' };
        } else if (action === 'goLive') {
          return { ...exp, status: 'Live' };
        }
      }
      return exp;
    }));
  };

  const handleCreateExperience = (newExperience) => {
    setExperiences(prevExperiences => [
      ...prevExperiences,
      { ...newExperience, id: Date.now(), status: 'Live', bookings: 0 }
    ]);
    setIsCreatingExperience(false);
  };

  const ExperienceTable = ({ experiences }) => (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiences</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {experiences.map((exp) => (
          <tr key={exp.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {editingId === exp.id ? (
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              ) : (
                exp.name
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <FaEye className="inline mr-2 cursor-pointer text-gray-600 hover:text-gray-900 text-xl" />
              <FaLink className="inline cursor-pointer text-gray-600 hover:text-gray-900 text-xl" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                exp.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {exp.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {exp.bookings > 0 ? (
                <span className="text-blue-600 hover:text-blue-900 cursor-pointer">{exp.bookings} bookings</span>
              ) : (
                'No bookings'
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              {editingId === exp.id ? (
                <button onClick={() => handleAction('save', exp.id)} className="text-green-600 hover:text-green-900 mr-2">
                  Save
                </button>
              ) : (
                <button onClick={() => handleAction('edit', exp.id)} className="text-blue-600 hover:text-blue-900 mr-2">
                  <FaEdit className="inline mr-1 text-lg" /> Edit
                </button>
              )}
              {exp.status === 'Live' ? (
                <button onClick={() => handleAction('hold', exp.id)} className="text-red-600 hover:text-red-900">
                  <FaPauseCircle className="inline mr-1 text-lg" /> Hold
                </button>
              ) : (
                <button onClick={() => handleAction('goLive', exp.id)} className="text-green-600 hover:text-green-900">
                  <FaPlayCircle className="inline mr-1 text-lg" /> Go Live
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Trips</h2>
        {!isCreatingExperience && (
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center"
            onClick={() => setIsCreatingExperience(true)}
          >
            <FaPlus className="mr-2" /> Create new trip
          </button>
        )}
      </div>
      
      {isCreatingExperience ? (
        <CreateExperience 
          setPendingExperiences={handleCreateExperience}
          setIsCreatingExperience={setIsCreatingExperience}
        />
      ) : (
        <ExperienceTable experiences={experiences} />
      )}
    </div>
  );
};

export default Trips;
