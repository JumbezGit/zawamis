import React from "react";
import zawaLogo from "../Imgs/zawaLogo.png";
import { Link } from "react-router-dom";

function Header({ toggleSidebar }) {
  return (
    <header
      className="py-2 bg-white shadow-sm"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1040,
        height: "56px",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <img src={zawaLogo} alt="Zawamis Logo" style={{ maxHeight: "40px" }} />

        {/* User Avatar */}
        <div className="dropdown">
          <a
            href="#"
            className="d-block text-decoration-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="34"
              height="34"
              className="rounded-circle"
            />
          </a>
          <ul className="dropdown-menu text-small shadow my-2">
           
            {/* <li>
              <hr className="dropdown-divider" />
            </li> */}
            <li>
              <Link to="/" className="p-2">
                <i className="fa fa-sign-out-alt me-2"></i>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
