import React from "react";
import Header from "./Header";

function Nav() {
  return (
   
      <div
        className="d-flex flex-column flex-shrink-0 bg-dark text-white p-3"
        style={{ width: 200, height: "100vh" }}
      >
        {/* Sidebar Brand */}
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">ZAWA</span>
        </a>
        <hr />

        {/* Navigation Menu */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link active text-white btn rounded-0" aria-current="page">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="nav-link btn-secondary btn text-white rounded-0 text-start">
              Dashboard
            </a>
          </li>
          <li>
             <a href="#" className="nav-link btn-secondary btn text-white rounded-0 text-start">
              Orders
            </a>
          </li>
          <li>
             <a href="#" className="nav-link btn-secondary btn text-white rounded-0 text-start">
              Products
            </a>
          </li>
          <li>
             <a href="#" className="nav-link btn-secondary btn text-white rounded-0 text-start">
              Customers
            </a>
          </li>
        </ul>
       
      </div>
   
  );
}

export default Nav;
