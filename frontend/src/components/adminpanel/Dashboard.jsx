import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ROLE from "../../common/role";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants";

const Dashboard = () => {
  const [activeTripsCount, setActiveTripsCount] = useState(0);
  const user = useSelector((state) => state?.user);
  console.log("userAdmin", user);
  const navigate = useNavigate();

  // useEffect(()=>{
  //     if(user?.role !== ROLE.ADMIN){
  //         navigate("/")
  //     }
  // },[user])

  useEffect(() => {
    const fetchActiveTripsCount = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/active-trips-count`);

        if (response.data.success) {
          setActiveTripsCount(response.data.data.count);
        }
      } catch (error) {
        console.error("Error fetching active trips count:", error);
      }
    };

    fetchActiveTripsCount();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Active Trips" value={activeTripsCount} />
        <DashboardCard title="Pending Refunds" value="2" />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-4xl font-bold text-gray-900">{value}</p>
  </div>
);

export default Dashboard;
