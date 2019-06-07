import React from "react";
import Nav from "../components/Nav";
import Background from "../img/contact_us_bg.jpg";
import pro from "../img/placeholder.jpg";
import Footer from "../components/Footer";

const Contact = () => {
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
            <div className="col-4" style={{ marginTop: "30vh" }}>
              <p style={{ lineHeight: "2em" }}>
                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    color: "#33c9da"
                  }}
                >
                  Contact Us
                </span>
              </p>
              <p style={{ fontWeight: "500" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ padding: "50px" }}>
          <div className="col" height="100%">
            <div className="contact-box">
              <p>
                <span>
                  <b>Delhi Address</b>
                </span>
                <br />
                Saral Diagnostics Centre: House No. 2 Shakti Vihar, Pitampura,
                New Delhi, 110034. Contact No: 011-47-111-111
              </p>
            </div>
            <br />
            <div className="contact-box">
              <p>
                <span>
                  <b>Noida Address</b>
                </span>
                <br />
                Saral Diagnostics Classic: E- 1B, Sector 39, Noida 201301, UP.
                near Ryan International School Sector 39 Noida Contact No: +91
                95-8000-7000
              </p>
            </div>
          </div>
          <div className="col">
            <div className="contact-box">
              <p style={{ fontWeight: "bold", textAlign: "center" }}>
                For any query fill the form below
              </p>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="number"
                    placeholder="Mobile No."
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email ID"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="msg"
                    rows="3"
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-warning btn-block"
                  style={{ color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
