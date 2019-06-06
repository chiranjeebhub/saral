import React from "react";

const GallerySection = () => {
  return (
    <div className="container">
      <div className="gallery-section">
        <div class="row">
          <div class="col">
            <img src={require("../img/placeholder.jpg")} alt="" />
            <div className="similar-title">Lorem Ipsum is simply dummy</div>
          </div>
          <div class="col">
            <img src={require("../img/placeholder.jpg")} alt="" />
            <div className="similar-title">Lorem Ipsum is simply dummy</div>
          </div>
          <div class="col">
            <img src={require("../img/placeholder.jpg")} alt="" />
            <div className="similar-title">Lorem Ipsum is simply dummy</div>
          </div>
          <div class="col">
            <img src={require("../img/placeholder.jpg")} alt="" />
            <div className="similar-title">Lorem Ipsum is simply dummy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GallerySection;
