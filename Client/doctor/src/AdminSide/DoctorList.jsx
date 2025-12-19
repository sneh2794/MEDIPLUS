import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

function DoctorList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchDoctors = () => {
    fetch("http://localhost:5000/api/doctor/list")
      .then((res) => res.json())
      .then((doctors) => setData(doctors));
  };

  const deleteDoctor = (id) => {
    fetch(`http://localhost:5000/api/doctor/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((updatedData) => {
        setData(updatedData);
        alert("Doctor removed successfully");
      });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <AdminSidebar />
      <div className="container-fluid p-3 w-75" style={{ marginLeft: "260px" }}>
        <div className="d-flex justify-content-between mt-2">
          <h2 className="text-center text-primary ml-3">All Doctors</h2>
        </div>

        <div id="results" className="mt-4 row">
          {data.map((doctor) => (
            <div key={doctor._id} className="col-md-6">
              <div className="card d-flex flex-row my-3 shadow-sm" style={{ height: "315px" }}>
                <img src={doctor.image} alt={doctor.doctorname} className="img-fluid col-md-6" />
                <div className="ms-3 my-3">
                  <h5 className="fw-bold my-3">{doctor.doctorname}</h5>
                  <p className="text-primary fw-semibold">{doctor.specialty}</p>
                  <p className="fw-semibold">Experience: {doctor.experience}</p>
                  <p className="fw-semibold">{doctor.degree}</p>
                  <p className="text-muted">{doctor.details}</p>
                  <p className="fw-semibold my-3">Fees: ₹{doctor.fees}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorList;
