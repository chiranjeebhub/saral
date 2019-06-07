import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const BookAppointment = () => {
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
          <form>
            <div class="form-row">
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="fName"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="lName"
                  placeholder="Last Name"
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
                />
              </div>
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="number"
                  class="form-control"
                  id="number"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            <div class="form-group input-group-lg">
              <select id="inputState" class="form-control">
                <option selected>Test you want to do...</option>
                <option>Test 1</option>
                <option>Test 2</option>
                <option>Test 3</option>
              </select>
            </div>
            <div class="form-group input-group-lg">
              <textarea
                class="form-control"
                id="address"
                rows="3"
                placeholder="Enter your Address"
              />
            </div>
            <div class="form-row">
              <div class="form-group input-group-lg col-md-6">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Select Date"
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
                  class="btn btn-lg"
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
