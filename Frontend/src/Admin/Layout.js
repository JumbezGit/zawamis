import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
   <div className="d-flex flex-column" style={{ height: "100vh", paddingTop: "56px" }}>
  {/* Header */}
  <Header/>

  {/* Content Area */}
  <div className="d-flex flex-grow-1" style={{ minHeight: 0 }}>

   <div className={`d-flex flex-grow-1 ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ minHeight: 0,}}>
  <Nav/>

  <div className="flex-grow-1 overflow-auto p-3">
    {children}
  </div>
</div>
  </div>
</div>
  );
}

export default Layout;
