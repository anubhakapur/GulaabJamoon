// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
// import { DayPicker } from 'react-day-picker';
// import {DatePicker} from '@/components/ui/date-picker';
// import 'react-day-picker/dist/style.css';

// function Booking({ price, taxes, fees,startDate,endDate }) {
//   const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
//   const [isGuestMenuOpen, setIsGuestMenuOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
//   const [availableDates, setAvailableDates] = useState([]);
//   const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
//   const [isTimeSlotMenuOpen, setIsTimeSlotMenuOpen] = useState(false);
//   const guestMenuRef = useRef(null);
//   const datePickerRef = useRef(null);
//   const timeSlotRef = useRef(null);

//   const tripStartDate = new Date(startDate);
//   const tripEndDate = new Date(endDate);

//   const safePrice = Number(price) || 0;
//   const safeTaxes = Number(taxes) || 0;
//   const safeFees = Number(fees) || 0;
//   const total = (safePrice * (guests.adults + guests.children)) + safeTaxes + safeFees;

//   useEffect(() => {
//     fetchAvailableDates();
//   }, []);

//   useEffect(() => {
//     if (selectedDate) {
//       fetchAvailableTimeSlots(selectedDate);
//     }
//   }, [selectedDate]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (guestMenuRef.current && !guestMenuRef.current.contains(event.target)) {
//         setIsGuestMenuOpen(false);
//       }
//       if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
//         setIsDatePickerOpen(false);
//       }
//       if (timeSlotRef.current && !timeSlotRef.current.contains(event.target)) {
//         setIsTimeSlotMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [guestMenuRef, datePickerRef, timeSlotRef]);

//   const fetchAvailableDates = async () => {
//     const today = new Date();
//     const mockDates = [
//       new Date('2024-08-26'), new Date('2024-08-27'), new Date('2024-08-28'),
//       new Date('2024-08-22'), new Date('2024-08-30')
//     ];
//     setAvailableDates(mockDates.filter(date => date >= today));
//   };

//   const fetchAvailableTimeSlots = async (date) => {
//     const mockTimeSlots = [
//       '09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'
//     ];
//     setAvailableTimeSlots(mockTimeSlots);
//   };

//   const handleGuestChange = (type, change) => {
//     setGuests(prevGuests => ({
//       ...prevGuests,
//       [type]: Math.max(0, prevGuests[type] + change)
//     }));
//   };

//   const totalGuests = guests.adults + guests.children + guests.infants;

//   const isDayAvailable = (date) => {
//     return availableDates.some(d => d.toDateString() === date.toDateString());
//   };

//   const isDayPast = (date) => {
//     return date < new Date();
//   };

//   return (
//     <motion.div
//       className="sticky top-4 bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-4">Book This Experience</h2>

//       {/* Date Selection */}
//       <div className="mb-4 relative" ref={datePickerRef}>
//         <button
//           className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-black"
//           onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
//         >
//           <span>{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}</span>
//           {isDatePickerOpen ? <AiOutlineUp className="h-5 w-5" /> : <AiOutlineDown className="h-5 w-5" />}
//         </button>

//         <AnimatePresence>
//           {isDatePickerOpen && (
//             <motion.div
//               className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg p-4"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <DayPicker
//                 selected={selectedDate}
//                 onDayClick={(date) => {
//                   if (isDayAvailable(date)) {
//                     setSelectedDate(date);
//                     setIsDatePickerOpen(false);
//                     fetchAvailableTimeSlots(date);
//                   }
//                 }}
//                 modifiers={{
//                   available: isDayAvailable,
//                   past: isDayPast,
//                   unavailable: date => !isDayAvailable(date)
//                 }}
//                 modifiersStyles={{
//                   available: {
//                     color: '#000',
//                     backgroundColor: '#FFF',
//                     cursor: 'pointer',
//                     fontWeight: 'bold',
//                   },
//                   past: {
//                     color: '#C4C4C4',
//                     cursor: 'not-allowed',
//                   },
//                   unavailable: {
//                     color: '#C4C4C4',
//                     cursor: 'not-allowed',
//                   },
//                   selected: {
//                     backgroundColor: '#000000',
//                     color: 'white',
//                   }
//                 }}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Time Slot Selection */}
//       {selectedDate && (
//         <div className="mb-4 relative" ref={timeSlotRef}>
//           <button
//             className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-black"
//             onClick={() => setIsTimeSlotMenuOpen(!isTimeSlotMenuOpen)}
//           >
//             <span>{selectedTimeSlot || 'Choose a time slot'}</span>
//             {isTimeSlotMenuOpen ? <AiOutlineUp className="h-5 w-5" /> : <AiOutlineDown className="h-5 w-5" />}
//           </button>

