import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../Imgs/zawaBg.jpg"; // Path to your background image
import zawaLogo from "../Imgs/zawaLogo.png";
import Login from "./Login";

function Register() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container col-md-9">
        <div
          className="card shadow border-0 rounded-4 p-4 bg-light"

        >
          <div className="d-flex justify-content-center">
            <img
              src={zawaLogo}
              alt="Zawamis Logo"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
            />
          </div>
          <h3 className="text-center display-6 text-primary">Registration</h3>
          <div className="border-top mb-3"></div>
          <div className="row">

            {/* first row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Middle Name"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Last Name"
                required
              />
            </div>
            {/* second row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Email Address"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Address"
                required
              />
            </div>
            {/* third row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Age"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <select
                className="form-select  rounded-3 border-1"
                id="select"
                required
              >
                <option value="" selected hidden>Merital Status</option>
                <option value="">Married</option>
                <option value="">Single</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <select
                className="form-select  rounded-3 border-1"
                id="select"
                required
              >
                <option value="" selected hidden>Sex</option>
                <option value="">Male</option>
                <option value="">Femal</option>
              </select>
            </div>
            {/* fourth row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Nationality"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Accupation"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="ZanId"
                required
              />
            </div>
            {/* fifth row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Password"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="User Name"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Full Name"
                required
              />
            </div>
            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-success w-50  rounded-3  mb-3"
              >
                Register
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <Link to="/" className="text-decoration-none">Have account ? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
