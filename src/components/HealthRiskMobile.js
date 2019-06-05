import React from "react";
import Slider from "react-slick";

const HealthRiskMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    dots: true
  };
  return (
    <div>
      <h5 style={{ color: "#33c9da", textAlign: "center", padding: "10px" }}>
        Health Risk
      </h5>

      <div style={{ backgroundColor: "#eeeded" }}>
        <Slider {...settings}>
          <div className="risk-card-mob">
            <img
              src={require("../img/heart.jpg")}
              height="57"
              width="100"
              alt=""
            />

            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Heart
            </p>
            <p style={{ fontSize: "12px", padding: "10px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>
          <div className="risk-card-mob">
            <img
              src={require("../img/heart.jpg")}
              height="57"
              width="100"
              alt=""
            />

            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Heart
            </p>
            <p style={{ fontSize: "12px", padding: "10px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>
          <div className="risk-card-mob">
            <img
              src={require("../img/heart.jpg")}
              height="57"
              width="100"
              alt=""
            />

            <p
              style={{ fontSize: "21px", fontWeight: "bold", color: "#33c9da" }}
            >
              Heart
            </p>
            <p style={{ fontSize: "12px", padding: "10px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>View Test >></p>
          </div>
        </Slider>
      </div>

      {/* habits */}

      <h5
        style={{
          color: "#33c9da",
          textAlign: "center",
          padding: "10px",
          marginTop: "20px"
        }}
      >
        Habits
      </h5>

      <div style={{ backgroundColor: "#eeeded" }}>
        <Slider {...settings}>
          <div className="risk-card-mob">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-2" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/anger.jpg")}
                  height="70"
                  width="70"
                  alt=""
                />
              </div>
              <div className="col-10" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "30px" }}>Anger</span>
              </div>
            </div>
          </div>
          <div className="risk-card-mob">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-2" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/Alcoholism.jpg")}
                  height="70"
                  width="70"
                  alt=""
                />
              </div>
              <div className="col-10" style={{ alignSelf: "center" }}>
                <span
                  style={{
                    fontSize: "30px"
                  }}
                >
                  Alcoholism
                </span>
              </div>
            </div>
          </div>
          <div className="risk-card-mob">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-2" style={{ verticalAlign: "middle" }}>
                <img
                  src={require("../img/anger.jpg")}
                  height="70"
                  width="70"
                  alt=""
                />
              </div>
              <div className="col-10" style={{ alignSelf: "center" }}>
                <span style={{ fontSize: "30px" }}>Anger</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HealthRiskMobile;
