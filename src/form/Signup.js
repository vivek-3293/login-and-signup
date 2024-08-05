//Email :- eve.holt@reqres.in
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../AuthContext";
import "../form/style.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/header");
  //   }
  // }, [navigate]);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

  
      const data = await response.json();

      if (data.token) {
        const userInfo = { email, token: data.token };
        login(userInfo);
        navigate("/header");
        toast.success("SignUp Successfully");
      }
    } catch (error) {
      toast.error("Signup failed: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h3>Sign Up</h3>
      <form className="auth-form" onSubmit={handleSignup}>
        <div className="input-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
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
