import React from "react";
import Nav from "../components/Nav";

const SearchResult = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "20px",
            fontFamily: "Helvetica",
            color: "#33c9da",
            fontWeight: "bold"
          }}
        >
          Facilities Available
        </h1>
        <form
          class="form-inline searchbar"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div class="form-group">
            <input
              type="search"
              class="form-control"
              id="search"
              placeholder="Find your Package/Test"
              style={{ borderRadius: "5px 0px 0px 5px" }}
              width="100%"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ borderRadius: "0px 5px 5px 0px" }}
          >
            <i class="fas fa-search" />
          </button>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Risk Area</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
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
        <h1
          style={{
            textAlign: "center",
            paddingTop: "20px",
            fontFamily: "Helvetica",
            color: "#33c9da",
            fontWeight: "bold"
          }}
        >
          MRI
        </h1>
        <p style={{ padding: "0px 100px", textAlign: "center" }}>
          Our MRI is a brand new 24 channel MRI System. Why do we talk about
          Elements & channels? Elements are what acquire the information.
          Channels are like high ways on which information runs. Computers
          compute the information and give you images. We have one of the
          highest element density and number of channels for any region of
          interest to give you unpar- alleled image quality.{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
