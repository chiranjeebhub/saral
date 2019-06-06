import React from "react";
import Nav from "../components/Nav";
import Background from "../img/about_us.jpg";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f6f5f5" }}>
      <div style={{ backgroundColor: "#33c9da" }}>
        <Nav />
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "400px"
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ marginTop: "20vh", color: "white" }}
            >
              <h3>
                WHO ARE WE & <br />
                WHAT WE DO ?
              </h3>
              <p>
                SARAL was set up in 1984 under professional guidance of Dr. Ravi
                Kumar Gupta MD (Radio diagnosis) from Delhi University with a
                vision to serve the people of Delhi NCR by providing latest
                medical investigation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3
          style={{ color: "#33c9da", textAlign: "center", padding: "10px 0px" }}
        >
          Brief History:
        </h3>
        <div className="about-box">
          <div class="row">
            <div class="col-sm-4">
              <img className="ravi" src={require("../img/ravi.jpg")} alt="" />
            </div>
            <div class="col-sm-8">
              <p>
                He is always ready to install latest and most advanced
                technology equipments required for lab as well as imaging
                facilities. He also keep pace with changing need of investiga-
                tions in field of medical sciences hence upgrading the
                facilities in order to provide the best available medical
                investigations from time to time.
              </p>
              <p>
                This is his vision and commitment to provide the best that SARAL
                which started with only a lab & X-Ray deptt only, is now grown
                up to provide widest range of clinical and imaging
                investigations under one roof. Today SARAL has most advanced
                equipments like High end 1.5T MRI systems, 1163 Slice Spiral CT
                Scanner, Dual head gamma camera, 4D Ultra- sound machines with
                elastograpgy, Digital & computerized X-Ray, Bone Densitometry (
                DEXA ), Electro Physiological Studies, Mammography, OPG, Fully
                automated clinical lab, Holter, PFT, ECHO, Doppler, Sleep Study,
                Uroflowmetry. Saral is first multi modality dia-
              </p>
            </div>
          </div>
          <p>
            gnostics centre in the whole country to have received the most
            prestigious NABH – MIS Accreditation for Imaging services from
            Quality Council of India. it is the highest accre- ditation to
            ensure the quality of a health care provider in imaging
            sciences.This is due to his commitment towards quality that made
            SARAL the first ISO 2000 Certified center in Delhi and first NABL
            Accredited Lab (Highest accreditation for labs in India) in North
            West Delhi.
          </p>

          <p>
            Dr. Ravi Gupta is absolutely clear in his vision to provide the best
            and accurate diagnosis so he has made a team of most experienced and
            committed consultants to work with him on these most advanced
            equipments to generate the best possible results.
          </p>

          <p>
            He strongly believes that advanced technology is only helpful if you
            have the right people to work on right machines, (He always says
            that an excellent pilot can be a bad car driver or a good car driver
            may never fly a plane).
          </p>

          <p>
            This is efforts of Dr. Gupta that SARAL is known for its accurate
            diagnosis and reporting not only among Doctors and Clinicians in
            Delhi but in its surrounding cities also.
          </p>

          <p>
            This is Dr. Gupta’s commitment for providing the best that he has
            tie up with organizations like AIIMS, Sanker Netralaya, Biorad
            (USA), CMC(Vellore), etc in order to get external quality control
            check up. Third party check up and certification of these reputed
            organizations keeps SARAL staff on their toes resulting in never
            allow quality to slip.
          </p>
        </div>
        <h3
          style={{ color: "#33c9da", textAlign: "center", padding: "30px 0px" }}
        >
          NUMBERS SPEAK FOR ITSELF
        </h3>

        <div className="about-box1">
          <div class="row">
            <div
              class="col"
              style={{
                paddingRight: "15px",
                textAlign: "center",
                color: "#33c9da",
                padding: "50px 0px"
              }}
            >
              <p style={{ fontSize: "38px", fontWeight: "bold" }}>
                14,790,000 +
              </p>
              <p style={{ fontSize: "13px" }}>TESTS WE HAVE PERFORMED</p>
            </div>
            <div
              class="col"
              style={{
                backgroundColor: "#33c9da",
                paddingRight: "15px",
                textAlign: "center",
                color: "white",
                padding: "50px 0px"
              }}
            >
              <p style={{ fontSize: "38px", fontWeight: "bold" }}>
                14,790,000 +
              </p>
              <p style={{ fontSize: "13px" }}>TESTS WE HAVE PERFORMED</p>
            </div>
          </div>
        </div>
        <div className="about-box" style={{ margin: "40px 0px" }}>
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              <img src={require("../img/placeholder.jpg")} alt="" />
            </div>
            <div className="col">
              <ul>
                <li>All diagnostics facilities under one roof.</li>
                <li>
                  NABL accreditation - Highest accreditation in India for lab
                  services.
                </li>
                <li>
                  Best of machines to do the testing with excellent team of
                  Doctors and technologists to give you an accurate and reliable
                  report.
                </li>
                <li>
                  Experience of 35 Years of running a successful, Quality
                  conscious centre..
                </li>
                <li>Home collection facilities available for LAB-Tests.</li>
                <li>Ambulance pick-up and drop facility.</li>
                <li>Easy approachability and parking facilities.</li>
                <li>24*7 availability of CT & MRI.</li>
                <li>Access of reports online Convenient timings.</li>
              </ul>
            </div>
          </div>
        </div>
        <h3
          style={{ color: "#33c9da", textAlign: "center", padding: "10px 0px" }}
        >
          Our Process
        </h3>
      </div>
    </div>
  );
};

export default About;
