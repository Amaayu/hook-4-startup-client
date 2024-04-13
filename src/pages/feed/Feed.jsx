import React from "react";
import "./Feed.css";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <nav>
          <div className="nav-right">
            <i class="ri-menu-2-line"></i>
            <span>Menu</span>
          </div>

          <p>Hook 4 startup</p>
          <div className="nav-left">
            <i class="ri-team-line"></i>
            <span>Meet Up</span>
          </div>
        </nav>{" "}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default Feed;
