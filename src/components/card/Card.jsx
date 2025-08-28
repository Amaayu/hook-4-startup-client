import "./Card.css";
import React, { useState } from "react";
import api from "../../../api/api";
import axios from "axios";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false); // ✅ Like state
  const [hookImage, setHookImage] = useState("/hook_butt.svg");

  // ❤️ Handle Like
  const handleLike = async () => {
    console.log(`👉 Post Liked with ID: ${post.postId}`);
    console.log("🚀 Payload being sent for Like:", {
      postId: post.postId,
    });

    try {
      const response = await axios.post(
        `${api}/like/create`,
        { postId: post.postId },
        { withCredentials: true } // ✅ Cookies pass automatically
      );

      console.log("✅ Like Success:", response.data);
      setLiked(true); // ✅ Like state update
    } catch (error) {
      console.error("🔥 Error in Like:", error.response?.data || error.message);
    }
  };

  // 💬 Handle Comment
  const handleComment = async () => {
    console.log(`💬 Comment added to Post ID: ${post.postId}`);
    console.log("🚀 Payload being sent for Comment:", {
      postId: post.postId,
      comment: "Nice post!",
    });

    try {
      const response = await axios.post(
        `${api}/comment/create`,
        { postId: post.postId, comment: "Nice post!" },
        { withCredentials: true }
      );

      console.log("✅ Comment Success:", response.data);
    } catch (error) {
      console.error(
        "🔥 Error in Comment:",
        error.response?.data || error.message
      );
    }
  };

  // 🔥 Handle Hook Button
  const handlHook = async () => {
    console.log("this is a postId:", {
      postId: post.postId,
    });

    try {
      const response = await axios.post(
        `${api}/notify/meetup/notification`,
        { postId: post.postId },
        { withCredentials: true }
      );

      console.log("✅ Hook_button Success:", response.data);
      // 🔥 Dynamically update image src on success
      setHookImage("/color_hook_butt.svg");
    } catch (error) {
      console.error(
        "🔥 Error in Hook_button:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="content">
      <div className="top-row">
        <img
          className="img-1"
          src={post.profileImageUrl || "#"}
          alt="profile"
        />
        <h4>{post.username || "Anonymous"}</h4>{" "}
        {/* ✅ Default username if not available */}
      </div>
      <p>{post.content || "No content available."}</p>{" "}
      {/* ✅ Fallback if content is missing */}
      <div className="like-row">
        <div className="like-left">
          <img
            src={hookImage}
            alt="meet-btn"
            className="btn_hook"
            onClick={handlHook}
          />
          {/* ✅ Like and Comment Buttons */}
          <i
            className={`ri-heart-3-line ${liked ? "liked" : ""}`}
            onClick={handleLike}
          ></i>
          <i className="ri-chat-3-line" onClick={handleComment}></i>
          <i className="ri-share-circle-line"></i>
        </div>
        <i className="ri-bookmark-line"></i>
      </div>
    </div>
  );
};

export default Card;
