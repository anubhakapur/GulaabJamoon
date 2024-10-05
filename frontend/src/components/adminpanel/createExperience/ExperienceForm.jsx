import React from 'react';
import ImageUpload from './ImageUpload';
import ArrayInput from './ArrayInput';
import AddonInput from './AddonInput';

const ExperienceForm = ({ experience, setExperience, isVariant }) => {
  const handleChange = (field, value) => {
    setExperience(prev => ({...prev, [field]: value}));
  };

const handleLocationChange = (field, value) => {
  setExperience(prev => ({
    ...prev,
    boardingLocation: {
      ...prev.boardingLocation,
      [field]: value
    }
  }));
};

  const handleFaqChange = (index, field, value) => {
    setExperience(prev => {
      const updatedFaqs = [...prev.faqs];
      updatedFaqs[index] = { ...updatedFaqs[index], [field]: value };
      return { ...prev, faqs: updatedFaqs };
    });
  };

  const addFaq = () => {
    setExperience(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index) => {
    setExperience(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const inputClass = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5";
  const labelClass = "block mb-2 text-sm font-medium text-gray-900";

  return (
    <div>
      <div className="mb-4">
        <label className={labelClass} htmlFor="name">{isVariant ? "Variant Name" : "Experience Name"}</label>
        <input
          className={inputClass}
          id="name"
          type="text"
          placeholder={isVariant ? "Variant Name" : "Experience Name"}
          value={experience.name}
          onChange={(e) => handleChange('name', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="url">URL</label>
        <input
          className={inputClass}
          id="url"
          type="text"
          placeholder="eg: one-day-trips-from-banglore"
          value={experience.url}
          onChange={(e) => handleChange('url', e.target.value.replace(/\s+/g, ''))}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="description">Description</label>
        <textarea
          className={inputClass}
          id="description"
          placeholder="Description"
          value={experience.description}
          onChange={(e) => handleChange('description', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="shortDescription">Short Description (for trip cards)</label>
        <textarea
          className={inputClass}
          id="shortDescription"
          placeholder="Short description for trip cards"
          value={experience.shortDescription}
          onChange={(e) => handleChange('shortDescription', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="tourCaptain">Tour Captain</label>
        <input
          className={inputClass}
          id="tourCaptain"
          type="text"
          placeholder="Tour Captain Name"
          value={experience.tourCaptain}
          onChange={(e) => handleChange('tourCaptain', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="experienceType">Experience Type</label>
        <input
          className={inputClass}
          id="experienceType"
          type="text"
          placeholder="Eg: Motorcycling, Water Sports etc."
          value={experience.experienceType}
          onChange={(e) => handleChange('experienceType', e.target.value)}
          required
        />
      </div>

      <ImageUpload
        images={experience.images}
        setImages={(images) => handleChange('images', images)}
      />

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>State</label>
          <input
            className={inputClass}
            type="text"
            placeholder="State"
            value={experience.state}
            onChange={(e) => handleChange('state', e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input
            className={inputClass}
            type="text"
            placeholder="City"
            value={experience.city}
            onChange={(e) => handleChange('city', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="startDate">Start Date</label>
          <input
            className={inputClass}
            id="startDate"
            type="date"
            value={experience.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="endDate">End Date</label>
          <input
            className={inputClass}
            id="endDate"
            type="date"
            value={experience.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
            min={experience.startDate || new Date().toISOString().split('T')[0]}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="startTime">Start Time</label>
        <input
          className={inputClass}
          id="startTime"
          type="time"
          value={experience.startTime}
          onChange={(e) => handleChange('startTime', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="duration">Duration</label>
        <input
          className={inputClass}
          id="duration"
          type="text"
          placeholder="Duration"
          value={experience.duration}
          onChange={(e) => handleChange('duration', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="overview">Overview</label>
        <textarea
          className={inputClass}
          id="overview"
          placeholder="Overview"
          value={experience.overview}
          onChange={(e) => handleChange('overview', e.target.value)}
          required
        />
      </div>

      <AddonInput
        addons={experience.addons || []}
        setAddons={(addons) => handleChange('addons', addons)}
      />

      <ArrayInput
        label="Highlights"
        items={experience.highlights}
        setItems={(items) => handleChange('highlights', items)}
        placeholder="Highlight"
      />

      <ArrayInput
        label="Itinerary"
        items={experience.itinerary}
        setItems={(items) => handleChange('itinerary', items)}
        placeholder={(index) => `Day ${index + 1}`}
      />

      <ArrayInput
        label="Inclusions"
        items={experience.inclusions}
        setItems={(items) => handleChange('inclusions', items)}
        placeholder="Inclusion"
      />

      <ArrayInput
        label="Exclusions"
        items={experience.exclusions}
        setItems={(items) => handleChange('exclusions', items)}
        placeholder="Exclusion"
      />

      <div className="mb-4">
        <label className={labelClass} htmlFor="cancellationPolicy">Cancellation Policy</label>
        <textarea
          className={inputClass}
          id="cancellationPolicy"
          placeholder="Cancellation Policy"
          value={experience.cancellationPolicy}
          onChange={(e) => handleChange('cancellationPolicy', e.target.value)}
          required
        />
      </div>

      <ArrayInput
        label="Know Before You Go"
        items={experience.knowBeforeYouGo}
        setItems={(items) => handleChange('knowBeforeYouGo', items)}
        placeholder="Know Before You Go Item"
      />

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Latitude of Boarding Location</label>
          <input
            className={inputClass}
            type="text"
            placeholder="Latitude"
            value={experience.boardingLocation.lat}
            onChange={(e) => handleLocationChange('lat', e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Longitude of Boarding Location</label>
          <input
            className={inputClass}
            type="text"
            placeholder="Longitude"
            value={experience.boardingLocation.lng}
            onChange={(e) => handleLocationChange('lng', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass}>FAQ</label>
        {experience?.faqs?.map((faq, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
            <div className="mb-2">
              <input
                className={inputClass}
                type="text"
                placeholder="Question 1"
                value={faq.question}
                onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <textarea
                className={inputClass}
                placeholder="Answer 1"
                value={faq.answer}
                onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                required
              />
            </div>
            {index !== 0 && (
              <button
                type="button"
                onClick={() => removeFaq(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove FAQ
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addFaq}
          className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add FAQ
        </button>
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="basePrice">Base Price</label>
        <input
          className={inputClass}
          id="basePrice"
          type="number"
          placeholder="Base Price"
          value={experience.price}
          onChange={(e) => handleChange('price', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="taxes">Taxes</label>
        <input
          className={inputClass}
          id="taxes"
          type="number"
          placeholder="Taxes"
          value={experience.taxes}
          onChange={(e) => handleChange('taxes', e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="fees">Convenience Fee</label>
        <input
          className={inputClass}
          id="fees"
          type="number"
          placeholder="Convenience Fee"
          value={experience.fees}
          onChange={(e) => handleChange('fees', e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default ExperienceForm;