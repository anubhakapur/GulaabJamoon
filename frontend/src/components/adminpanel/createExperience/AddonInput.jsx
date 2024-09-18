import React from 'react';

const AddonInput = ({ addons, setAddons }) => {
  const handleAddonChange = (index, field, value) => {
    const updatedAddons = [...addons];
    updatedAddons[index] = { ...updatedAddons[index], [field]: value };
    setAddons(updatedAddons);
  };

  const addAddon = () => {
    setAddons([...addons, { name: '', pricePerPerson: '' }]);
  };

  const removeAddon = (index) => {
    const updatedAddons = addons.filter((_, i) => i !== index);
    setAddons(updatedAddons);
  };

  const inputClass = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5";
  const buttonClass = "text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center";

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">Addons</label>
      {addons.map((addon, index) => (
        <div key={index} className="flex mb-2 space-x-2">
          <input
            className={`${inputClass} flex-grow`}
            type="text"
            placeholder="Addon name"
            value={addon.name}
            onChange={(e) => handleAddonChange(index, 'name', e.target.value)}
          />
          <input
            className={`${inputClass} w-1/3`}
            type="number"
            placeholder="Price per person"
            value={addon.pricePerPerson}
            onChange={(e) => handleAddonChange(index, 'pricePerPerson', e.target.value)}
          />
          <button type="button" onClick={() => removeAddon(index)} className="text-red-500">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addAddon} className={buttonClass}>
        Add Addon
      </button>
    </div>
  );
};

export default AddonInput;