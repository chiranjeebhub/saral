import React from "react";

const SearchResultItem = ({ name, price }) => {
  return (
    <React.Fragment>
      <div class="col-3 result-box">
        <p className="res-title">{name}</p>
        <p style={{ fontSize: "12px" }}>
          Prior Appointment: Preferable
          <br /> Report Available in: 1-2 Days
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span>Diagnostics Price:</span>
          <span className="res-title"> {price}</span>
        </p>
        <button type="button" class="btn but-res-outline">
          BOOK NOW
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          class="btn but-res"
          data-toggle="modal"
          data-target="#callbackModal"
        >
          GET A CALL
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="callbackModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="callbackModal"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Free call back from our Health Advisor
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control"
                    id="Phone Number"
                    placeholder="Enter your Phone Number"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-warning btn-block"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Submit
                </button>
              </form>
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-block">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchResultItem;
