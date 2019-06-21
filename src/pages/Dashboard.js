import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import firebase from "../firebase";
import { withRouter, Link } from "react-router-dom";
import { SaralContext } from "../Context";

import Footer from "../components/Footer";

const Dashboard = props => {
  const value = useContext(SaralContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token !== "") {
    //   props.history.push("/dashboard");
    // } else {

    // }
    firebase.auth().onAuthStateChanged(user => {
      if (user.uid === "") {
        props.history.push("/login");
      } else {
        var userRef = firebase
          .firestore()
          .collection("user")
          .doc(user.uid);
        userRef
          .get()
          .then(function(doc) {
            if (doc.exists) {
              console.log("Users email is:", doc.data().email);
              setName(doc.data().name);
              setEmail(doc.data().email);
              setPhone(doc.data().phone);
              setPhone(doc.data().address);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      }
    });
  }, []);

  const handleUpdate = e => {
    e.preventDefault();
    firebase.auth().onAuthStateChanged(user => {
      if (user.uid === "") {
        props.history.push("/login");
      } else {
        //update record logic here
        console.log("record updated");
      }
    });
  };

  const handleSignout = () => {
    firebase.auth().signOut();
    // signed out
    localStorage.setItem("token", "");
    props.history.push("/login");
    console.log("you have been signed out");
  };

  const showhideform = () => {};

  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <h1>Dashboard Page</h1>
      <button onClick={handleSignout}>Signout</button>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col" style={{ padding: "30px" }}>
            <h4 style={{ color: "#33c9da" }}>Your Details</h4>
            <div className="cart-box" style={{ padding: "20px" }}>
              <form onSubmit={handleUpdate}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="address"
                    rows="3"
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-warning btn-block"
                  style={{ color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
            {/* <div className="btn cart-box" style={{ marginTop: "30px" }}>
              <Link to="/">
                <i class="fas fa-arrow-left" />
                &nbsp; Add Test/Packages
              </Link>
            </div> */}
          </div>
          <div className="col" style={{ padding: "30px" }}>
            <h4 style={{ color: "#33c9da" }}>Your Cart</h4>

            {value.total ? (
              <div>
                <div className="cart-box">
                  {/* {singleItem} */}
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
                  // onClick={handlePaymentGateway}
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

export default withRouter(Dashboard);
