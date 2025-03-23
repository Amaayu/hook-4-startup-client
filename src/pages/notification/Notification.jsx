import React from "react";
import "./Notification.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const notifications = [
  {
    id: 1,
    username: "narutouzumaki__786",
    action: "liked",
    post: "your post",
    avatar: "https://i.imgur.com/Wd1Jvfs.png",
  },
  {
    id: 2,
    username: "hook4startup",
    action: "following",
    post: "you",
    avatar: "https://i.imgur.com/EX3uYIA.png",
    verified: true,
  },
  {
    id: 3,
    username: "aniketnamdev_678",
    action: "liked",
    post: "your post",
    avatar: "https://i.imgur.com/s89zPoR.png",
  },
  {
    id: 4,
    username: "narutouzumaki__786",
    action: "liked",
    post: "your post",
    avatar: "https://i.imgur.com/Wd1Jvfs.png",
  },
  {
    id: 5,
    username: "hook4startup",
    action: "following",
    post: "you",
    avatar: "https://i.imgur.com/EX3uYIA.png",
    verified: true,
  },
  {
    id: 6,
    username: "aniketnamdev_678",
    action: "liked",
    post: "your post",
    avatar: "https://i.imgur.com/s89zPoR.png",
  },
];

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div className="notification-page">
      {/* ✅ Top Navbar */}
      <div className="nav-bar">
        <i className="ri-arrow-left-line" onClick={() => navigate("/feed")}></i>
        <h3>Notifications</h3>
      </div>

      {/* ✅ Notification List */}
      <div className="notification-list">
        {notifications.map((item) => (
          <div className="notification-item" key={item.id}>
            <img src={item.avatar} alt="avatar" className="avatar" />
            <div className="notification-content">
              <p>
                <strong>{item.username}</strong>{" "}
                {item.verified && <i className="ri-check-fill verified"></i>}
                {item.action} <span>{item.post}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Notification;
