import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Singup.css";
import api from "../../../api/api";

let deferredPrompt; // 👈 Global variable to store prompt

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event; // Save for later use
});

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSingup, setIsSingup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSingup(true);
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

        // ✅ Trigger PWA Prompt After Signup
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted PWA install");
            } else {
              console.log("User dismissed PWA install");
            }
            deferredPrompt = null;
          });
        }

        // ✅ Navigate After Signup
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
    } finally {
      setIsSingup(false);
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

        <div className="form-group password-container">
          <input
            type={showPassword ? "text" : "password"}
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

        <button className="button-1" type="submit" disabled={isSingup}>
          {isSingup ? (
            <>
              <i className="ri-loader-4-line loader-icon"></i> Signing up...
            </>
          ) : (
            "Make New Account"
          )}
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
