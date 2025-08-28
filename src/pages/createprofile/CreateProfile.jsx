import "./CreateProfile.css";
import Footer from "../../components/footer/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import axios from "axios";

const CreateProfile = () => {
  const navigate = useNavigate();

  // ✅ State Variables
  const [profilePicture, setProfilePicture] = useState(
    "https://pfpmaker.com/images/ai/examples/first/pic-1.png"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // ✅ Add Loader

  // ✅ Fetch User Data from Session Storage
  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserData = sessionStorage.getItem("userData");
      if (storedUserData) {
        try {
          setUserData(JSON.parse(storedUserData));
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUserData(null);
        }
      }
    };

    fetchUserData(); // ✅ Get user data
    prefetchPosts(); // 🚀 Prefetch posts for faster loading
  }, []);

  console.log("username:", userData?.username || "No username found");

  // 🚀 Prefetch and Cache Posts
  const prefetchPosts = async () => {
    try {
      const response = await axios.get(`${api}/post/all`, {
        withCredentials: true,
      });

      const postsData = response.data;
      console.log("✅ Pre-fetched Posts:", postsData);
      localStorage.setItem("cachedPosts", JSON.stringify(postsData));
    } catch (error) {
      console.error("🔥 Error prefetching posts:", error.message);
    }
  };

  // ✅ Handle Profile Picture Upload
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  // 🚀 API Call to Create Profile + Upload Image
  const handleProfileCreate = async () => {
    setIsLoading(true); // ⏳ Start Loader
    const fullName = `${firstName} ${lastName}`.trim();
    const profileData = {
      username: userData?.username || "dummy_user",
      fullName: fullName || "Unknown User",
      bio: bio || "New User",
    };

    try {
      // ✅ Step 1: Create Profile API
      const profileResponse = await axios.post(
        `${api}/user/profile/create`,
        profileData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("✅ Profile created successfully!");

      // ✅ Step 2: Upload Image if Selected
      if (
        profilePicture !==
        "https://pfpmaker.com/images/ai/examples/first/pic-1.png"
      ) {
        await handleImageUpload();
      } else {
        console.log("⚡ No profile picture selected, skipping image upload.");
      }

      // ✅ Step 3: Prefetch Posts & Navigate to Feed
      await prefetchPosts();
      alert("Profile created successfully!");
      navigate("/feed");
    } catch (error) {
      console.error("🔥 Error:", error.message);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // ✅ Stop Loader
    }
  };

  // 🚀 API Call to Upload Image to Cloudinary
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      const fileInput = document.getElementById("profile-pic");

      if (fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);

        const uploadResponse = await axios.post(
          `${api}/cloudinary/profile/create`,
          formData,
          {
            withCredentials: true,
          }
        );

        console.log("✅ Profile picture uploaded successfully!");
      }
    } catch (error) {
      console.error("🔥 Error during image upload:", error.message);
    }
  };

  return (
    <div className="create-profile">
      {/* ✅ Navbar */}
      <div className="nav">
        <i className="ri-arrow-left-line"></i>
        <i
          className={`ri-check-line ${
            isLoading ? "disabled ri-loader-4-line rotate" : ""
          }`}
          onClick={isLoading ? null : handleProfileCreate}
        ></i>
      </div>

      {/* ✅ Profile Picture */}
      <div className="profile-section">
        <label htmlFor="profile-pic">
          <img src={profilePicture} alt="profile" className="profile-pic" />
        </label>
        <input
          type="file"
          id="profile-pic"
          accept="image/*"
          onChange={handlePictureUpload}
          hidden
        />
        <h4>Create Picture</h4>
      </div>

      {/* ✅ Form Section */}
      <div className="form-section">
        {/* Name */}
        <label>Name</label>
        <div className="name-inputs">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Bio */}
        <label>Bio</label>
        <input
          type="text"
          placeholder="hey, I am........."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        {/* Mobile Number */}
        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        {/* Date of Birth */}
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        {/* Gender */}
        <label>Gender</label>
        <div
          className="gender-select"
          onClick={() => setGender(gender === "Male" ? "Female" : "Male")}
        >
          <span>{gender}</span>
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
