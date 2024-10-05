import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../../constants';

const MyBookings = () => {
  // Mock data for bookings

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user-bookings`);
        console.log("response", response.data.data);
        setBookings(response.data.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchBookings();
  },[]);

  useEffect(()=>{
    console.log("bookings",bookings);
  },[bookings]);

  // const bookings = [
  //   { id: 1, destination: 'Paris', date: '2024-09-15', status: 'upcoming' },
  //   { id: 2, destination: 'New York', date: '2024-08-10', status: 'past' },
  //   { id: 3, destination: 'Tokyo', date: '2024-10-01', status: 'upcoming' },
  //   { id: 4, destination: 'London', date: '2024-07-05', status: 'past' },
  //   { id: 5, destination: 'Dubai', date: '2024-09-25', status: 'upcoming' },
  // ];

  // Sort bookings by date
  const sortedBookings = bookings.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Get current date
  const today = new Date();

  // Separate upcoming and past trips
  const upcomingTrips = bookings.filter(trip => new Date(trip.date) >= today);
  const pastTrips = bookings.filter(trip => new Date(trip.date) < today);


  // Separate upcoming and past trips
  // const upcomingTrips = sortedBookings.filter((booking) => booking.status === 'upcoming');
  // const pastTrips = sortedBookings.filter((booking) => booking.status === 'past');

  const TripCard = ({ trip }) => (
    <motion.div
      className="p-6 mb-4 bg-white rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h3 className="text-xl font-bold text-black">{trip.experienceId.name}</h3>
      <p className="text-gray-600">Date: {new Date(trip.date).toLocaleDateString()}</p>
    </motion.div>
  );

  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12 mb-12"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-black">My Bookings</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-black">Upcoming Trips</h3>
        {upcomingTrips.length > 0 ? (
          upcomingTrips.map((trip) => <TripCard key={trip._id} trip={trip} />)
        ) : (
          <p className="text-gray-600">No upcoming trips.</p>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-black">Past Trips</h3>
        {pastTrips.length > 0 ? (
          pastTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <p className="text-gray-600">No past trips.</p>
        )}
      </div>
    </motion.div>
  );
};

export default MyBookings;
