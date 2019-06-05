import React from "react";
import Background from "../img/homepage_bg.jpg";
const HeroMobile = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        padding: "50px 30px"
      }}
    >
      <h3
        style={{
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        Health Karma: <br />
        Your Lifestyle Score
      </h3>
      <p className="" style={{ fontWeight: "200", color: "white" }}>
        Know the impact of your lifestyle on your health with our unique AI tool
      </p>
    </div>
  );
};

export default HeroMobile;
