import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import api from "../../../api/api";

const Footer = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://pfpmaker.com/images/ai/examples/first/pic-1.png"
  );
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Fetch Profile with Caching
  const fetchUserProfile = async () => {
    const cachedProfile = sessionStorage.getItem("userProfile");

    if (cachedProfile) {
      console.log("📦 Using Cached Profile");
      setProfilePicture(JSON.parse(cachedProfile).profilePictureUrl);
      setIsLoading(false);
      return;
    }

    try {
      console.log("🚀 Fetching profile from API...");
      const response = await fetch(`${api}/user/profile`, {
        method: "GET",
        credentials: "include", // ✅ Token cookies se bhejo
      });

      if (!response.ok) {
        throw new Error("❌ Failed to fetch user profile!");
      }

      const data = await response.json();
      console.log("✅ Fetched Profile:", data);

      // ✅ Profile ko state me set karo
      setProfilePicture(data.userProfile.profilePicture);
      // 🚀 Cache the profile in sessionStorage
      sessionStorage.setItem("userProfile", JSON.stringify(data.userProfile));

      setIsLoading(false);
    } catch (error) {
      console.error("🔥 Error fetching profile:", error);
      setIsLoading(false);
    }
  };

  // ✅ Fetch Profile on Component Mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

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
            {isLoading ? (
              <div className="loader"></div> // ⏳ Loader jab tak profile load ho raha hai
            ) : (
              <img src={profilePicture} alt="icon" />
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
