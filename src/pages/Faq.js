import React from "react";
import Nav from "../components/Nav";
import Background from "../img/faq_bg.jpg";
import Footer from "../components/Footer";

const Faq = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "90vh"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ marginTop: "30vh" }}>
              <p style={{ lineHeight: "2em" }}>
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "#33c9da"
                  }}
                >
                  FREQUENTLY ASKED QUESTIONS ?
                </span>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="faq-box">
          <div className="row">
            <div className="col">
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#available"
                    role="button"
                  >
                    What all tests are available at Saral?
                  </a>
                </p>
                <div class="collapse" id="available">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#government"
                    role="button"
                  >
                    Is Saral on government panels?
                  </a>
                </p>
                <div class="collapse" id="government">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#ambulance"
                    role="button"
                  >
                    Is ambulance facility available?
                  </a>
                </p>
                <div class="collapse" id="ambulance">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#mri"
                    role="button"
                  >
                    Is MRI painful?
                  </a>
                </p>
                <div class="collapse" id="mri">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#timings"
                    role="button"
                  >
                    What are your timings?
                  </a>
                </p>
                <div class="collapse" id="timings">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#home"
                    role="button"
                  >
                    Is home collection facility of sample for lab tests
                    available?
                  </a>
                </p>
                <div class="collapse" id="home">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#payment"
                    role="button"
                  >
                    What are the payment options available?
                  </a>
                </p>
                <div class="collapse" id="payment">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
              <div className="faq-single">
                <p>
                  <a
                    class="btn btn-faq btn-block"
                    data-toggle="collapse"
                    href="#harmful"
                    role="button"
                  >
                    Is MRI harmful?
                  </a>
                </p>
                <div class="collapse" id="harmful">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-single">
            <p>
              <button
                class="btn btn-faq btn-block"
                data-toggle="collapse"
                data-target="#question"
                aria-expanded="true"
              >
                Any other question / enquiry
              </button>
            </p>
            <div class="collapse" id="question">
              <div class="card card-body">
                <p style={{ textAlign: "center" }}>
                  Just fill the form. We will call you back.
                </p>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="number"
                      placeholder="Mobile No."
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-warning btn-block"
                    style={{ color: "white" }}
                  >
                    Get a Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
