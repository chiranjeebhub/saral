import React from "react";
import Nav from "../components/Nav";
import Background from "../img/career_bg.jpg";
import CareerBox from "../components/CareerBox";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "90vh"
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ marginTop: "35vh", color: "#33c9da" }}
            >
              <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>CAREER</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ padding: "50px" }}>
          <div className="col">
            <CareerBox />
          </div>
          <div className="col">
            <CareerBox />
          </div>
          <div className="col">
            <CareerBox />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
