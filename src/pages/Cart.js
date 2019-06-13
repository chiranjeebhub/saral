import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Background from "../img/faq_bg.jpg";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { SaralContext } from "../Context";
import LocationModal from "../components/LocationModal";

const Cart = () => {
  const value = useContext(SaralContext);
  const [price, setPrice] = useState([]);
  const [itemCat, setItemCat] = useState([]);
  const singleItem = value.cart.map(item => {
    return (
      <CartItem name={item.name} id={item.id} price={item.price} item={item} />
    );
  });
  const loc = () => {
    if (value.cart.filter(item => item.catagories[0].id === 32)) {
      console.log("lab exists");
    } else {
      console.log("no lab");
    }
  };
  const handlePaymentGateway = () => {
    if (value.location === "Delhi") {
      value.cart.map(item => {
        setPrice(item.price);
      });

      const keyPrice = Math.max.apply(
        Math,
        value.cart.map(function(o) {
          return o.price;
        })
      );

      const keyItem = value.cart.find(function(o) {
        return o.price == keyPrice;
      });

      console.log(keyItem);
      console.log(
        "Open respective Delhi gateway as per the modality of above object"
      );
    } else if (value.location === "Noida") {
      console.log("Open Noida Gateway");
    }
    //paymnet gateway logic
  };
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

            {value.total ? (
              <div>
                <div className="cart-box">
                  {singleItem}
                  <div
                    className="row"
                    style={{ padding: "0px 30px", paddingBottom: "20px" }}
                  >
                    <div className="col">
                      <b>Total Amount:</b>
                    </div>
                    <div
                      className="col"
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    >
                      Rs. {value.total}/-
                    </div>
                  </div>
                  <div className="row" style={{ padding: "0px 30px" }}>
                    {value.location ? (
                      <div
                        className="alert alert-success btn-block"
                        style={{ textAlign: "center" }}
                      >
                        Your Location is: {value.location}
                      </div>
                    ) : (
                      <div
                        className="alert alert-danger btn-block"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          type="button"
                          class="btn but-res"
                          data-toggle="modal"
                          data-target="#locationModal"
                        >
                          Choose Location
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  className={
                    value.location
                      ? "btn btn-warning btn-block"
                      : "btn btn-block disabled"
                  }
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "10px"
                  }}
                  onClick={handlePaymentGateway}
                >
                  Checkout
                </button>
              </div>
            ) : (
              <div>
                <div
                  className="alert alert-danger"
                  role="alert"
                  style={{ textAlign: "center" }}
                >
                  The cart is empty. Please add an item.
                </div>
                <Link to="/packages" className="btn btn-secondary btn-block">
                  See all Packages
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
