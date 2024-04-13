import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="content">
      <div className="top-row">
        <img
          className="img-1"
          src="https://res-console.cloudinary.com/dijzsv2tt/media_explorer_thumbnails/0028ac1b737a7591deac9201eae87da9/detailed"
          alt="profile"
        />
        <h4>aayu_is.here</h4>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit magnam
        voluptatum consequatur error exercitationem consequuntur praesentium sit
        earum tempore sunt dicta optio veritatis, quas incidunt maiores,
        molestiae dignissimos, ipsam natus. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit magnam voluptatum consequatur error
        exercitationem consequuntur praesentium sit earum tempore sunt dicta
        optio veritatis, quas incidunt maiores, molestiae dignissimos, ipsam
        natus.
      </p>
      <div className="like-row">
        <div className="like-left">
          <img src="src\assets\Group 15.png" alt="meet-btn" />
          <i class="ri-heart-3-line"></i>
          <i class="ri-chat-3-line"></i>
          <i class="ri-share-circle-line"></i>
        </div>
        <i class="ri-bookmark-line"></i>
      </div>
    </div>
  );
};

export default Card;
