import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SaralContext } from "../Context";
import firebase from "firebase";

const Signup = () => {
  const value = useContext(SaralContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = e => {
    e.preventDefault();
    console.log("Signup is being handled");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        // get user data from the auth trigger
        const userUid = user.uid; // The UID of the user.
        const email = user.email; // The email of the user.
        const displayName = user.displayName; // The display name of the user.

        // set account  doc
        const account = {
          useruid: userUid,
          calendarEvents: []
        };
        firebase
          .firestore()
          .collection("accounts")
          .doc(userUid)
          .set(account);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container">
        <div className="row" style={{ height: "100vh", padding: "50px" }}>
          <div className="col">
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
            <br />
            <small>
              Already a member? <Link to="/login">Login here</Link>
            </small>
          </div>
          <div className="col">
            <img src={require("../img/slide_download.png")} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
