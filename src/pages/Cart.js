import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Background from "../img/faq_bg.jpg";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { SaralContext } from "../Context";

const Cart = () => {
  const value = useContext(SaralContext);
  const singleItem = value.cart.map(item => {
    return (
      <CartItem name={item.name} id={item.id} price={item.price} item={item} />
    );
  });
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col" style={{ padding: "30px" }}>
            <h4 style={{ color: "#33c9da" }}>Your Details</h4>
            <div className="cart-box">
              <div className="row">
                <div className="col-10" style={{ padding: "30px" }}>
                  <h6>Your Name</h6>
                  <p>
                    8017****12
                    <br />
                    emailid@gmail.com
                    <br />
                    Address 2nd cross, 3rd mainroad, Bangaluru, Karnataka-
                    700032
                  </p>
                </div>
                <div
                  className="col-2"
                  style={{
                    backgroundColor: "#33c9da",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  Edit
                </div>
              </div>
            </div>
            <div className="btn cart-box" style={{ marginTop: "30px" }}>
              <Link to="/">
                <i class="fas fa-arrow-left" />
                &nbsp; Add Test/Packages
              </Link>
            </div>
          </div>
          <div className="col" style={{ padding: "30px" }}>
            <h4 style={{ color: "#33c9da" }}>Your Cart</h4>
            <div className="cart-box">{singleItem}</div>
            <div className="cart-box">
              <div className="row">
                <div className="col">
                  <b>Total Amount:</b>
                </div>
                <div className="col">{value.total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
