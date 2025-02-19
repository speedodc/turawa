import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <h1 className="title">Explore Our Themes</h1>
      <p className="body-text">
        Discover unforgettable adventures designed to ignite your curiosity and bring happiness to every moment.
      </p>
      <div className="themes-container">
        <div className="theme-item">
        <img src='../src/images/tourism.png' alt="Wildlife" className="theme-image" />
        <div className="theme-box">
            <p className="theme-text">Tourism</p>
          </div>
        </div>
        <div className="theme-item">
          <img src='../src/images/event.png' alt="Wildlife" className="theme-image" />
          <div className="theme-box">
            <p className="theme-text">Wildlife</p>
          </div>
        </div>
        <div className="theme-item">
        <img src='../src/images/travel.png' alt="Wildlife" className="theme-image" />
        <div className="theme-box">
            <p className="theme-text">Adventure</p>
          </div>
        </div>
        <div className="theme-item">
        <img src='../src/images/advocacy.png' alt="Wildlife" className="theme-image" />
        <div className="theme-box">
            <p className="theme-text">Culture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
