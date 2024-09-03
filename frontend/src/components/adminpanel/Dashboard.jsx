import React from 'react';

const Dashboard = () => {

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Active Trips" value="40" />
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