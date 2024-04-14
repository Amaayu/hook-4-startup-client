import "./Profile.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="nav-1">
          <i class="ri-arrow-left-line"></i>
          <i>
            <img
              src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713100897/aayu_oqyvdh.png"
              alt="dots"
            />
          </i>
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
            <div className="follow-row">
              <div className="post">
                <h4>post</h4>
                <h4>50</h4>
              </div>
              <div className="follower">
                <h4>followers</h4>
                <h4>4.5M</h4>
              </div>
              <div className="following">
                <h4>following</h4>
                <h4>780</h4>
              </div>
            </div>
          </div>
        </div>
        <Card />
        <Card />
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default Profile;
