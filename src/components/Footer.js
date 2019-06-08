import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="footer foot">
        <div class="container">
          <div class="row" style={{ textAlign: "left" }}>
            <div class="col-sm-2" style={{ padding: "0px" }}>
              <ul
                style={{ listStyle: "none", padding: "0px", fontSize: "13px" }}
              >
                <li style={{ fontSize: "20px", fontWeight: "bold" }}>Pages</li>
                <li>> Home</li>
                <li>
                  <Link to="/about">> About</Link>
                </li>
                <li>
                  <Link to="/gallery">> Gallery</Link>
                </li>
                <li>
                  <Link to="/faq">> FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">> Contact Us</Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-2" style={{ marginLeft: "-90px" }}>
              <ul
                style={{ listStyle: "none", padding: "0px", fontSize: "13px" }}
              >
                <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Major Links
                </li>
                <li>> Privacy Policy</li>
                <li>
                  <Link to="/experts">> Our Experts</Link>
                </li>
                <li>> Our Offers</li>
                <li>
                  <Link to="/centers">> Our Centers</Link>
                </li>
                <li>> Milestones</li>
              </ul>
            </div>
            <div class="col-sm-2" style={{ marginLeft: "-40px" }}>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0px",
                  fontSize: "13px"
                }}
              >
                <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Delhi Address
                </li>
                <p>
                  Saral Diagnostics Centre: House No. 2 Shakti Vihar, Pitampura,
                  New Delhi, 110034. Contact No: 011-47-111-111
                </p>
              </ul>
            </div>
            <div class="col-sm-2" style={{ padding: "0px" }}>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "10px",
                  fontSize: "13px"
                }}
              >
                <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Delhi Address 2
                </li>
                <p>
                  Saral Advanced Diagnostics: E1073, Sarasvati Vihar, Pitampura
                  New Delhi, 110034 Contact No: 011-47-111-111
                </p>
              </ul>
            </div>
            <div class="col-sm-2" style={{ padding: "0px" }}>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "10px",
                  fontSize: "13px"
                }}
              >
                <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Noida Address
                </li>
                <p>
                  Saral Diagnostics Classic: E- 1B, Sector 39, Noida 201301, UP.
                  near Ryan International School Sector 39 Noida Contact No: +91
                  95-8000-7000
                </p>
              </ul>
            </div>
            <div
              class="col-sm-2"
              style={{ textAlign: "center", marginLeft: "20px" }}
            >
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>SUBSCRIBE</p>
              <form>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <button
                  className="btn btn-info btn-sm btn-block"
                  style={{ marginTop: "10px" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* <span class="text-muted">Place sticky footer content here.</span> */}
        </div>
      </footer>
      <div style={{ backgroundColor: "black" }}>
        <div className="container">
          <span>© All rights reserved</span>
          <span className="float-right">facebook</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
