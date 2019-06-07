import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Heart
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>
              <Link to="/category">View Test >></Link>
            </p>
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
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Kidney
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>
              <Link to="/category">View Test >></Link>
            </p>
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
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Liver
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>
              <Link to="/category">View Test >></Link>
            </p>
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
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Anaemia
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>
              <Link to="/category">View Test >></Link>
            </p>
          </div>
        </Slider>
        <h1
          className="Health-Risk"
          style={{ marginBottom: "70px", paddingTop: "30px" }}
        >
          Habits
        </h1>
        <div
          style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        >
          <div className="habit-card">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-3" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/Alcoholism.jpg")}
                  height="48"
                  width="48"
                  alt=""
                />
              </div>
              <div className="col-9" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "21px" }}>Smoking</span>
              </div>
            </div>
          </div>
          <div className="habit-card">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-3" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/Alcoholism.jpg")}
                  height="48"
                  width="48"
                  alt=""
                />
              </div>
              <div className="col-9" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "21px" }}>Junk Food</span>
              </div>
            </div>
          </div>
          <div className="habit-card">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-2" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/Alcoholism.jpg")}
                  height="48"
                  width="48"
                  alt=""
                />
              </div>
              <div className="col-10" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "21px" }}>Obesity</span>
              </div>
            </div>
          </div>
          <div className="habit-card">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-2" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/Alcoholism.jpg")}
                  height="48"
                  width="48"
                  alt=""
                />
              </div>
              <div className="col-10" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "21px", float: "right" }}>
                  Alcoholism
                </span>
              </div>
            </div>
          </div>
          <div className="habit-card">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-2" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/Alcoholism.jpg")}
                  height="48"
                  width="48"
                  alt=""
                />
              </div>
              <div className="col-10" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "18px", float: "right" }}>
                  Sleeplessness
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRisk;
