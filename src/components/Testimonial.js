import React from "react";

const Testimonial = () => {
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
              <Link
                to="/risk/Heart/72"
                style={{ textDecoration: "none", color: "#33c9da" }}
              >
                Heart
              </Link>
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />

            <p>
              <Link
                to="/risk/Heart/72"
                style={{ textDecoration: "none", color: "#33c9da" }}
              >
                View Test >>
              </Link>
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
              <Link
                to="/risk/Kidney/82"
                style={{ textDecoration: "none", color: "#33c9da" }}
              >
                Kidney
              </Link>
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>
              <Link
                to="/risk/Kidney/82"
                style={{ textDecoration: "none", color: "#33c9da" }}
              >
                View Test >>
              </Link>
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
            <p style={{ fontSize: "21px", fontWeight: "bold" }}>
              <Link
                to="/risk/Liver/73"
                style={{ textDecoration: "none", color: "#33c9da" }}
              >
                Liver
              </Link>
            </p>
            <p style={{ fontSize: "12px" }}>
              Heart is the most important organ of the body and keeping it
              healthy is essential. With heart checkup, stay away from any heart
              disease.
            </p>
            <br />
            <p>
              <Link
                to="/risk/Liver/73"
                style={{ textDecoration: "none", color: "#33c9da" }}
              >
                View Test >>
              </Link>
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
            <p>View Test >></p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
