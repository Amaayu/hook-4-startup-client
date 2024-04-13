import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div class="fot-left">
          <i class="ri-home-6-line"></i>
          <i class="ri-search-2-line"></i>
        </div>
        <button className="btn"></button>
        <span>pitch-idea</span>
        <div className="fot-right">
          <i class="ri-notification-2-line"></i>
          <img src="src\assets\me.jpeg" alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Footer;
