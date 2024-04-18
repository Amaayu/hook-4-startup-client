import React from "react";
import "./Postpage.css";
import Footer from "../../components/footer/Footer";

const Postpage = () => {
  return (
    <>
      <div className="post">
        <div className="nav-2">
          <i class="ri-arrow-left-line"></i>
          <p>Upload Post</p>
        </div>
        <div className="post-mid">
          <div className="post-img">
            <i className="ri-image-circle-line"></i>
            <p>image</p>
          </div>

          <div className="post-vid">
            {" "}
            <i className="ri-video-upload-line"></i>
            <p>video</p>
          </div>
        </div>
        <div className="post-inp">
          <input type="text" placeholder="Write your idea" />
        </div>
        <div className="btn-2">pitch your idea</div>
        <Footer />
      </div>
    </>
  );
};

export default Postpage;
