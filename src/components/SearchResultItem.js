import React from "react";

const SearchResultItem = () => {
  return (
    <div class="col result-box">
      <p className="res-title">MRCP +MRI UPPER ABDOMEN</p>
      <p style={{ fontSize: "12px" }}>
        Prior Appointment: Preferable
        <br /> Report Available in: 1-2 Days
      </p>
      <p style={{ fontWeight: "bold" }}>
        <span>Diagnostics Price:</span>
        <span className="res-title"> ₹12,000</span>
      </p>
      <button type="button" class="btn but-res-outline">
        BOOK NOW
      </button>
      &nbsp;&nbsp;&nbsp;
      <button type="button" class="btn but-res">
        GET A CALL
      </button>
    </div>
  );
};

export default SearchResultItem;
