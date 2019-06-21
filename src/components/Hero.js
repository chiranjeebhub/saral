import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true
  };
  return (
    <div style={{ padding: "0px 40px" }}>
      <Slider {...settings}>
        <div className="container">
          <div className="row">
            <div className="col">
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
                Know the impact of your lifestyle on your health with our unique
                AI tool
              </p>
            </div>
            <div
              className="col"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "10vh"
              }}
            >
              <img
                src={require("../img/banner1.png")}
                height="100%"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 2nd slide */}
        <div className="container">
          <div className="row">
            <div className="col">
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
                Know the impact of your lifestyle on your health with our unique
                AI tool
              </p>
            </div>
            <div
              className="col"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "10vh"
              }}
            >
              <img
                src={require("../img/banner2.png")}
                height="100%"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 3rd slide */}
        <div className="container">
          <div className="row">
            <div className="col">
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
                Know the impact of your lifestyle on your health with our unique
                AI tool
              </p>
            </div>
            <div
              className="col"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "10vh"
              }}
            >
              <img
                src={require("../img/banner3.png")}
                height="90%"
                width="90%"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
