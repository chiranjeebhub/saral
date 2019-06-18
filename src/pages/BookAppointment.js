import React, { useEffect, useState, useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SaralContext } from "../Context";
import Axios from "axios";

const BookAppointment = () => {
  const value = useContext(SaralContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [test, setTest] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const sendBookingSms = () => {
    // e.preventDefault();
    const msg = `Appointment Booked by ${fname}, please call on this number: ${phone} - Saral Diagnostics`;
    Axios.post(
      `http://103.255.217.28:15181/BULK_API/SendMessage?loginID=saral_htuser&password=saral@123&mobile=8952009272&text=${msg}&senderid=DIGITL&route_id=TRANSACTIONAL%20SMS&Unicode=0&camp_name=saral_user`
    ).then(console.log("sms sent to admin"));
    Axios.post(
      `http://103.255.217.28:15181/BULK_API/SendMessage?loginID=saral_htuser&password=saral@123&mobile=${phone}&text=Thanks%20for%20Booking.%20We%20will%20get%20back%20to%20you%20soon.&senderid=DIGITL&route_id=TRANSACTIONAL%20SMS&Unicode=0&camp_name=saral_user`
    ).then(console.log("sms sent to user"));
  };

  return (
    <div>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>

      <div className="container">
        <h1
          style={{
            textAlign: "center",
            color: "#33c9da",
            fontWeight: "bold",
            marginTop: "20px"
          }}
        >
          Book Appointment
        </h1>
        <div
          style={{
            backgroundColor: "#f3f2f2",
            marginTop: "20px",
            padding: "50px"
          }}
        >
          <form onSubmit={sendBookingSms}>
            <div class="form-row">
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="fName"
                  placeholder="First Name"
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                />
              </div>
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="lName"
                  placeholder="Last Name"
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="tel"
                  class="form-control"
                  id="number"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group input-group-lg">
              <input
                type="text"
                class="form-control"
                id="test"
                placeholder="Which test you are booking for ?"
                value={test}
                onChange={e => setTest(e.target.value)}
              />
            </div>
            <div class="form-group input-group-lg">
              <textarea
                class="form-control"
                id="address"
                rows="3"
                placeholder="Enter your Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div class="form-row">
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Select Date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
                {/* <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">
                    <i class="fas fa-calendar-alt" />
                  </span>
                </div> */}
              </div>
              <div class="form-group input-group-lg col-md-4">
                <button
                  type="submit"
                  className={
                    phone === "" || test == "" || date == ""
                      ? "btn btn-lg btn-warning disabled"
                      : "btn btn-lg btn-warning"
                  }
                  style={{ backgroundColor: "#f9aa00" }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default BookAppointment;
