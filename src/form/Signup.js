import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../form/style.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/");
    toast.success("SignUp Successfully");
  };

  return (
    <div className="auth-container">
      <h3>Sign Up</h3>
      <form className="auth-form" onSubmit={handleSignup}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            placeholder="Enter your Username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
      </form>
      <div className="auth-link">
        <p>Already have an account?</p>
        <Link to="/" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
