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
          Facilities Available
        </h1>

        <Slider {...settings} style={{ padding: "0px 100px" }}>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility1.jpg")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">MRI</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility2.jpg")}
              class="card-img-top"
              alt=""
            />
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">Laboratory</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility3.jpg")}
              class="card-img-top"
              alt=""
            />
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">DEXA</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility4.png")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">X-Ray</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility5.png")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">Ultra Sound</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility6.png")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">Nuclear Medicine</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility7.png")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">Mammography</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility8.png")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">ECG</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
          <div class="card" style="width: 10rem;">
            <img
              src={require("../img/facility9.png")}
              class="card-img-top"
              alt=""
            />

            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">CT Scan</h5>

              <a href="#" class="">
                View Test >>
              </a>
            </div>
          </div>
        </Slider>

        <h1
          className="Health-Risk"
          style={{ marginBottom: "70px", paddingTop: "30px" }}
        >
          Health Risk
        </h1>
        <div
          style={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        >
          <div className="habit-card">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-3" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/heart.jpg")}
                  height="40"
                  width="80"
                  alt=""
                />
              </div>
              <div className="col-9" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "21px" }}>Heart</span>
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

        <h1
          className="Health-Risk"
          style={{ marginBottom: "70px", paddingTop: "30px" }}
        >
          Testimonials
        </h1>
        <Slider {...settings}>
          <div className="risk-card1">
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Review 1
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
          </div>

          {/* 2nd testimonial */}

          <div className="risk-card1">
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Review 2
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
          </div>

          {/* 3rd testimonial */}

          <div className="risk-card1">
            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Review 3
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
          </div>

          {/* Write a  Review */}

          <div
            className="risk-card1"
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            {/* <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Write a Review
            </p> */}
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <button className="btn btn-info">Post Review</button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HealthRisk;
