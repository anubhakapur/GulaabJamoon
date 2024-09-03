import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import Bookings from "./Bookings";

const UserPanel = () => {
  const [activeMenu, setActiveMenu] = useState("Profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeMenu) {
      case "Profile":
        return <Profile />;
      case "Reset Password":
        return <ResetPassword />;
      case "My Bookings":
        return <Bookings />;
      default:
        return <Profile />;
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
      <div className="flex flex-col flex-1 lg:ml-64">
        {" "}
        {/* Add left margin on large screens */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default UserPanel;
