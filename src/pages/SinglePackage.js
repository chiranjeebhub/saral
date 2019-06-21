import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import { SaralContext } from "../Context";
import CallBackModal from "../components/CallBackModal";

const SinglePackage = props => {
  const value = useContext(SaralContext);
  const [testDetails, setTestDetails] = useState({});
  const [cat, setCat] = useState([]);
  const [meta0, setMeta0] = useState("");
  const [meta2, setMeta2] = useState("");
  const [meta4, setMeta4] = useState("");
  const [testImg, setTestImg] = useState("");
  const id = props.match.params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(
      `https://saraldiagnostics.com/wp-json/wc/v3/products/${id}?consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
    ).then(res => {
      setTestDetails(res.data);
      setCat(res.data.categories);
      setMeta0(res.data.meta_data[0]);
      setMeta2(res.data.meta_data[2]);
      setMeta4(res.data.meta_data[4]);
      console.log(res.data);
      setTestImg(res.data.images[0]);
    });
  }, [id]);

  const finalCat = cat.map(item => item.id);

  const conditions = () => {
    if (finalCat == 35) {
      return (
        <div>
          <div className="single-title">
            <div
              class="row"
              style={{
                padding: "15px 30px",
                color: "white",
                fontWeight: "bold"
              }}
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
                <div
                  dangerouslySetInnerHTML={{ __html: testDetails.description }}
                />
              </div>
              <div class="col-sm-6" style={{ padding: "0px 60px" }}>
                <img src={testImg.src} alt="" width="100%" height="30%" />

                <p>
                  <br />
                  No Special Requirements, If the patient is not cooperative
                  then fasting is required fo 5-6 hours
                </p>
                <div style={{ textAlign: "center", margin: "20px 0px" }}>
                  <button
                    type="button"
                    class="btn but-single-book"
                    onClick={() => value.addtoCart(testDetails)}
                  >
                    Book Now
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    class="btn but-single-call"
                    data-toggle="modal"
                    data-target="#callbackModal"
                  >
                    Get Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", margin: "20px 0px" }}>
            <button
              type="button"
              class="btn but-single-book"
              onClick={() => value.addtoCart(testDetails)}
            >
              Book Now
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="button"
              class="btn but-single-call"
              data-toggle="modal"
              data-target="#callbackModal"
            >
              Get Call Back
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="single-title">
            <div
              class="row"
              style={{
                padding: "15px 30px",
                color: "white",
                fontWeight: "bold"
              }}
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
                  borderRight: "2px dashed",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <p>
                  <i class="fa fa-clock" aria-hidden="true" /> &nbsp;Prior
                  Appointment: {meta0.value}
                </p>
                <p>
                  <i class="fa fa-leaf" aria-hidden="true" /> &nbsp;Fasting
                  required: {meta2.value}
                </p>
                <p>
                  <i class="fas fa-file-prescription" aria-hidden="true" />{" "}
                  &nbsp;Report Available in: {meta4.value}
                </p>
                {/* <p>
                  {testDetails.meta_data[0].key}:
                  {testDetails.meta_data[0].value}
                </p> */}
              </div>
              <div
                class="col-sm-6"
                style={{
                  padding: "0px 60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: testDetails.short_description
                  }}
                />
                {/* No Special Requirements, If the patient is not cooperative
                  then fasting is required fo 5-6 hours */}
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", margin: "20px 0px" }}>
            <button
              type="button"
              class="btn but-single-book"
              onClick={() => value.addtoCart(testDetails)}
            >
              Book Now
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="button"
              class="btn but-single-call"
              data-toggle="modal"
              data-target="#callbackModal"
            >
              Get Call Back
            </button>
          </div>
        </div>
      );
    }
  };

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
        {conditions()}
        <h1
          style={{ color: "#33c9da", textAlign: "center", margin: "30px 0px" }}
        >
          SIMILAR PACKAGES
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
      <CallBackModal />
      <Footer />
    </div>
  );
};

export default withRouter(SinglePackage);
