import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../Imgs/zawaBg.jpg"; // Path to your background image
import zawaLogo from "../Imgs/zawaLogo.png";

function Register() {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="container col-md-6">
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
          <h3 className="text-center display-6">Regisration</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="text" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control rounded-3 border-2"
                id="text"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="text" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control rounded-3 border-2"
                id="text"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="text" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control rounded-3 border-2"
                id="text"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-3 border-2"
                required
              />
              </div>
              <div className="col-md-12">
                <button
              type="submit"
              className="btn btn-primary border-0 rounded-3 w-100 mb-3"
            >
              Login
            </button>
              </div>
            </div>
            
            <div className="d-flex justify-content-between mb-3">
              <a href="/" className="text-decoration-none">
                Dont Registered?
              </a>
              <a href="/" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
