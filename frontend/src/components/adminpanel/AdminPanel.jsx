import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import Trips from './Trips';
import UserManagement from '../adminpanel/createExperience/UserManagement';
import RefundManagement from './RefundManagement';

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Trips':
        return <Trips setActiveMenu={setActiveMenu} setSelectedVendor={setSelectedVendor} />;
      case 'Users':
        return <UserManagement />;
      case 'Refunds':
        return <RefundManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        setActiveMenu={setActiveMenu} 
        activeMenu={activeMenu} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex flex-col flex-1 lg:ml-64"> {/* Add left margin on large screens */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;