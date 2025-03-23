import React, { useState } from "react";
import "./Editprofile.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Himanshu Kaneriya",
    username: "himanshukaneriya_123",
    bio: "hey!, check my latest song “Memories”",
    link: "https://www.google.com/",
    gender: "Male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Form Data Saved:", formData);
    alert("Profile Updated Successfully!");
    navigate("/profile");
  };

  return (
    <div className="edit-profile">
      {/* Top Navigation */}
      <div className="nav-2">
        <i className="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
        <h3>Edit Profile</h3>
        <i className="ri-check-line" onClick={handleSave}></i>
      </div>

      {/* Profile Picture */}
      <div className="profile-section">
        <img
          src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713100897/aayu_oqyvdh.png"
          alt="profile"
          className="profile-pic"
        />
        <p>Edit picture</p>
      </div>

      {/* Form Fields */}
      <div className="form-section">
        {[
          { label: "Name", name: "name", value: formData.name },
          { label: "username", name: "username", value: formData.username },
          { label: "Bio", name: "bio", value: formData.bio },
          { label: "Add link", name: "link", value: formData.link },
        ].map((item, index) => (
          <div className="input-group" key={index}>
            <label>{item.label}</label>
            <input
              type="text"
              name={item.name}
              value={item.value}
              onChange={handleChange}
              placeholder={`Enter ${item.label}`}
            />
          </div>
        ))}

        {/* Gender Field */}
        <div className="input-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Editprofile;
