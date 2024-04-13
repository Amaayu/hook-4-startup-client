import "./Profile.css";
import React from "react";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="nav-1">
          <i class="ri-arrow-left-line"></i>
          <i class="ri-chat-1-line"></i>
        </div>
        <div className="mid">
          <p>My Profile</p>
          <div className="mid-row">
            <img
              src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1702931273/ilaody3w0s6ywvpqggtl.jpg"
              alt="profile"
            />
            <h4>Aayush Tonk</h4>
            <h6>aayu_is.here</h6>
            <div className="btn-2"> Edit profile </div>
          </div>
          <div className="mid-row-1">
            <img
              src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713036949/s306zoo4j5r1ek3ylfe8.png"
              alt=""
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Profile;
