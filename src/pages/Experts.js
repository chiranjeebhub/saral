import React from "react";
import Nav from "../components/Nav";
import Background from "../img/our_expert.jpg";
import ExpertDoc from "../components/ExpertDoc";
import Footer from "../components/Footer";

const Experts = () => {
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
            <div className="col-6" style={{ marginTop: "30vh" }}>
              <p style={{ lineHeight: "2em" }}>
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "#33c9da"
                  }}
                >
                  Experienced Doctors
                </span>
                <br />
                <span style={{ fontSize: "40px" }}>
                  Guarantee proper check up
                </span>
              </p>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="expert-box">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
          </div>
          <div
            className="row"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
          </div>
          <div
            className="row"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
            <div className="col">
              <ExpertDoc />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experts;
