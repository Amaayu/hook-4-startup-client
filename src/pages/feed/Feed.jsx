import React, { useEffect, useState } from "react";
import "./Feed.css";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";

const Feed = () => {
  const navigate = useNavigate(); // ✅ Navigation object
  const [posts, setPosts] = useState([]); // ✅ Posts ko state me rakhna
  const [loading, setLoading] = useState(true); // ✅ Loading state

  // ✅ Local Storage se cached posts ko load karo
  useEffect(() => {
    const cachedPosts = localStorage.getItem("cachedPosts");

    if (cachedPosts) {
      console.log("🚀 Using Cached Posts");
      setPosts(JSON.parse(cachedPosts));
      setLoading(false); // ✅ Agar cached data mil gaya to loading false
      console.log("🌐 Fetching Fresh Posts...");
      fetchPosts();
    } else {
      console.log("🌐 Fetching Fresh Posts...");
      fetchPosts(); // ✅ Agar cache me data na ho to hi fetch karo
    }
  }, []);

  // 🚀 Fetch Posts with Cache
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${api}/post/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ Cookie auto-pass hogi
      });

      if (!response.ok) {
        console.error(
          "❌ Failed to fetch posts:",
          response.status,
          response.statusText
        );
        return;
      }

      const postsData = await response.json();
      console.log("✅ Fetched New Posts:", postsData);

      // ✅ New posts ko cache karo
      localStorage.setItem("cachedPosts", JSON.stringify(postsData));
      setPosts(postsData);
      setLoading(false);
    } catch (error) {
      console.error("🔥 Error fetching posts:", error);
    }
  };

  return (
    <>
      <div className="feed">
        {/* ✅ Navbar */}
        <nav>
          <div className="nav-right">
            <i className="ri-menu-2-line"></i>
            <span>Menu</span>
          </div>
          <p>Hook 4 Startup</p>
          <div className="nav-left">
            <i className="ri-team-line" onClick={() => navigate("/meetup")}></i>
            <span>Meet Up</span>
          </div>
        </nav>

        {/* ✅ Loader dikhao jab tak data load ho raha ho */}
        {loading ? (
          <p className="loading-text">⏳ Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="no-posts">😕 No posts available</p>
        ) : (
          posts.map((post) => (
            <Card
              key={post.postId} // ✅ postId as key
              username={post.username}
              post={post}
            />
          ))
        )}

        <Footer />
      </div>
    </>
  );
};

export default Feed; // ✅ Bas Feed ko export karo
