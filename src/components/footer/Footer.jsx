import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="fot-left">
          <NavLink to="/feed" className="log-3">
            <i className="ri-home-6-line"></i>
          </NavLink>
          <NavLink to="/search" className="log-3">
            <i className="ri-search-2-line"></i>
          </NavLink>
        </div>
        <NavLink to="/post" className="log-3">
          <button className="btn"></button>
        </NavLink>
        <span>pitch-idea</span>
        <div className="fot-right">
          <NavLink to="/notifications" className="log-3">
            <i className="ri-notification-2-line"></i>
          </NavLink>

          <NavLink to="/profile" className="log-2">
            <img
              src={"https://pfpmaker.com/images/ai/examples/first/pic-1.png"}
              alt="icon"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
