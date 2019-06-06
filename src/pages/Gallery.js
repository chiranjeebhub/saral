import React from "react";
import Nav from "../components/Nav";
import Background from "../img/gallery_bg.jpg";
import GallerySection from "../components/GallerySection";

const Gallery = () => {
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
            <div
              className="col-5"
              style={{ marginTop: "35vh", color: "#33c9da" }}
            >
              <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>GALLERY</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ul
          class="nav nav-pills justify-content-center"
          id="pills-tab"
          role="tablist"
          style={{ margin: "20px 0px" }}
        >
          <li class="nav-item" style={{ padding: "0px 20px" }}>
            <a
              class="nav-link active non-active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#all"
              role="tab"
              style={{
                width: "200px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              All
            </a>
          </li>
          <li class="nav-item" style={{ padding: "0px 20px" }}>
            <a
              class="nav-link non-active"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#digital"
              role="tab"
              style={{
                width: "200px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Digital Media
            </a>
          </li>
          <li class="nav-item" style={{ padding: "0px 20px" }}>
            <a
              class="nav-link non-active"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#news"
              role="tab"
              style={{
                width: "200px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              News Paper
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <GallerySection />
          </div>
          <div
            class="tab-pane fade"
            id="digital"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <GallerySection />
          </div>
          <div
            class="tab-pane fade"
            id="news"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <GallerySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
