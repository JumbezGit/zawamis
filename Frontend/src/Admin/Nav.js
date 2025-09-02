import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      className="bg-dark text-white d-flex flex-column vh-100 border-bottom"
      style={{ width: "250px", height: "100"}}
    >
      <div className="d-flex align-items-center justify-content-center border-bottom border-secondary w-100 py-2">
        <span className="fw-bold text-center">ZAWA ADMIN</span>
      </div>
      <nav className="w-100 p-2">
        <ul className="list-unstyled d-flex flex-column align-items-start mt-3">
          <li className="mb-3 w-100">
            <Link to="/dashboard" className="text-white text-start btn w-100" >
              <i className="fas fa-home"></i> Home  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/customers" className="text-white text-start btn w-100" >
              <i className="fas fa-users"></i> Customers  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/stations" className="text-white text-start btn w-100" >
              <i className="fas fa-users"></i> Stations  </Link>
          </li>
           <li className="mb-3 w-100">
            <Link to="/deptors" className="text-white text-start btn w-100" >
              <i className="fas fa-users"></i> Deptors  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/well" className="text-white text-start btn w-100" >
              <i className="fas fa-users"></i> Wells  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/security" className="text-white text-start btn w-100" >
              <i className="fas fa-users"></i> Security  </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
