import "./Card.css";
import React, { useState } from "react";
import api from "../../../api/api";

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

  // Handle Hook buttun
  const handlHook = async () => {
    console.log("this is a postId : ", {
      postId: post.postId,
    });

    try {
      const Hook_Respons = await fetch(`${api}/notify/meetup/notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          postId: post.postId,
        }),
      });
      // 🛑 Error ko handle karo
      if (!Hook_Respons.ok) {
        const errorText = await Hook_Respons.text();
        console.error("❌ Hook_button Failed:", errorText);
        return;
      }
      const data = await Hook_Respons.text();
      console.log("✅ Hook_button Success:", data);
      // 🔥 Dynamically update image src on success
      setHookImage("/color_hook_butt.svg"); //
    } catch (error) {
      console.error("🔥 Error in Hook_button :", error.message);
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
