import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import { SaralContext } from "../Context";

const SinglePackage = props => {
  const value = useContext(SaralContext);
  const [testDetails, setTestDetails] = useState({});
  const [testImg, setTestImg] = useState("");
  const id = props.match.params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(
      `https://saraldiagnostics.com/wp-json/wc/v3/products/${id}?consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
    ).then(res => {
      setTestDetails(res.data);
      setTestImg(res.data.images[0].src);
      console.log(res);
    });
  }, [id]);
  const eightPkg = value.pkg.slice(1);
  const allpkg = eightPkg.map((item, index) => {
    return (
      <div class="col" style={{ margin: "10px" }}>
        <img src={require("../img/placeholder.jpg")} alt="" />
        <div className="similar-title">
          <Link
            to={`/${item.id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            {item.name}
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div className="container">
        <div className="single-title">
          <div
            class="row"
            style={{ padding: "15px 30px", color: "white", fontWeight: "bold" }}
          >
            <div class="col-sm-6">{testDetails.name}</div>
            <div class="col-sm-6" style={{ textAlign: "right" }}>
              Price: ₹{testDetails.price}
            </div>
          </div>
        </div>
        <div className="single-details-box">
          <div class="row">
            <div
              class="col-sm-6"
              style={{
                padding: "0px 40px",
                borderRight: "2px dashed"
              }}
            >
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Nunc dictum iaculis sapien id sollicitudin.
                <br />
                Donec fermentum porttitor nisl, id fermentum dui sollicitudin
                sed.
              </p> */}

              {/* <div dangerouslySetInnerHTML={testDetails.description} />
              <div dangerouslySetInnerHTML={{ __html: "<h1>Hi there!</h1>" }} /> */}
              <div
                dangerouslySetInnerHTML={{ __html: testDetails.description }}
              />
            </div>
            <div class="col-sm-6" style={{ padding: "0px 60px" }}>
              <img src={testImg} alt="" width="100%" height="30%" />

              <p>
                <br />
                No Special Requirements, If the patient is not cooperative then
                fasting is required fo 5-6 hours
              </p>
              <div style={{ textAlign: "center", margin: "20px 0px" }}>
                <button type="button" class="btn but-single-book">
                  Book Now
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" class="btn but-single-call">
                  Get Call Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "20px 0px" }}>
          <button type="button" class="btn but-single-book">
            Book Now
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn but-single-call">
            Get Call Back
          </button>
        </div>

        <h1
          style={{ color: "#33c9da", textAlign: "center", margin: "30px 0px" }}
        >
          SIMILLAR PACKAGES
        </h1>
        <div className="similar-box" style={{ textAlign: "center" }}>
          <div class="row justify-content-center">
            {allpkg}
            {/* <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div>
            <div class="col">
              <img src={require("../img/placeholder.jpg")} alt="" />
              <div className="similar-title">Premarital Package</div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(SinglePackage);
