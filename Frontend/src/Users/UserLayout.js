import React, { useState } from "react";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";

export default function UserLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className="d-flex flex-column" style={{ height: "100vh", paddingTop: "56px" }}>
  {/* Header */}
  <UserHeader/>

  {/* Content Area */}
  <div className="d-flex flex-grow-1" style={{ minHeight: 0 }}>

   <div className={`d-flex flex-grow-1 ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ minHeight: 0,}}>
  <UserNav/>

  <div className="flex-grow-1 overflow-auto p-3">
    {children}
  </div>
</div>
  </div>
</div>
  );
} 
