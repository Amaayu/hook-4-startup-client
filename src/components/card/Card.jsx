import "./Card.css";
import React, { useState } from "react";
import api from "../../../api/api";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false); // ✅ Like state

  // ❤️ Handle Like
  const handleLike = async () => {
    console.log(`👉 Post Liked with ID: ${post.postId}`);
    console.log("🚀 Payload being sent for Like:", {
      postId: post.postId,
    });

    try {
      const response = await fetch(`${api}/like/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ Automatically pass cookie
        body: JSON.stringify({
          postId: post.postId, // ✅ ID ko sahi bhej raha hai
        }),
      });

      // 🛑 Error ko handle karo
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Like Failed:", errorText);
        return;
      }

      // ✅ Success response ko parse karo
      const data = await response.text();
      console.log("✅ Like Success:", data);
      setLiked(true); // ✅ Like state update
    } catch (error) {
      console.error("🔥 Error in Like:", error.message);
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
      const response = await fetch(`${api}/comment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ Automatically pass cookie
        body: JSON.stringify({
          postId: post.postId,
          comment: "Nice post!",
        }),
      });

      // 🛑 Error ko handle karo
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Comment Failed:", errorText);
        return;
      }

      const data = await response.text();
      console.log("✅ Comment Success:", data);
    } catch (error) {
      console.error("🔥 Error in Comment:", error.message);
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
        <h4>
          {post.username || "Anonymous"}{" "}
          {/* ✅ Agar username nahi mila to default */}
        </h4>
      </div>
      <p>{post.content || "No content available."}</p>{" "}
      {/* ✅ Agar content na ho to fallback */}
      <div className="like-row">
        <div className="like-left">
          <img
            src="https://res.cloudinary.com/dijzsv2tt/image/upload/c_mfit,h_15,w_14/v1743100877/Hook_button_mjorst.svg"
            alt="meet-btn"
            className="btn_hook"
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
