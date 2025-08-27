import React, { useState } from "react";
import bgImage from "../Imgs/zawaBg.jpg"; // Path to your background image
import zawaLogo from "../Imgs/zawaLogo.png";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from "./Register";
import Payments from "../Admin/Payments";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Add your login logic here
  };

  return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          className="card shadow border-0 rounded-4 p-3 bg-light"
          style={{ maxWidth: "330px", width: "100%" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src={zawaLogo}
              alt="Zawamis Logo"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
            />
          </div>
          <h3 className="text-center display-6">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-3 border-1"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-3 border-1"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link to="/dashboard" className="btn btn-primary justify-content-center w-100" type="submit" > Login   </Link>
            <div className="d-flex justify-content-between mb-3">
              <Link to="/register" className="text-decoration-none">Not Registered?</Link>
              <Link to="/reset" className="text-decoration-none">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
