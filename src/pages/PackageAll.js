import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import SearchResultItem from "../components/SearchResultItem";
import Footer from "../components/Footer";
import { SaralContext } from "../Context";
import CallBackModal from "../components/CallBackModal";

const PackageAll = () => {
  const value = useContext(SaralContext);

  const allpkg = value.pkg.map((item, index) => {
    return <SearchResultItem name={item.name} price={item.price} item={item} />;
  });

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
          All Packages
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
              value={value.query}
              onChange={e => value.setQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ borderRadius: "0px 5px 5px 0px" }}
          >
            <i class="fas fa-search" />
          </button>
        </form>
        <br />
        <p style={{ textAlign: "center", padding: "0px 30px" }}>
          Our MRI is a brand new 24 channel MRI System. Why do we talk about
          Elements & channels? Elements are what acquire the information.
          Channels are like high ways on which information runs. Computers
          compute the information and give you images. We have one of the
          highest element density and number of channels for any region of
          interest to give you unpar- alleled image quality.
        </p>
        <div
          style={{
            backgroundColor: "#f3f2f2",
            padding: "10px 0px",
            marginBottom: "20px"
          }}
        >
          <div class="row justify-content-center">{allpkg}</div>
          <div class="row justify-content-center">
            <button
              className={
                value.currentPage <= 1
                  ? "btn btn-outline-light disabled"
                  : "btn btn-outline-primary"
              }
              onClick={value.prevPage}
            >
              Previous Page
            </button>
            &nbsp;&nbsp;
            <button
              className={
                value.currentPage === value.totalPage
                  ? "btn btn-outline-light disabled"
                  : "btn btn-outline-primary"
              }
              onClick={value.nextPage}
            >
              Next Page
            </button>
          </div>
          {/* <div class="row">
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </div> */}
        </div>
      </div>
      <CallBackModal />
      <Footer />
    </div>
  );
};

export default PackageAll;
