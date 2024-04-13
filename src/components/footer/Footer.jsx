import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div class="fot-left">
          <NavLink to="/feed" className="log-3">
            <i class="ri-home-6-line"></i>
          </NavLink>
          <NavLink to="/feed" className="log-3">
            <i class="ri-search-2-line"></i>
          </NavLink>
        </div>
        <NavLink to="/feed" className="log-3">
          <button className="btn"></button>
        </NavLink>

        <span>pitch-idea</span>
        <div className="fot-right">
          <NavLink to="/feed" className="log-3">
            <i class="ri-notification-2-line"></i>
          </NavLink>

          <NavLink to="/profile" className="log-2">
            <img
              src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1702932131/wnjynhj7jft7vzo4frg3.jpg"
              alt="icon"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
