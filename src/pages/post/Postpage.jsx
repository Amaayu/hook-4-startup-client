import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Navigation ke liye
import "./Postpage.css";
import Footer from "../../components/footer/Footer";
import api from "../../../api/api";

const Postpage = () => {
  const [content, setContent] = useState(""); // ✅ Idea ko store karo
  const [isLoading, setIsLoading] = useState(false); // ⏳ Loader state
  const navigate = useNavigate(); // ✅ Navigation object

  // 🚀 API Call for Post
  const handlePostSubmit = async () => {
    if (!content.trim()) {
      alert("⚠️ Please write something to pitch!");
      return;
    }

    setIsLoading(true); // ⏳ Start loader

    try {
      const response = await fetch(`${api}/post/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ Automatically pass cookies
        body: JSON.stringify({
          content: content, // ✅ Payload bhejo
        }),
      });

      if (response.ok) {
        console.log("✅ Post Created Successfully!");
        navigate("/feed"); // 🧭 Redirect to Feed
      } else {
        console.error("❌ Failed to create post.");
        alert("❌ Failed to create post. Try again!");
      }
    } catch (error) {
      console.error("🔥 Error in posting idea:", error.message);
      alert("🔥 Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // ✅ Stop loader
    }
  };

  return (
    <>
      <div className="post">
        {/* ✅ Top Navbar */}
        <div className="nav-2">
          <i
            className="ri-arrow-left-line"
            onClick={() => navigate("/feed")}
          ></i>
          <p>Upload Post</p>
        </div>

        {/* ✅ Post Type (Image/Video) */}
        <div className="post-mid">
          <div className="post-img">
            <i className="ri-image-circle-line"></i>
            <p>image</p>
          </div>

          <div className="post-vid">
            <i className="ri-video-upload-line"></i>
            <p>video</p>
          </div>
        </div>

        {/* ✅ Input Box */}
        <div className="post-inp">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your idea"
          />
        </div>

        {/* ✅ Submit Button with Loader */}
        <div className="btn-2" onClick={handlePostSubmit}>
          {isLoading ? (
            <div className="loader"></div> // ⏳ Show Loader if Posting
          ) : (
            "Pitch Your Idea"
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Postpage;
