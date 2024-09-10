import React from 'react';

const ArrayInput = ({ label, items, setItems, placeholder }) => {
  const handleInputChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, '']);
  };

  const removeItem = (index) => {
    if (index === 0) return;
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const inputClass = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5";
  const buttonClass = "text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center";

  const getPlaceholder = (index) => {
    if (typeof placeholder === 'function') {
      return placeholder(index);
    }
    return placeholder || `${label} item ${index + 1}`;
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      {items?.map((item, index) => (
        <div key={index} className="flex mb-2">
          <input
            className={`${inputClass} flex-grow`}
            type="text"
            placeholder={getPlaceholder(index)}
            value={item}
            onChange={(e) => handleInputChange(index, e.target.value)}
            required
          />
          {index !== 0 && (
            <button type="button" onClick={() => removeItem(index)} className="ml-2 text-red-500">
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addItem} className={buttonClass}>
        Add {label} Item
      </button>
    </div>
  );
};

export default ArrayInput;