import React from 'react';

const ImageUpload = ({ images, setImages }) => {
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      if (images.length + files.length > 10) {
        alert('You can upload a maximum of 10 images.');
        return;
      }
      
      try {
        const base64Images = await Promise.all(files.map(convertToBase64));
        setImages([...images, ...base64Images]);
      } catch (error) {
        console.error('Error converting images to base64:', error);
        alert('There was an error processing your images. Please try again.');
      }
    }
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="images">Images (3-10)</label>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="images" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            type="file"
            id="images"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            multiple
          />
        </label>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img src={img} alt={`Preview ${index}`} className="w-full h-24 object-cover rounded" />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;