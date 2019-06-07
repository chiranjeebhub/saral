import React from "react";

const ExpertDoc = () => {
  return (
    <div className="person-box">
      <img
        className="img-shadow"
        src={require("../img/ravi.jpg")}
        width="200"
        height="200"
        alt=""
      />
      <p style={{ fontSize: "12px", marginTop: "10px" }}>
        <b>Dr. Ravi Kumar Gupta</b> has done his graduation from "UCMS Delhi
        University" and hispost-graduation MD in Radio Diagnosis from Safdarjung
        Hospital. Dr. Ravi Kumar Gupta has an experience of around 35 Years.
      </p>
    </div>
  );
};

export default ExpertDoc;
