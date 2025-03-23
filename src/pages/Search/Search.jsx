// src/pages/search/Search.jsx
import React from "react";
import "./Search.css";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const users = [
    {
      id: 1,
      name: "Himanshu Kaneriya",
      username: "himanshukaneriya_123",
      image: "/images/profile1.png",
    },
    {
      id: 2,
      name: "Hook_4_Startup",
      username: "hook4startup",
      image: "/images/hook4startup.png",
      verified: true,
    },
    {
      id: 3,
      name: "Naruto Uzomaki",
      username: "narutozomaki__786",
      image: "/images/naruto.png",
    },
    {
      id: 4,
      name: "Aniket Namdev",
      username: "aniketnamdev_678",
      image: "/images/aniket.png",
    },
  ];

  return (
    <div className="search-container">
      <div className="search-header">
        <FaArrowLeft className="back-icon" onClick={() => navigate("/feed")} />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.image} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <p className="username">{user.username}</p>
              <p className="name">{user.name}</p>
            </div>
            {user.verified && <FaCheckCircle className="verified-icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
