import React, { useEffect, useState } from "react";
import "./Meetup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import api from "../../../api/api";
import axios from "axios";

const Meetup = () => {
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handelHook = async () => {
      try {
        const response = await axios.get(`${api}/notify/all/notifications`, {
          withCredentials: true, // ✅ Cookies auto-pass hongi
        });

        setNotification(response.data);
      } catch (error) {
        console.error("🔥 Error fetching notifications:", error.message);
      }
    };

    handelHook();
  }, []);
  console.log(notification);

  return (
    <div className="meetup-page">
      {/* ✅ Top Navbar */}
      <div className="nav-bar">
        <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
        <h3>Meetup Room</h3>
      </div>

      {/* ✅ User List */}
      <div className="user-list">
        {notification.map((user) => (
          <div className="user-item" key={user.id}>
            <img src={user.dpUrl} alt="avatar" className="avatar" />
            <div className="user-info">
              <p className="username">{user.username}</p>
              <p className="name">{user.name}</p>
            </div>
            {user.status === "Interested You" ? (
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
