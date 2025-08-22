import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../Imgs/zawaBg.jpg"; // Path to your background image
import zawaLogo from "../Imgs/zawaLogo.png";
import { Link } from 'react-router-dom';

function Reset() {
    const [email, setEmail] = useState("");
    const [resetSent, setResetSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset email sent to:", email);
        setResetSent(true);
        // Add your password reset logic here (e.g., API call to send reset email)
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
                <h3 className="text-center display-6">Reset Password</h3>
                {resetSent ? (
                    <div className="alert alert-success" role="alert">
                        Password reset link sent to {email}. Please check your email.
                    </div>
                ) : (
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
                        <button
                            type="submit"
                            className="btn btn-primary border-0 rounded-3 w-100 mb-3"
                        >
                            Send Reset Link
                        </button>
                        <div className="d-flex justify-content-between mb-3">
                            <Link to="/" className="text-decoration-none">Back to Login</Link>
                            <Link to="/register" className="text-decoration-none">Not Registered?</Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Reset;