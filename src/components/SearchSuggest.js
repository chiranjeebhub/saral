import React, { useState, useEffect, useContext } from "react";
import { SaralContext } from "../Context";
import { Link } from "react-router-dom";

const SearchSuggest = () => {
  const value = useContext(SaralContext);
  const filter = value.filteredTest.slice(0, 10).map(item => {
    return (
      <div className="col-sm-8" style={{ marginTop: "10px" }}>
        <div className="searchSuggest">
          <Link
            to={`/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>
              {item.name}
              <span style={{ float: "right", fontWeight: "bold" }}>
                ₹&nbsp;{item.price}/-
              </span>
            </span>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div>
      <p>{filter}</p>
      <Link to="/packages">
        <p
          style={{
            paddingLeft: "20px",
            color: "#33c9da",
            fontWeight: "bold"
          }}
        >
          View All Tests >>
        </p>
      </Link>
    </div>
  );
};

export default SearchSuggest;
