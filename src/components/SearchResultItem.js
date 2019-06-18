import React, { useState, useContext } from "react";
import { SaralContext } from "../Context";
import CallBackModal from "./CallBackModal";

const SearchResultItem = ({ name, price, item }) => {
  const value = useContext(SaralContext);
  // const [added, setAdded] = useState(Boolean);
  return (
    <React.Fragment>
      <div class="col-3 result-box">
        <p className="res-title">{name}</p>
        <p style={{ fontSize: "12px" }}>
          Prior Appointment: Preferable
          <br /> Report Available in: 1-2 Days
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span>Diagnostics Price:</span>
          <span className="res-title"> Rs. {price}/-</span>
        </p>
        <button
          type="button"
          class="btn but-res-outline"
          onClick={() => value.addtoCart(item)}
        >
          {/* {added ? "Visit Cart" : "BOOK NOW"} */}
          BOOK NOW
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          class="btn but-res"
          data-toggle="modal"
          data-target="#callbackModal"
        >
          GET A CALL
        </button>
      </div>
      <CallBackModal />
    </React.Fragment>
  );
};

export default SearchResultItem;
