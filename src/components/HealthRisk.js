import React from "react";
import Slider from "react-slick";

const HealthRisk = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 30,
    dots: false
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 10,
    dots: false
  };
  return (
    <div className="hero-3">
      <div className="container">
        <h1
          className="Health-Risk"
          style={{ marginBottom: "70px", paddingTop: "30px" }}
        >
          Health Risk
        </h1>
        <Slider {...settings}>
          <div className="risk-card">
            <img
              src={require("../img/heart.jpg")}
              height="57"
              width="100"
              alt=""
            />
            <br />
            <br />
            <h3>Heart</h3>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>

          <div className="risk-card">
            <img
              src={require("../img/kidney.jpg")}
              height="57"
              width="84"
              alt=""
            />
            <br />
            <br />
            <h3>Kidney</h3>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>
          <div className="risk-card">
            <img
              src={require("../img/liver.jpg")}
              height="57"
              width="84"
              alt=""
            />
            <br />
            <br />
            <h3>Liver</h3>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>
          <div className="risk-card">
            <img
              src={require("../img/heart.jpg")}
              height="57"
              width="100"
              alt=""
            />
            <br />
            <br />
            <h3>Heart</h3>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>
        </Slider>
        <h1
          className="Health-Risk"
          style={{ marginBottom: "70px", paddingTop: "30px" }}
        >
          Habits
        </h1>
        <div style={{ display: "flex", margin: "auto" }}>
          <div className="habit-card">
            <span style={{ display: "flex" }}>
              <img
                src={require("../img/Alcoholism.jpg")}
                height="48"
                width="48"
                alt=""
              />
              <p style={{ fontSize: "21px" }}>Smoking</p>
            </span>
          </div>
          <div className="habit-card">
            <span style={{ display: "flex" }}>
              <img
                src={require("../img/Alcoholism.jpg")}
                height="48"
                width="48"
                alt=""
              />
              <p style={{ fontSize: "21px" }}>Alcoholism</p>
            </span>
          </div>
          <div className="habit-card">
            <span style={{ display: "flex" }}>
              <img
                src={require("../img/Alcoholism.jpg")}
                height="48"
                width="48"
                alt=""
              />
              <p style={{ fontSize: "21px" }}>Junk Food</p>
            </span>
          </div>
          <div className="habit-card">
            <span style={{ display: "flex" }}>
              <img
                src={require("../img/Alcoholism.jpg")}
                height="48"
                width="48"
                alt=""
              />
              <p style={{ fontSize: "21px" }}>Obesity</p>
            </span>
          </div>
          <div className="habit-card">
            <span style={{ display: "flex", textAlign: "center" }}>
              <img
                src={require("../img/Alcoholism.jpg")}
                height="48"
                width="48"
                alt=""
              />
              <p style={{ fontSize: "21px" }}>Anger</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRisk;
