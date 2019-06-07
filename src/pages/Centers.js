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
      <div className="container">
        <div className="center-box">
          <div className="delhi-noida">
            <div
              className="row"
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                padding: "20px",
                color: "white"
              }}
            >
              <div className="col" style={{ borderRight: "2px dashed" }}>
                Delhi
              </div>
              <div className="col">Noida</div>
            </div>
          </div>
          <div className="map">
            <div
              className="row"
              style={{ textAlign: "center", padding: "20px" }}
            >
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.361300708642!2d77.1291366!3d28.6944227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd07df4ebb09c294!2sSaral+Diagnostics%2C+Diagnostic+Centre+In+Delhi%2C+MRI+Centre+In+Delhi!5e0!3m2!1sen!2sin!4v1559879332529!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                />
                <a href="https://goo.gl/maps/xUUtZWrFBtpnk2gm8" target="_blank">
                  <button
                    className="btn btn-warning"
                    style={{ color: "white" }}
                  >
                    Go to Google Maps (Delhi)
                  </button>
                </a>
              </div>
              <div className="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112062.04655827023!2d77.17070822244762!3d28.631591621847072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce595bfffffff%3A0xf2981df9d4915daa!2sSaral+Diagnostics+Classic%2C+Diagnostic+centre+in+Noida%2C+MRI+in+Noida!5e0!3m2!1sen!2sin!4v1559879851888!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                />
                <a href="https://goo.gl/maps/fNRi8RmvQeuVd1MM7" target="_blank">
                  <button
                    className="btn btn-warning"
                    style={{ color: "white" }}
                  >
                    Go to Google Maps (Noida)
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div
              className="col"
              style={{
                display: "flex",
                alignSelf: "center",
                flexDirection: "column"
              }}
            >
              <h3>About Our Centre</h3>
              <p>
                SARAL was set up in 1984 under professional guidance of Dr. Ravi
                Kumar Gupta MD (Radio diagnosis) from Delhi University with a
                vision to serve the people of Delhi NCR by providing latest
                medical investigation which are reliable, accurate &
                trustworthy. This is done with help of machines with latest
                technology & excellent team of technologists & consultants
                behind these machines.
              </p>
            </div>
            <div className="col">
              <div className="form-box">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="form-group ">
                    <textarea
                      class="form-control"
                      id="address"
                      rows="3"
                      placeholder="Enter your Address"
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
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "30px",
              fontWeight: "bold"
            }}
          >
            We are On Panel with
          </p>
          <p
            style={{
              textAlign: "center",
              lineHeight: "0.5em"
            }}
          >
            Following Institutions
          </p>
          <div className="panel">
            <div
              className="row"
              style={{
                textAlign: "center",
                padding: "20px"
              }}
            >
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>CGHS</li>
                  <li>DGHS</li>
                  <li>ECHS</li>
                  <li>NDPL(TPDDL)</li>
                  <li>BSES(RAJDHANI)</li>
                  <li>AIR INDIA</li>
                  <li>SAI</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>BHEL</li>
                  <li>DELHI AROGYA KOSH</li>
                  <li>DJB</li>
                  <li>MCD</li>
                  <li>DTL</li>
                  <li>IGL</li>
                  <li>BSF</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>DU</li>
                  <li>STC</li>
                  <li>DTTDC</li>
                  <li>ITBP</li>
                  <li>CPCB</li>
                  <li>TRAI</li>
                  <li>APMC</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>DDA</li>
                  <li>IPGCL</li>
                  <li>EIL</li>
                  <li>DMRC</li>
                  <li>POWER FINANCE CORP</li>
                  <li>CERC</li>
                  <li>NBE</li>
                </ul>
              </div>
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "30px",
              fontWeight: "bold"
            }}
          >
            Lab Equipment & Instruments
          </p>
          <p
            style={{
              textAlign: "center",
              lineHeight: "0.5em"
            }}
          >
            Fully Automated with two way interfacing
          </p>
          <div className="panel">
            <div
              className="row"
              style={{
                textAlign: "center",
                padding: "20px"
              }}
            >
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>1.5 T MRI</li>
                  <li>1163 Slice CT Scan</li>
                  <li>4-D Ultrasound</li>
                  <li>Dual Head Gamma NM</li>
                  <li>Iris Cell</li>
                  <li>Bio safety Cabinet type 2</li>
                  <li>Cobas ( C-6000, E411, C-311 )</li>
                  <li>Cobas integra 400</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>HMX- AL</li>
                  <li>LH-750</li>
                  <li>D-10</li>
                  <li>Sysmex CA-50</li>
                  <li>ECL-105</li>
                  <li>MedSpin 4</li>
                  <li>Rotor Gene</li>
                  <li>AVL 9180</li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li>Vesmatic-20</li>
                  <li>Gene Xpert</li>
                  <li>ID Centrifuge 12 SII</li>
                  <li>Elisa Reader</li>
                  <li>Vitek 2</li>
                  <li>BD Bactec FX40</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centers;