//           <AnimatePresence>
//             {isTimeSlotMenuOpen && (
//               <motion.div
//                 className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {availableTimeSlots.map(slot => (
//                   <div
//                     key={slot}
//                     className="py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
//                     onClick={() => {
//                       setSelectedTimeSlot(slot);
//                       setIsTimeSlotMenuOpen(false);
//                     }}
//                   >
//                     {slot}
//                   </div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       )}

//       {/* Guest Selection */}
//       <div className="mb-4 relative" ref={guestMenuRef}>
//         <button
//           className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-black"
//           onClick={() => setIsGuestMenuOpen(!isGuestMenuOpen)}
//         >
//           <span>{totalGuests} Guest{totalGuests !== 1 ? 's' : ''}</span>
//           {isGuestMenuOpen ? <AiOutlineUp className="h-5 w-5" /> : <AiOutlineDown className="h-5 w-5" />}
//         </button>

//         <AnimatePresence>
//           {isGuestMenuOpen && (
//             <motion.div
//               className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               {Object.entries(guests).map(([type, count]) => (
//                 <div key={type} className="flex justify-between items-center mb-4">
//                   <span className="capitalize">{type}</span>
//                   <div className="flex items-center">
//                     <button
//                       className="px-2 py-1 bg-gray-200 rounded-full"
//                       onClick={() => handleGuestChange(type, -1)}
//                       disabled={count === 0}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{count}</span>
//                     <button
//                       className="px-2 py-1 bg-gray-200 rounded-full"
//                       onClick={() => handleGuestChange(type, 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Price Breakdown */}
//       <div className="space-y-2 mb-4">
//         <div className="flex justify-between">
//           <span>Price per person:</span>
//           <span>${safePrice.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Guests:</span>
//           <span>{guests.adults + guests.children}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Subtotal:</span>
//           <span>${safePrice.toFixed(2)} x {guests.adults + guests.children}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Taxes:</span>
//           <span>${safeTaxes.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Fees:</span>
//           <span>${safeFees.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between font-semibold text-lg border-t pt-2">
//           <span>Total:</span>
//           <span>${total.toFixed(2)}</span>
//         </div>
//       </div>

//       {/* Book Now Button */}
//       <button
//         className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-black transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//         onClick={() => alert('Booking functionality to be implemented')}
//         disabled={!selectedDate || !selectedTimeSlot}
//       >
//         Book Now
//       </button>

//     </motion.div>
//   );
// }

// export default Booking;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";

