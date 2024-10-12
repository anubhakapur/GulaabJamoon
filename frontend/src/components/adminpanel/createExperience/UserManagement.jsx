// UserManagement.js
import React, { useState, useEffect } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const UserManagement = () => {
  const [users, setUsers] = useState([
    // { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '+1 123-456-7890', experienceBooked: { name: 'City Tour', id: 101 } },
    // { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '+1 234-567-8901', experienceBooked: { name: 'Mountain Hike', id: 102 } },
    // { id: 3, name: 'Bob Johnson', email: 'bob@example.com', mobile: '+1 345-678-9012', experienceBooked: { name: 'Cooking Class', id: 103 } },
    // { id: 4, name: 'Alice Brown', email: 'alice@example.com', mobile: '+1 456-789-0123', experienceBooked: { name: 'Scuba Diving', id: 104 } },
    // { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', mobile: '+1 567-890-1234', experienceBooked: { name: 'Wine Tasting', id: 105 } },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  // const [activeBookings, setActiveBookings] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchActiveBookings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/active-bookings`);
      console.log("users", response.data.data);
      if (response.data.success) {
        const currentDate = new Date();
        const filteredBookings = response.data.data.filter(
          (booking) => new Date(booking.date) >= currentDate
        );
        // setActiveBookings(filteredBookings);
        // active = response.data.data;
        console.log("users", response.data.data);
        setUsers(filteredBookings);
      }
    } catch (err) {
      console.error("Error fetching active bookings:", error);
    }
  };

  useEffect(() => {
    fetchActiveBookings();
  }, []);

  console.log("users", users);
  const filteredUsers = users.filter(
    (user) =>
      user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user?.mobile?.includes(searchTerm) ||
      user?.experienceBooked?.name
        ?.toLowerCase()
        ?.includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === "ascending" ? 1 : -1;
    if (sortConfig.key === "experiencebooked") {
      return (
        a.experienceBooked.name.localeCompare(b.experienceBooked.name) *
        direction
      );
    }
    return a[sortConfig.key].localeCompare(b[sortConfig.key]) * direction;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleCancelBooking = (id) => {
    if (
      window.confirm("Are you sure you want to cancel this user's booking?")
    ) {
      setUsers(
        users.map((user) =>
          user.id === id
            ? { ...user, experienceBooked: { name: "None", id: null } }
            : user
        )
      );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">User Management</h2>
      <div className="flex items-center bg-white rounded-lg shadow-md p-3">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {["Name", "Email", "Mobile", "Experience Booked", "Action"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() =>
                      requestSort(header.toLowerCase().replace(" ", ""))
                    }
                  >
                    {header}
                    {sortConfig.key ===
                      header.toLowerCase().replace(" ", "") && (
                      <span>
                        {sortConfig.direction === "ascending" ? " ▲" : " ▼"}
                      </span>
                    )}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.experienceBooked.id ? (
                    <Link
                      to={`/experiences/${user.experienceBooked.url}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      {user.experienceBooked.name}
                    </Link>
                  ) : (
                    "None"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {user.experienceBooked.id && (
                    <button
                      onClick={() => handleCancelBooking(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTimesCircle className="inline mr-1" /> Cancel Booking
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
