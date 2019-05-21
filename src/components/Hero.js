import React from "react";

const Hero = () => {
  return (
    <div className="container Aligner">
      <h1
        className="home-hero-title"
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Health Karma: <br />
        Your Lifestyle Score
      </h1>
      <p className="home-hero-subtitle" style={{ fontWeight: "200" }}>
        Know the impact of your lifestyle on your health with our unique AI tool
      </p>
    </div>
  );
};

export default Hero;
