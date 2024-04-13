import React from "react";
import "./Feed.css";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <nav>
          <i class="ri-menu-2-line"></i>
          <p>Hook 4 startup</p>
          <i class="ri-team-line"></i>
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
