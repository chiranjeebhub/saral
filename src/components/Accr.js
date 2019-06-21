import React from "react";

const Accrediation = () => {
  return (
    <div className="hero-4">
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/MFlPpq0Irvg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div class="col-sm-6" style={{ paddingLeft: "100px" }}>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>About Us</p>
            <p style={{ fontSize: "12px" }}>
              SARAL was set up in 1984 under professional guidance of Dr. Ravi
              Kumar Gupta MD (Radio diagnosis) from Delhi University with a
              vision to serve the people of Delhi NCR by providing latest
              medical investigation which are reliable , accurate & trustworthy.
              This is done with help of machines with latest technology &
              excellent team of technologists & consultants behind these
              machines.
            </p>
            <br />
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "center",
                marginLeft: "-15px"
              }}
            >
              Our Accreditation
            </p>
            <img
              src={require("../img/NABL_Delhi.png")}
              height="70"
              width="70"
              alt=""
            />
            <img
              src={require("../img/NABH_Noida.png")}
              height="70"
              width="70"
              alt=""
            />
            <img
              src={require("../img/iso.png")}
              height="70"
              width="70"
              alt=""
            />{" "}
            |{" "}
            <img
              src={require("../img/iso.png")}
              height="70"
              width="70"
              alt=""
            />
            <img
              src={require("../img/NABH_Noida.png")}
              height="70"
              width="70"
              alt=""
            />
            <img
              src={require("../img/NABL_Delhi.png")}
              height="70"
              width="70"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accrediation;
