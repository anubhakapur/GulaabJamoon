import React from 'react';

const AllTripsPage = ({ trips }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{trip.name}</h2>
              <p className="text-gray-600 mb-4">{trip.description}</p>
              <p className="text-black font-bold">${trip.price}</p>
              <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTripsPage;