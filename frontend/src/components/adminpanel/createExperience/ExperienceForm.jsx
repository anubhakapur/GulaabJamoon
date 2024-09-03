import React from 'react';
import ImageUpload from './ImageUpload';
import ArrayInput from './ArrayInput';

const ExperienceForm = ({ experience, setExperience, isVariant }) => {
  const handleChange = (field, value) => {
    setExperience(prev => ({...prev, [field]: value}));
  };

  const handleLocationChange = (field, value) => {
    setExperience(prev => ({...prev, location: {...prev.location, [field]: value}}));
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
            value={experience.location.state}
            onChange={(e) => handleLocationChange('state', e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input
            className={inputClass}
            type="text"
            placeholder="City"
            value={experience.location.city}
            onChange={(e) => handleLocationChange('city', e.target.value)}
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

      <ArrayInput
        label="Highlights"
        items={experience.highlights}
        setItems={(items) => handleChange('highlights', items)}
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
      />
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Latitude of Boarding Location</label>
          <input
            className={inputClass}
            type="text"
            placeholder="Latitude"
            value={experience.location.latitude}
            onChange={(e) => handleLocationChange('latitude', e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Longitude of Boarding Location</label>
          <input
            className={inputClass}
            type="text"
            placeholder="Longitude"
            value={experience.location.longitude}
            onChange={(e) => handleLocationChange('longitude', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
