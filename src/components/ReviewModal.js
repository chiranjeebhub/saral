import React, { useState, useContext, useEffect } from "react";
import { SaralContext } from "../Context";
import Axios from "axios";

const ReviewModal = () => {
  const value = useContext(SaralContext);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //   const handleSms = () => {
  //     // e.preventDefault();
  //     const msg = `msg from ${name}, please call on this number: ${number} - Saral Diagnostics`;
  //     Axios.post(
  //       `http://103.255.217.28:15181/BULK_API/SendMessage?loginID=saral_htuser&password=saral@123&mobile=8952009272&text=${msg}&senderid=DIGITL&route_id=TRANSACTIONAL%20SMS&Unicode=0&camp_name=saral_user`
  //     ).then(console.log("sms sent"));
  //     Axios.post(
  //       `http://103.255.217.28:15181/BULK_API/SendMessage?loginID=saral_htuser&password=saral@123&mobile=${number}&text=Thanks%20for%20Booking.%20We%20will%20get%20back%20to%20you%20soon.&senderid=DIGITL&route_id=TRANSACTIONAL%20SMS&Unicode=0&camp_name=saral_user`
  //     ).then(console.log("sms sent to user"));
  //   };

  return (
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
            <form onSubmit={handleSms}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="tel"
                  class="form-control"
                  id="Phone Number"
                  placeholder="Enter your Phone Number"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className={
                  number === "" || name == ""
                    ? "btn btn-warning btn-block disabled"
                    : "btn btn-warning btn-block"
                }
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
  );
};

export default ReviewModal;
