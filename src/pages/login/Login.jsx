import React from "react";

import "./Login.css";
import { Link, NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login">
        <form className="form-1">
          <img
            className="logo-1"
            src="src\assets\Logo.png"
            alt="Hook4StartUp"
          />
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="war ">
            <span>Don't have an account ?</span>
            <NavLink to="/" className="log">
              Sing Up
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
