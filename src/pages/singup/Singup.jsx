import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Singup.css";
import api from "../../../api/api";

const Signup = () => {
  const [userIsLoading, setUserIsLoading] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Navigate to /feed if user is authenticatedß
  useEffect(() => {
    if (userIsLoading) {
      navigate("/feed");
    }
  }, [userIsLoading, navigate]);

  // ✅ Form submit handler
  const mySubmitHandler = async (e) => {
    e.preventDefault();
    const paylode = { username, email, password };

    try {
      const response = await fetch(`${api}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paylode),
        credentials: "include", // ✅ Allow cookies
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful!");
        setUserIsLoading(true);
        // ✅ Save user data in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(data.user));
        console.log(data.user.makeProfileStatus);
        if (data.user.makeProfileStatus === false) {
          navigate("/createprofile");
        } else {
          navigate("/feed");
        }
      } else {
        alert("Signup failed! Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="sing">
      <img
        className="logo"
        src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713021728/Logo_xxgb0i.png"
        alt="Hook4StartUp"
      />
      <h2 id="mong">
        Hook4startup to help find the best partner for your startup growth
        journey.
      </h2>

      <form onSubmit={mySubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button className="button-1" type="submit">
          Make New Account
        </button>
        <div className="war">
          <span>Already have an account?</span>
          <NavLink to="/login" className="log">
            Log in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signup;
