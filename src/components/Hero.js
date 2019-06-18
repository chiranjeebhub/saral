import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 30,
    dots: false,
    arrows: false
  };
  return (
    <div>
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
                alignItems: "end",
                justifyContent: "center"
              }}
            >
              {/* <img
                src={require("../img/1.png")}
                height="105%"
                width="105%"
                alt=""
              /> */}
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
                justifyContent: "center"
              }}
            >
              {/* <img
                src={require("../img/2.png")}
                height="105%"
                width="105%"
                alt=""
              /> */}
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
                justifyContent: "center"
              }}
            >
              {/* <img
                src={require("../img/3.png")}
                height="105%"
                width="105%"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
