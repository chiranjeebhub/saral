import React from "react";
import { Link } from "react-router-dom";

const SearchSectionMobile = () => {
  return (
    <div>
      <h6 style={{ color: "#33c9da", textAlign: "center", padding: "10px" }}>
        Health Checkup Packages
      </h6>
      <div class="row" style={{ paddingLeft: "5px" }}>
        <div class="col-10" style={{ paddingRight: "0px" }}>
          <input
            type="search"
            class="form-control"
            placeholder="Find your Package/Test"
            style={{ borderRadius: "5px 0px 0px 5px" }}
          />
        </div>
        <div
          class="col-2"
          style={{
            paddingLeft: "0px"
          }}
        >
          <Link to="/SearchResult">
            <button
              className="btn btn-primary"
              style={{ borderRadius: "0px 5px 5px 0px" }}
            >
              <i class="fas fa-search" />
            </button>
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#eeeded",
          padding: "5px",
          marginTop: "10px"
        }}
      >
        <div
          className="row"
          style={{
            margin: "5px",
            boxShadow: "0px 0px 3px 0",
            borderRadius: "10px",
            backgroundColor: "#ffffff"
          }}
        >
          <div
            className="col-9"
            style={{
              verticalAlign: "middle",
              padding: "15px"
            }}
          >
            <p>
              <span
                style={{
                  textTransform: "uppercase",
                  color: "#33c9da",
                  fontSize: "15px",
                  fontWeight: "bold"
                }}
              >
                Premarital
              </span>
              <br />
              <p style={{ fontSize: "10px", lineHeight: "1.2em" }}>
                <b>Include 16 lab tests</b>
                <br />
                Haemogram(Hb, TLC, DLC, ESR, RBC, PCV, Platelet, PeripheralSmer,
                MCV, MCH, MCHC, MPV, RDW, ANC, AEC, ALC, AMC – 16 test)
                <br />
                <b>Blood Group</b>
                <br /> VDRL, HbSAg, HIV, HPLC
              </p>
            </p>
          </div>
          <div
            className="col-3"
            style={{
              backgroundColor: "#33c9da",
              borderRadius: "0px 10px 10px 0px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center"
              }}
            >
              2,000/-
            </span>
          </div>
        </div>
        {/* 2nd package */}
        <div
          className="row"
          style={{
            margin: "5px",
            boxShadow: "0px 0px 3px 0",
            borderRadius: "10px",
            backgroundColor: "#ffffff"
          }}
        >
          <div
            className="col-9"
            style={{
              verticalAlign: "middle",
              padding: "15px"
            }}
          >
            <p>
              <span
                style={{
                  textTransform: "uppercase",
                  color: "#33c9da",
                  fontSize: "15px",
                  fontWeight: "bold"
                }}
              >
                Premarital
              </span>
              <br />
              <p style={{ fontSize: "10px", lineHeight: "1.2em" }}>
                <b>Include 16 lab tests</b>
                <br />
                Haemogram(Hb, TLC, DLC, ESR, RBC, PCV, Platelet, PeripheralSmer,
                MCV, MCH, MCHC, MPV, RDW, ANC, AEC, ALC, AMC – 16 test)
                <br />
                <b>Blood Group</b>
                <br /> VDRL, HbSAg, HIV, HPLC
              </p>
            </p>
          </div>
          <div
            className="col-3"
            style={{
              backgroundColor: "#33c9da",
              borderRadius: "0px 10px 10px 0px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center"
              }}
            >
              2,000/-
            </span>
          </div>
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          className="btn btn-block"
          style={{ backgroundColor: "#f9aa00", color: "white" }}
        >
          View All Package >>
        </button>
      </div>
    </div>
  );
};

export default SearchSectionMobile;
