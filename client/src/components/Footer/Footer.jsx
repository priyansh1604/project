// import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper" style={{ backgroundColor: "rgb(0,0,0,0.2)" }}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          {/* <img src="./logo2.png" alt="" width={120} /> */}
          {/* <span className="secondaryText">
            Our vision is to make all people <br />
            Find your best suitable
          </span> */}
        </div>
        <div className="colour1">
          <div className="flexColStart f-right">
            {/* <span className="primaryText"></span> */}
            <span className="secondaryText">Chandigarh,India</span>
            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
