import React from "react";
import Nav from "../components/Nav";
import SearchResultItem from "../components/SearchResultItem";
import Footer from "../components/Footer";

const TestCategory = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container" style={{ marginTop: "30px" }}>
        <h2
          style={{
            fontFamily: "Helvetica",
            color: "#33c9da",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Facilities Available
        </h2>
        <form class="form-inline" style={{ justifyContent: "center" }}>
          <div class="form-group">
            <input
              type="search"
              class="form-control"
              id="search"
              placeholder="Find your Package/Test"
              style={{ borderRadius: "5px 0px 0px 5px" }}
              size="80"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ borderRadius: "0px 5px 5px 0px" }}
          >
            <i class="fas fa-search" />
          </button>
          &nbsp;&nbsp;&nbsp;
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Risk Area</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Habit</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
        <h2
          style={{
            paddingTop: "20px",
            fontFamily: "Helvetica",
            color: "#33c9da",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          MRI
        </h2>
        <p style={{ textAlign: "center", padding: "0px 30px" }}>
          Our MRI is a brand new 24 channel MRI System. Why do we talk about
          Elements & channels? Elements are what acquire the information.
          Channels are like high ways on which information runs. Computers
          compute the information and give you images. We have one of the
          highest element density and number of channels for any region of
          interest to give you unpar- alleled image quality.{" "}
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

export default TestCategory;
