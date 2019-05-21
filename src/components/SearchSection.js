import React from "react";

const SearchSection = () => {
  return (
    <div className="hero-2">
      <div className="container">
        <div class="row">
          <div class="col-sm-4" />
          <div class="col-sm-8" style={{ paddingTop: "60px" }}>
            <h1 className="Health-Checkup-Packages">Health Checkup Packages</h1>
            <form>
              <div class="row" style={{ paddingTop: "20px" }}>
                <div class="col-8" style={{ paddingRight: "0px" }}>
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Find your Package/Test"
                  />
                </div>
                <div class="col" style={{ paddingLeft: "0px" }}>
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
              {/* <input
              name="moviename"
              className="form-control mr-sm-2"
              type="search, submit"
              placeholder="Search"
              aria-label="Search"
              style={{ height: "40px" }}
            /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
