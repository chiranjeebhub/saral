import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SaralContext } from "../Context";
import LocationModal from "./LocationModal";

const Nav = () => {
  const value = useContext(SaralContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" style={{ zIndex: "9" }}>
        <div className="container">
          <div
            class="card shadow "
            style={{ marginTop: "-12px", border: "none" }}
          >
            <div class="card-body" style={{ padding: "1rem" }}>
              <Link to="/" class="navbar-brand">
                <img
                  src={require("../img/logo.png")}
                  width="150"
                  height="42"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              {/* <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li> */}
            </ul>
            <div class="div-inline my-2 my-lg-0">
              <div className="navMenu">
                <div
                  className="row"
                  style={{ fontSize: "13.5px", justifyContent: "flex-end" }}
                >
                  <ul class="navbar-nav" style={{ justifyContent: "right" }}>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Login/Sign Up
                      </a>
                    </li>
                    <li class="nav-item">
                      {/* <a
                      class="nav-link"
                      href="#callbackModal"
                      data-toggle="modal"
                    >
                      Choose Location
                    </a> */}
                      <button
                        type="button"
                        class="btn but-res"
                        data-toggle="modal"
                        data-target="#locationModal"
                      >
                        {value.location ? value.location : "Choose Location"}
                      </button>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        999-888-000-5
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "-5px", fontSize: "17.5px" }}
                >
                  {/* <p>Health Deals</p> |<p>Labs</p> |<p>Blog</p> |<p>Contact Us</p> */}
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                      <Link to="/about" class="nav-link">
                        About<span className="menu-separator">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/experts" class="nav-link">
                        Our Experts<span className="menu-separator">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/centers" class="nav-link">
                        Our Centers<span className="menu-separator">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/career" class="nav-link">
                        Career<span className="menu-separator">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/gallery" class="nav-link">
                        Gallery<span className="menu-separator">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" class="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/cart" class="nav-link">
                        <i class="fas fa-shopping-cart" />
                        <sup>
                          <span
                            className={
                              value.cartCount
                                ? "badge badge-dark"
                                : "badge badge-dark disabled"
                            }
                          >
                            {value.cartCount}
                          </span>
                        </sup>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <LocationModal />
    </div>
  );
};

export default Nav;
