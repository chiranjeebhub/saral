import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import firebase from "firebase";
import { SaralContext } from "../Context";

const Login = props => {
  const value = useContext(SaralContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== "") {
      props.history.push("/dashboard");
    }
  });

  const handleLogin = e => {
    // Axios.post(`https://saraldiagnostics.com/wp-json/jwt-auth/v1/token`).then(
    //   res => {
    //     setUsername(res.user);
    //     setPassword(res.password);
    //   }
    // );

    // console.log("login works");
    // Axios.post(
    //   `https://saraldiagnostics.com/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`
    // ).then(res => {
    //   console.log(res.data.token);
    // });
    // console.log(username, password);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        value.setIsloggedin("true");
        localStorage.setItem("token", "jhvjdqvjwvdjahvdj");
        props.history.push("/dashboard");
        console.log(value.isloggedin);
      })
      .catch(error => {
        setError(error);
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
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Email"
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
              Don't have an account? <Link to="/signup">Signup here</Link>
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

export default withRouter(Login);
