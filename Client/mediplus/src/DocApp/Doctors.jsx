import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const FindDoctor = () => {
  const [specialty, setSpecialty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  function doctorShow() {
    fetch("http://localhost:5000/api/doctor/list")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
        
      });
  }

  useEffect(() => {
    doctorShow();
  }, []); 

  // **Filtering Doctors by Specialty & Search Term**
  const filteredDoctors = data.filter((doctor) => 
    (specialty === "All" || doctor.specialty === specialty) &&
    doctor.doctorname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Expert Doctors</h2>
                <ul className="bread-list">
                  <li><a href="index.html">Home</a></li>
                  <li><i className="icofont-simple-right" /></li>
                  <li className="active">Doctors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4">Find a Doctor</h2>
        <div className="mb-3 btn-group">
          {["All","General physician", "Cardiologist", "Dermatologist", "Neurologist", "Orthopedic"].map((spec) => (
            <button
              key={spec}
              className={`btn ${specialty === spec ? "btn-primary" : "btn-outline-primary"} ml-3`}
              onClick={() => setSpecialty(spec)}
              style={{ borderRadius: "5px" }}
            >
              {spec}
            </button>
          ))}
        </div>

        <div className="my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h3 className="mt-4">{specialty === "All" ? "All Doctors" : specialty}</h3>

        <div id="results" className="mt-4 row ">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="col-md-6">
                <div className="card d-flex flex-row my-3 shadow-sm " style={{height:"315px"}}>
                  <img src={doctor.image} alt={doctor.doctorname} className="img-fluid col-md-6 " height="120px" />
                  <div className="ms-3 my-3">
                    <h5 className="fw-bold my-3">{doctor.doctorname}</h5>
                    <p className="text-primary fw-semibold">{doctor.specialty}</p>
                    
                    <p className=" fw-semibold">Experience : {doctor.experience}</p>
                    <p className=" fw-semibold">{doctor.degree}</p>

                    <p className="text-muted ">{doctor.details}</p>
                    <p className=" fw-semibold my-3">Fees : {doctor.fees}</p>
                    {/* <div className="d-flex my-3">
                      <a href="#" className="text-black fs-4 mr-2"><i className="fab fa-facebook" /></a>
                      <a href="#" className="text-black fs-4 mx-2"><i className="fab fa-twitter" /></a>
                      <a href="#" className="text-black fs-4 mx-2"><i className="fab fa-instagram" /></a>
                    </div> */}
                    <div>
                      <NavLink to="/appointment" className="btn">Book Appointment</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No doctors found for the selected specialty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
