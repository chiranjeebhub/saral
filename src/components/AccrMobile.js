import React from "react";

const AccrMobile = () => {
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/MFlPpq0Irvg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <h4 style={{ textAlign: "center" }}>About Us</h4>

      <div
        style={{
          backgroundColor: "#eeeded",
          margin: "10px",
          padding: "10px",
          textAlign: "center"
        }}
      >
        <p style={{ fontSize: "12px" }}>
          SARAL was set up in 1984 under professional guidance of Dr. Ravi Kumar
          Gupta MD (Radio diagnosis) from Delhi University with a vision to
          serve the people of Delhi NCR by providing latest medical
          investigation which are reliable , accurate & trustworthy. This is
          done with help of machines with latest technology & excellent team of
          technologists & consultants behind these machines.
        </p>
      </div>
      <h4 style={{ textAlign: "center" }}>Our Accreditation</h4>
      <div
        style={{
          backgroundColor: "#eeeded",
          margin: "10px",
          padding: "10px",
          textAlign: "center"
        }}
      >
        <img
          src={require("../img/NABH_Noida.png")}
          height="70"
          width="70"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <img
          src={require("../img/NABL_Delhi.png")}
          height="70"
          width="70"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <img src={require("../img/iso.png")} height="70" width="70" alt="" />
        &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
        <img
          src={require("../img/NABH_Noida.png")}
          height="70"
          width="70"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <img
          src={require("../img/NABL_Delhi.png")}
          height="70"
          width="70"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <img src={require("../img/iso.png")} height="70" width="70" alt="" />
      </div>
    </div>
  );
};

export default AccrMobile;
