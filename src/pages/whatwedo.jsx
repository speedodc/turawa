import React from "react";
import "./WhatWeDo.css";

// Import images properly
import tourismImage from "../images/tourism.png";
import eventImage from "../images/event.png";
import travelImage from "../images/travel.png";
import advocacyImage from "../images/advocacy.png";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <h1 className="title">Explore Our Themes</h1>
      <p className="body-text">
        Discover unforgettable adventures designed to ignite your curiosity and bring happiness to every moment.
      </p>
      <div className="themes-container">
        <div className="theme-item">
          <img src={tourismImage} alt="Tourism" className="theme-image" />
          <div className="theme-box">
            <p className="theme-text">Tourism</p>
          </div>
        </div>
        <div className="theme-item">
          <img src={eventImage} alt="Event" className="theme-image" />
          <div className="theme-box">
            <p className="theme-text">Wildlife</p>
          </div>
        </div>
        <div className="theme-item">
          <img src={travelImage} alt="Travel" className="theme-image" />
          <div className="theme-box">
            <p className="theme-text">Adventure</p>
          </div>
        </div>
        <div className="theme-item">
          <img src={advocacyImage} alt="Advocacy" className="theme-image" />
          <div className="theme-box">
            <p className="theme-text">Culture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
