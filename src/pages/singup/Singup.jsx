import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Singup.css";
import api from "../../../api/api";

const Signup = () => {
  const navigate = useNavigate();

  // ✅ react-hook-form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // ✅ Form submit handler
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${api}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (response.ok) {
        const resData = await response.json();
        console.log("Signup successful!");
        sessionStorage.setItem("userData", JSON.stringify(resData.user));

        if (resData.user.makeProfileStatus === false) {
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

      {/* ✅ Form with react-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Field */}
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

        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field with Strong Validation */}
        <div className="form-group">
          <input
            type="password"
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
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button className="button-1" type="submit">
          Make New Account
        </button>

        {/* Already have an account */}
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
