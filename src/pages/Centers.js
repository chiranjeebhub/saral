import React from "react";
import Nav from "../components/Nav";
import GallerySection from "../components/GallerySection";
import Background from "../img/our_centre_bg.jpg";

const Centers = () => {
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
            <div className="col-5" style={{ marginTop: "30vh" }}>
              <p style={{ lineHeight: "2em" }}>
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                  A 360<sup>o</sup> Tour to
                </span>
                <br />
                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    color: "#33c9da"
                  }}
                >
                  Our Centres
                </span>
                <br />
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                  Situated in Delhi and Noida
                </span>
              </p>
              <p style={{ fontWeight: "500" }}>
                Get a full view of Saral Diagnostics laboratories catering to
                the various diagnostic needs of customers based in Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" />
    </div>
  );
};

export default Centers;
