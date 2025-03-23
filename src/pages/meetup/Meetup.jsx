import React from "react";
import "./Meetup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const users = [
  {
    id: 1,
    username: "himanshukaneriya_123",
    name: "Himanshu Kaneriya",
    status: "interested",
    avatar: "https://i.imgur.com/Wd1Jvfs.png",
  },
  {
    id: 2,
    username: "narutouzumaki__786",
    name: "Naruto Uzomaki",
    status: "interested",
    avatar: "https://i.imgur.com/Wd1Jvfs.png",
  },
  {
    id: 3,
    username: "aniketnamdev_678",
    name: "Aniket Namdev",
    status: "done",
    avatar: "https://i.imgur.com/s89zPoR.png",
  },
  {
    id: 4,
    username: "himanshukaneriya_123",
    name: "Himanshu Kaneriya",
    status: "interested",
    avatar: "https://i.imgur.com/Wd1Jvfs.png",
  },
  {
    id: 5,
    username: "narutouzumaki__786",
    name: "Naruto Uzomaki",
    status: "done",
    avatar: "https://i.imgur.com/Wd1Jvfs.png",
  },
  {
    id: 6,
    username: "aniketnamdev_678",
    name: "Aniket Namdev",
    status: "interested",
    avatar: "https://i.imgur.com/s89zPoR.png",
  },
];

const Meetup = () => {
  const navigate = useNavigate();

  return (
    <div className="meetup-page">
      {/* ✅ Top Navbar */}
      <div className="nav-bar">
        <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
        <h3>Meetup Room</h3>
      </div>

      {/* ✅ User List */}
      <div className="user-list">
        {users.map((user) => (
          <div className="user-item" key={user.id}>
            <img src={user.avatar} alt="avatar" className="avatar" />
            <div className="user-info">
              <p className="username">{user.username}</p>
              <p className="name">{user.name}</p>
            </div>
            {user.status === "interested" ? (
              <button className="btn interested">Interested You</button>
            ) : (
              <button className="btn done">Deal Done</button>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Meetup;
