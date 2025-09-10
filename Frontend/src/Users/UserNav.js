import React from 'react'
import { Link } from "react-router-dom";
import zawaLogo from "../Imgs/zawaLogo.png";
import { IoHome,IoPeople,IoBusinessSharp,IoAccessibility,IoWaterSharp,IoShieldCheckmarkOutline } from 'react-icons/io5';
function UserNav() {
  return (
     <div
      className="bg-success text-white d-flex flex-column vh-100 border-bottom"
      style={{ width: "250px", height: "100"}}
    >
      <div className="d-flex align-items-center justify-content-center border-bottom border-light w-100 py-3">
        <img src={zawaLogo} alt="Zawamis Logo" style={{ maxHeight: "50px" }} />
      </div>
      <nav className="w-100 p-2">
        <ul className="list-unstyled d-flex flex-column align-items-start mt-3">
          <li className="mb-3 w-100">
            <Link to="/dashboard" className="btnCenter active btn btn-outline-light w-100" >
              <IoHome /> Home  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/customers" className="btnCenter btn btn-outline-light w-100" >
              <IoPeople/> Customers  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/stations" className="btnCenter btn btn-outline-light w-100" >
              <IoBusinessSharp/> Stations  </Link>
          </li>
           <li className="mb-3 w-100">
            <Link to="/deptors" className="btnCenter btn btn-outline-light w-100" >
              <IoAccessibility/> Deptors  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/well" className="btnCenter btn btn-outline-light w-100" >
              <IoWaterSharp/> Wells  </Link>
          </li>
          <li className="mb-3 w-100">
            <Link to="/security" className="btnCenter btn btn-outline-light w-100" >
             <IoShieldCheckmarkOutline/> Security  </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default UserNav