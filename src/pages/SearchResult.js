import React from "react";
import Nav from "../components/Nav";
import SearchResultItem from "../components/SearchResultItem";
import Footer from "../components/Footer";

const SearchResult = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container" style={{ marginTop: "30px" }}>
        <form class="form-inline">
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
            color: "#838383",
            fontWeight: "bold"
          }}
        >
          Search Results
        </h2>
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
    </React.Fragment>
  );
};

export default SearchResult;
