import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Keeping It Really Real</span>
          <span className="secondaryText">
            One place to find it at one go.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:mail123@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
