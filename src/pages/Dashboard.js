import React from "react";
import Nav from "../components/Nav";
import firebase from "firebase";
import { withRouter } from "react-router-dom";

const Dashboard = props => {
  const handleSignout = () => {
    firebase.auth().signOut();
    // signed out
    localStorage.setItem("token", "");
    props.history.push("/login");
    console.log("you have been signed out");
  };
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <h1>Dashboard Page</h1>
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default withRouter(Dashboard);