function Booking({
  price,
  taxes,
  fees,
  startDate,
  endDate,
  experienceId,
  tripName,
  startTime,
}) {
  const user = useSelector((state) => state?.user?.user);
  console.log("userBooking", user?.email);
  // heheatata

  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [isGuestMenuOpen, setIsGuestMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimeSlotMenuOpen, setIsTimeSlotMenuOpen] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  const guestMenuRef = useRef(null);
  const datePickerRef = useRef(null);
  const timeSlotRef = useRef(null);

  const tripStartDate = new Date(startDate);
  const tripEndDate = new Date(endDate);

  const safePrice = Number(price) || 0;
  const safeTaxes = Number(taxes) || 0;
  const safeFees = Number(fees) || 0;
  const total =
    safePrice * (guests.adults + guests.children) + safeTaxes + safeFees;

  useEffect(() => {
    fetchAvailableDates();
  }, [startDate, endDate]);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimeSlots(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        guestMenuRef.current &&
        !guestMenuRef.current.contains(event.target)
      ) {
        setIsGuestMenuOpen(false);
      }
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsDatePickerOpen(false);
      }
      if (timeSlotRef.current && !timeSlotRef.current.contains(event.target)) {
        setIsTimeSlotMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [guestMenuRef, datePickerRef, timeSlotRef]);

  const handleBooking = async () => {
    try {
      //Create a booking in the database
      const bookingResponse = await axios.post(`${BASE_URL}/api/bookings`, {
        experienceId,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        guests,
        totalAmount: total,
      });
      console.log("bookingResponse", bookingResponse.data.bookingId);
      setBookingId(bookingResponse.data.bookingId);

      //Initialize payu payment
      const paymentResponse = await axios.post(
        `${BASE_URL}/api/create-payment`,
        {
          bookingId: bookingResponse.data.bookingId,
          amount: total,
          tripName: tripName,
          email: user?.email,
          name: user?.name,
        }
      );

      console.log("paymentResponse", paymentResponse.data);

      if (!paymentResponse.data.key) {
        throw new Error("Merchant key is missing");
      }

      //Redirect to payment gateway
      window.location.href = `https://pmny.in/AIUYrtZ78UL3?${new URLSearchParams(
        paymentResponse.data
      ).toString()}`;
    } catch (err) {
      console.log("Error in booking", err);
    }
  };

  const fetchAvailableDates = async () => {
    // Generate dates between tripStartDate and tripEndDate
    const dates = [];
    let currentDate = new Date(tripStartDate);
    while (currentDate <= tripEndDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setAvailableDates(dates);
  };

  const fetchAvailableTimeSlots = async (date) => {
    const mockTimeSlots = [startTime];
    setAvailableTimeSlots(mockTimeSlots);
  };

  const handleGuestChange = (type, change) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: Math.max(0, prevGuests[type] + change),
    }));
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  const isDayAvailable = (date) => {
    return availableDates.some((d) => d.toDateString() === date.toDateString());
  };

  const isDayPast = (date) => {
    return date < new Date();
  };

  return (
    <motion.div
      className="sticky top-4 bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Book This Experience</h2>

      {/* Date Selection */}
      <div className="mb-4 relative" ref={datePickerRef}>
        <button
          className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        >
          <span>
            {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
          </span>
          {isDatePickerOpen ? (
            <AiOutlineUp className="h-5 w-5" />
          ) : (
            <AiOutlineDown className="h-5 w-5" />
          )}
        </button>

        <AnimatePresence>
          {isDatePickerOpen && (
            <motion.div
              className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DayPicker
                selected={selectedDate}
                onDayClick={(date) => {
                  if (isDayAvailable(date)) {
                    setSelectedDate(date);
                    setIsDatePickerOpen(false);
                    fetchAvailableTimeSlots(date);
                  }
                }}
                fromDate={tripStartDate}
                toDate={tripEndDate}
                modifiers={{
                  available: isDayAvailable,
                  past: isDayPast,
                  unavailable: (date) =>
                    !isDayAvailable(date) ||
                    date < tripStartDate ||
                    date > tripEndDate,
                }}
                modifiersStyles={{
                  available: {
                    color: "#000",
                    backgroundColor: "#FFF",
                    cursor: "pointer",
                    fontWeight: "bold",
                  },
                  past: {
                    color: "#C4C4C4",
                    cursor: "not-allowed",
                  },
                  unavailable: {
                    color: "#C4C4C4",
                    cursor: "not-allowed",
                  },
                  selected: {
                    backgroundColor: "#000000",
                    color: "white",
                  },
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Time Slot Selection */}
      {selectedDate && (
        <div className="mb-4 relative" ref={timeSlotRef}>
          <button
            className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-black"
            onClick={() => setIsTimeSlotMenuOpen(!isTimeSlotMenuOpen)}
          >
            <span>{selectedTimeSlot || "Choose a time slot"}</span>
            {isTimeSlotMenuOpen ? (
              <AiOutlineUp className="h-5 w-5" />
            ) : (
              <AiOutlineDown className="h-5 w-5" />
            )}
          </button>

          <AnimatePresence>
            {isTimeSlotMenuOpen && (
              <motion.div
                className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {availableTimeSlots.map((slot) => (
                  <div
                    key={slot}
                    className="py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => {
                      setSelectedTimeSlot(slot);
                      setIsTimeSlotMenuOpen(false);
                    }}
                  >
                    {slot}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Guest Selection */}
      <div className="mb-4 relative" ref={guestMenuRef}>
        <button
          className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => setIsGuestMenuOpen(!isGuestMenuOpen)}
        >
          <span>
            {totalGuests} Guest{totalGuests !== 1 ? "s" : ""}
          </span>
          {isGuestMenuOpen ? (
            <AiOutlineUp className="h-5 w-5" />
          ) : (
            <AiOutlineDown className="h-5 w-5" />
          )}
        </button>

        <AnimatePresence>
          {isGuestMenuOpen && (
            <motion.div
              className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {Object.entries(guests).map(([type, count]) => (
                <div
                  key={type}
                  className="flex justify-between items-center mb-4"
                >
                  <span className="capitalize">{type}</span>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-full"
                      onClick={() => handleGuestChange(type, -1)}
                      disabled={count === 0}
                    >
                      -
                    </button>
                    <span className="mx-2">{count}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-full"
                      onClick={() => handleGuestChange(type, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Price per person:</span>
          <span>₹{safePrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Guests:</span>
          <span>{guests.adults + guests.children}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>
            ₹{safePrice.toFixed(2)} x {guests.adults + guests.children}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Taxes:</span>
          <span>₹{safeTaxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Fees:</span>
          <span>₹{safeFees.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Book Now Button */}
      <button
        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-black transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handleBooking}
        disabled={!selectedDate || !selectedTimeSlot}
      >
        Book Now
      </button>
    </motion.div>
  );
}

export default Booking;
