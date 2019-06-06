import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (query === "") {
      return <Redirect to="/SearchResult" />;
    }
  };
  return (
    <div className="hero-2">
      <div className="container">
        <div class="row">
          <div class="col-sm-4" />
          <div class="col-sm-8" style={{ paddingTop: "60px" }}>
            <h1 className="Health-Checkup-Packages">Health Checkup Packages</h1>
            <form onSubmit={handleSubmit}>
              <div class="row" style={{ paddingTop: "20px" }}>
                <div class="col-8" style={{ paddingRight: "0px" }}>
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Find your Package/Test"
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
                <div
                  class="col"
                  style={{
                    paddingLeft: "0px"
                  }}
                >
                  <Link to="/SearchResult">
                    <button
                      className="btn btn-primary"
                      style={{ borderRadius: "0px 5px 5px 0px" }}
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </form>
            <div className="pkg">
              <Link
                to="/single"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="pkg-title">PREMARITAL</span>
                <br />
                <span>
                  <b>Include 16 lab tests</b>
                </span>
                <br />
                Haemogram(Hb, TLC, DLC, ESR, RBC, PCV, Platelet, PeripheralSmer,
                MCV, MCH, MCHC, MPV, RDW, ANC, AEC, ALC, AMC – 16 test)
                <br />
                <b>Blood Group</b> <br />
                VDRL, HbSAg, HIV, HPLC <br />
                <span className="pkg-price">₹2,000</span>
              </Link>
            </div>
            <div className="pkg">
              <span className="pkg-title">PREMARITAL</span>
              <br />
              <span>
                <b>Include 16 lab tests</b>
              </span>
              <br />
              Haemogram(Hb, TLC, DLC, ESR, RBC, PCV, Platelet, PeripheralSmer,
              MCV, MCH, MCHC, MPV, RDW, ANC, AEC, ALC, AMC – 16 test)
              <br />
              <b>Blood Group</b> <br />
              VDRL, HbSAg, HIV, HPLC <br />
              <span className="pkg-price">₹2,000</span>
            </div>
            <p
              style={{
                paddingLeft: "20px",
                color: "#33c9da",
                fontWeight: "bold"
              }}
            >
              View All Packages >>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
