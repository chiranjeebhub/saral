import React, { useContext } from "react";
import { SaralContext } from "../Context";

const CartItem = ({ name, id, price, item }) => {
  const value = useContext(SaralContext);
  return (
    <div className="row" style={{ padding: "10px 30px" }}>
      <div
        className="col"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <span style={{ fontWeight: "bold" }}>{name}</span>

        <button
          className="btn"
          style={{ textAlign: "left", padding: "0px" }}
          onClick={() => value.removeFromCart(item)}
        >
          <span style={{ color: "red" }}>
            <i class="far fa-trash-alt" />
            <small> Remove</small>
          </span>
        </button>
      </div>
      <div
        className="col"
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontWeight: "bold"
        }}
      >
        Rs. {price}/-
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
