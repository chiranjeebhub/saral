import React from "react";

const NavMobile = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light card shadow"
      style={{ zIndex: "9" }}
    >
      <div className="container">
        <div style={{ marginTop: "-12px", border: "none" }}>
          <div class="card-body" style={{ padding: "1rem" }}>
            <a class="navbar-brand" href="#">
              <img
                src={require("../img/logo.png")}
                width="150"
                height="42"
                alt=""
              />
            </a>
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
                style={{ fontSize: "13.5px", justifyContent: "center" }}
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Health Deals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Labs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Blogs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Login/Sign Up
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Gurgaon
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      999-888-000-5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
