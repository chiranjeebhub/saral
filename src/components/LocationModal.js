import React, { useContext } from "react";
import { SaralContext } from "../Context";

const LocationModal = () => {
  const value = useContext(SaralContext);
  return (
    <div
      class="modal fade"
      id="locationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="locationModal"
      aria-hidden="true"
      style={{ zIndex: "99999" }}
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Choose your Location
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
            <div className="row">
              <div className="col">
                <button
                  onClick={() => value.setLocation("Delhi")}
                  class="btn btn-warning btn-block"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Delhi
                </button>
              </div>
              <div className="col">
                <button
                  onClick={() => value.setLocation("Noida")}
                  class="btn btn-warning btn-block"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Noida
                </button>
              </div>
            </div>
          </div>
          {/* <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-block">
                Save changes
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
