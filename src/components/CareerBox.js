import React from "react";

const CareerBox = () => {
  return (
    <div>
      <div className="career-box" style={{ textAlign: "center" }}>
        <img
          src={require("../img/placeholder.jpg")}
          width="310px"
          height="200px"
          alt=""
          style={{ padding: "20px" }}
        />
        <div
          style={{
            textAlign: "left",
            padding: "0px 20px"
          }}
        >
          <h6 style={{ color: "#33c9da", fontWeight: "bold" }}>
            Career Post Demo
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
        </div>
        <div className="read-more">
          <span style={{ float: "left" }}>Read More</span>
          <span style={{ float: "right" }}>>></span>
        </div>
      </div>
    </div>
  );
};

export default CareerBox;
