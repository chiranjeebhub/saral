import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import SearchResultItem from "../components/SearchResultItem";
import Footer from "../components/Footer";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const RiskPage = props => {
  const urlPath = props.location.pathname;
  const catId = urlPath.substr(urlPath.lastIndexOf("/") + 1);
  const catName = urlPath.substring(
    urlPath.lastIndexOf("/", urlPath.lastIndexOf("/") - 1),
    urlPath.lastIndexOf("/")
  );
  const [catItem, setCatItem] = useState([]);
  const [tag, setTag] = useState([]);
  console.log(catName);

  useEffect(() => {
    Axios.get(
      `https://saraldiagnostics.com/wp-json/wc/v3/products?tag=${catId}&per_page=9&consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
    ).then(res => {
      setCatItem(res.data);
    });
  }, []);

  const allpkg = catItem.map((item, index) => {
    return <SearchResultItem name={item.name} price={item.price} />;
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
          {catName}
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
          {/* &nbsp;&nbsp;&nbsp;
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
          </div> */}
        </form>
        <br />
        {/* <h2
          style={{
            paddingTop: "20px",
            fontFamily: "Helvetica",
            color: "#33c9da",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {catName}
        </h2> */}
        {/* <p style={{ textAlign: "center", padding: "0px 30px" }}>
          Our MRI is a brand new 24 channel MRI System. Why do we talk about
          Elements & channels? Elements are what acquire the information.
          Channels are like high ways on which information runs. Computers
          compute the information and give you images. We have one of the
          highest element density and number of channels for any region of
          interest to give you unpar- alleled image quality.{" "}
        </p> */}
        <div
          style={{
            backgroundColor: "#f3f2f2",
            padding: "10px 0px",
            marginBottom: "20px"
          }}
        >
          <div class="row justify-content-center">{allpkg}</div>
          {/* <div class="row justify-content-center">
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
         */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(RiskPage);
