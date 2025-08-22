import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../Imgs/zawaBg.jpg"; // Path to your background image
import zawaLogo from "../Imgs/zawaLogo.png";

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

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-3 border-2"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary border-0 rounded-3 w-100 mb-3"
            >
              Login
            </button>

            <div className="d-flex justify-content-between mb-3">
              <a href="/" className="text-decoration-none">
                Dont Registered?
              </a>
              <a href="/" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
