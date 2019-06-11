import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = () => {
  return (
    <div>
      <div class="collection" style={{ zIndex: "999" }}>
        <div className="">
          <div class="card-body" style={{ padding: "0px" }}>
            <div class="row">
              <div class="col-sm-3 collection-col">
                <i class="far fa-hourglass" style={{ fontSize: "25px" }} />
                <br />
                <span>Convenient & Time Saving</span>
              </div>
              <div class="col-sm-3 collection-col">
                <i class="fas fa-home" style={{ fontSize: "25px" }} />
                <br />
                <span>Home Collection & Cancellation</span>
              </div>
              <div class="col-sm-3 collection-col">
                <i
                  class="fas fa-file-prescription"
                  style={{ fontSize: "25px" }}
                />
                {/* <i class="far fa-hourglass" /> */}
                <br />

                <span>Online Access to Reports</span>
              </div>
              <div
                class="col-sm-3 collection-col"
                style={{ borderWidth: "0px 0px 0px 0px" }}
              >
                <i class="far fa-calendar-alt" style={{ fontSize: "25px" }} />
                {/* <i class="far fa-hourglass" style={{ fontSize: "25px" }} /> */}
                <br />
                <Link to="/appointment">
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
