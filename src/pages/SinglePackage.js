import React from "react";
import Nav from "../components/Nav";

const SinglePackage = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container">
        <div className="single-title">
          <div
            class="row"
            style={{ padding: "15px 30px", color: "white", fontWeight: "bold" }}
          >
            <div class="col-sm-6">MRI Abdomen Lower ( Pelvis )</div>
            <div class="col-sm-6" style={{ textAlign: "right" }}>
              Price: ₹8,000
            </div>
          </div>
        </div>
        <div className="single-details-box">
          <div class="row">
            <div
              class="col-sm-6"
              style={{
                padding: "0px 40px",
                borderRight: "2px dashed"
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Nunc dictum iaculis sapien id sollicitudin.
                <br />
                Donec fermentum porttitor nisl, id fermentum dui sollicitudin
                sed.
              </p>
            </div>
            <div class="col-sm-6" style={{ padding: "0px 60px" }}>
              No Special Requirements, If the patient is not cooperative then
              fasting is required fo 5-6 hours
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "20px 0px" }}>
          <button type="button" class="btn but-single-book">
            Book Now
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn but-single-call">
            Book Now
          </button>
        </div>
        <h1
          style={{ color: "#33c9da", textAlign: "center", margin: "30px 0px" }}
        >
          SIMILLAR PACKAGES
        </h1>
        <div className="similar-box" style={{ textAlign: "center" }}>
          <div class="row">
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
          </div>

          <div class="row" style={{ marginTop: "20px" }}>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
