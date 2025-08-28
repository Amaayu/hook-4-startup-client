import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"; // ✅ Axios ko import kiya
import "./Login.css";
import api from "../../../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // ✅ Button loader state
  const [showPassword, setShowPassword] = useState(false); // 👁️ Password visibility state

  // ✅ react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 🔥 API Call to Login
  const onSubmit = async (data) => {
    setIsLoading(true); // ✅ Start loading
    try {
      // ✅ Axios POST request with cookies
      const response = await axios.post(`${api}/auth/login`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const resData = response.data;
        console.log("✅ Login successful!");
        sessionStorage.setItem("userData", JSON.stringify(resData.user));

        // 🚀 Prefetch and Cache posts after login
        await prefetchPosts();

        setIsLoading(false); // ✅ Stop loading
        if (resData.user.makeProfileStatus === false) {
          navigate("/createprofile");
        } else {
          navigate("/feed");
        }
      } else {
        setIsLoading(false);
        alert("❌ Invalid username or password!");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("🔥 Error:", error);
      alert("❌ Error while logging in!");
    }
  };

  return (
    <div className="login">
      <form className="form-1" onSubmit={handleSubmit(onSubmit)}>
        {/* ✅ Logo */}
        <img
          className="logo-1"
          src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713021728/Logo_xxgb0i.png"
          alt="Hook4StartUp"
        />

        {/* ✅ Username Input with Validation */}
        <div className="form-group">
          <input
            type="text"
            id="username"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Username cannot exceed 20 characters",
              },
            })}
          />
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>

        {/* ✅ Password Input with Eye Icon */}
        <div className="form-group password-container">
          <input
            type={showPassword ? "text" : "password"} // 👁️ Show/Hide
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must include uppercase, lowercase, number & special character",
              },
            })}
          />
          {/* 👁️ Toggle Eye Icon */}
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "🙈"}
          </span>
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
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
