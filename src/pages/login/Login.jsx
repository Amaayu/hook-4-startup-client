import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie"; // ✅ Token ke liye
import "./Login.css";
import api from "../../../api/api";

const Login = () => {
  const [userIsLoading, setUserIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // ✅ Button loader state
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userIsLoading) {
      navigate("/feed"); // ✅ Feed pe le jao agar user load ho jaye
    }
  }, [userIsLoading, navigate]);

  // 🚀 Prefetch Posts and Cache in Local Storage
  const prefetchPosts = async () => {
    const token = Cookies.get("session_token");

    if (!token) {
      console.warn("⚠️ Session token not found!");
      return;
    }

    try {
      const cachedPosts = localStorage.getItem("cachedPosts");

      if (cachedPosts) {
        console.log("🚀 Using Cached Posts");
        navigate("/feed"); // ✅ Feed pe le jao agar user load ho jaye
        return;
      }

      const response = await fetch(`${api}/post/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.error("❌ Failed to prefetch posts:", response.statusText);
        return;
      }

      const postsData = await response.json();
      console.log("✅ Prefetched Posts:", postsData);
      localStorage.setItem("cachedPosts", JSON.stringify(postsData)); // 🆕 New posts cache
    } catch (error) {
      console.error("🔥 Error prefetching posts:", error.message);
    }
  };

  // 🔥 API Call to Login
  const mySubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true); // ✅ Loading start karo
    const data = { username, password };

    try {
      const response = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Login successful!");
        sessionStorage.setItem("userData", JSON.stringify(data.user));

        // 🚀 Prefetch and Cache posts after login
        await prefetchPosts();

        setIsLoading(false); // ✅ Loading stop
        if (data.user.makeProfileStatus === false) {
          navigate("/createprofile");
        } else {
          navigate("/feed");
        }
      } else {
        setIsLoading(false); // ✅ Agar error ho to bhi loading stop
        alert("❌ Invalid username or password!");
      }
    } catch (error) {
      setIsLoading(false); // ✅ Error pe bhi loading hatao
      console.error("🔥 Error:", error);
    }
  };

  return (
    <div className="login">
      <form className="form-1" onSubmit={mySubmitHandler}>
        {/* ✅ Logo */}
        <img
          className="logo-1"
          src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713021728/Logo_xxgb0i.png"
          alt="Hook4StartUp"
        />

        {/* ✅ Username Input */}
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* ✅ Password Input */}
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* ✅ Login Button with Loading */}
        <button className="button-1" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <i className="ri-loader-4-line loader-icon"></i> Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        {/* ✅ Signup Link */}
        <div className="war">
          <span>Don't have an account?</span>
          <NavLink to="/" className="log">
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
