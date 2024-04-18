import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="content">
      <div className="top-row">
        <img
          className="img-1"
          src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1702931273/ilaody3w0s6ywvpqggtl.jpg"
          alt="profile"
        />
        <h4>aayu_is.here</h4>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit magnam
        voluptatum consequatur error exercitationem consequuntur praesentium sit
        earum tempore sunt dicta optio veritatis, quas incidunt maiores,
        molestiae dignissimos, ipsam natus. Lorem ipsum dolor, sit amet
      </p>
      <div className="like-row">
        <div className="like-left">
          <img
            src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713022947/Group_15_srsx27.png"
            alt="meet-btn"
          />
          <i className="ri-heart-3-line"></i>
          <i className="ri-chat-3-line"></i>
          <i className="ri-share-circle-line"></i>
        </div>
        <i className="ri-bookmark-line"></i>
      </div>
    </div>
  );
};

export default Card;
