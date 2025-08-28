import "./Profile.css";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import api from "../../../api/api";
import axios from "axios";

const Profile = () => {
  // ✅ State to hold user profile data
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  // ✅ Fetch Profile Data on Load
  useEffect(() => {
    const cachedProfile = sessionStorage.getItem("userProfile");

    // 🚀 Pehle cache se render karo
    if (cachedProfile) {
      console.log("🚀 Using Cached Profile from sessionStorage!");
      setUserData(JSON.parse(cachedProfile)); // ✅ Cached profile set karo
      setLoading(false);
    }

    // ✅ Background me fresh data ko le aao
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${api}/user/profile`, {
          withCredentials: true, // ✅ Token cookies se bhejo
        });

        console.log("✅ Fetched Updated Profile:", response.data);

        // ✅ New Profile ko update karo
        setUserData(response.data.userProfile);

        // 🚀 Cache updated data in sessionStorage
        sessionStorage.setItem(
          "userProfile",
          JSON.stringify(response.data.userProfile)
        );
      } catch (error) {
        console.error("🔥 Error fetching profile:", error.message);
      } finally {
        setLoading(false); // ✅ Loading false
      }
    };

    fetchUserProfile(); // ✅ API Call for fresh data
  }, []);

  // ✅ Check if data is loading
  if (loading && !userData) {
    return <h3>Loading user profile...</h3>;
  }

  // ✅ Handle no profile found
  if (!userData) {
    return <h3>No profile found! ❌</h3>;
  }

  return (
    <>
      <div className="profile">
        {/* ✅ Navbar */}
        <div className="nav-1">
          <i className="ri-arrow-left-line"></i>
          <h3>My Profile</h3>
          <i>
            <img
              src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713100897/aayu_oqyvdh.png"
              alt="dots"
            />
          </i>
        </div>

        {/* ✅ Profile Details */}
        <div className="mid">
          <div className="mid-row">
            <img
              src={
                userData.profilePictureUrl ||
                "https://pfpmaker.com/images/ai/examples/first/pic-1.png"
              }
              alt="profile"
            />
            <h4>
              {userData.fullName ? userData.fullName : "No Name Available"}
            </h4>
            <h6>{userData.username || "No Username"}</h6>
            <div className="btn-2">Edit profile</div>
          </div>

          {/* ✅ Follow Section */}
          <div className="mid-row-1">
            <img
              src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713036949/s306zoo4j5r1ek3ylfe8.png"
              alt=""
            />
            <div className="follow-row">
              <div className="post">
                <h4>Posts</h4>
                <h4>{userData.numberOfPosts || 0}</h4>
              </div>
              <div className="follower">
                <h4>Followers</h4>
                <h4>{userData.numberOfFollowers || 0}</h4>
              </div>
              <div className="following">
                <h4>Following</h4>
                <h4>{userData.numberOfFollowing || 0}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Profile;
