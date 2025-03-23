import "./Profile.css";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  // ✅ State to hold user data
  const [userData, setUserData] = useState(null);

  // ✅ Fetch User Data from sessionStorage on Component Load
  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      try {
        setUserData(JSON.parse(storedUserData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUserData(null);
      }
    }
  }, []);

  // ✅ Check if userData exists
  if (!userData) {
    return <h3>Loading user profile...</h3>;
  }

  // ✅ Accessing userProfileId correctly
  const userProfileId = userData.userProfileId || {}; // Agar null hai toh empty object assign kar raha hai

  console.log("userData:", userData);
  console.log("userProfileId:", userProfileId);

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

        <div className="mid">
          <div className="mid-row">
            <img
              src={
                userProfileId.profilePictureUrl ||
                "https://pfpmaker.com/images/ai/examples/first/pic-1.png"
              }
              alt="profile"
            />
            <h4>
              {userProfileId.fullName
                ? userProfileId.fullName
                : "No Name Available"}
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
                <h4>50</h4>
              </div>
              <div className="follower">
                <h4>Followers</h4>
                <h4>
                  {userProfileId.numberOfFollowers
                    ? userProfileId.numberOfFollowers
                    : 0}
                </h4>
              </div>
              <div className="following">
                <h4>Following</h4>
                <h4>
                  {userProfileId.numberOfFollowing
                    ? userProfileId.numberOfFollowing
                    : 0}
                </h4>
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
