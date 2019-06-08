import React from "react";
import Nav from "../components/Nav";
import Background from "../img/faq_bg.jpg";
import Footer from "../components/Footer";
import SearchResultItem from "../components/SearchResultItem";

const Download = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col">
            <div className="download-box">
              <p>
                <b>Download your report here..!</b>
              </p>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="id"
                    placeholder="Login ID"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="pass"
                    placeholder="Password"
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
          <div className="col">
            <div className="download-box">ad goes here</div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            color: "#33c9da"
          }}
        >
          Check our Facilities
        </p>
        <div
          style={{
            backgroundColor: "#f3f2f2",
            padding: "40px",
            marginBottom: "20px"
          }}
        >
          <div class="row">
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </div>
          <div class="row">
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Download;
