import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

function AddDoctor() {
  const [doctorname, setDoctorname] = useState("");
  const [details, setDetails] = useState("");
  const [specialty, setSpecialty] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fees, setFees] = useState("");
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const doctor = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("doctorname", doctorname);
    formData.append("specialty", specialty);
    formData.append("details", details);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fees", fees);
    formData.append("experience", experience);
    formData.append("degree", degree);

    axios
      .post("http://localhost:5000/api/doctors/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        alert("Doctor added successfully!");
      })
      .catch((err) => {
        console.error("Doctor add error:", err);
        alert("Error adding doctor");
      });
  };

  return (
    <div style={{ backgroundColor: "#f4f7fc" }}>
      <AdminSidebar />
      <div className="mt-4">
        <div className="d-flex justify-content-between" style={{ marginLeft: "270px" }}>
          <h2 className="text-center text-primary">Add Doctor</h2>
          
        </div>

        <div className="container mt-4 w-75 pt-3 shadow" style={{ marginLeft: "270px", backgroundColor: "white", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}>
          <form onSubmit={doctor} encType="multipart/form-data">
            <div className="mb-3">
              <label className="form-label">Upload doctor picture</label><br />
              <input type="file" className="" onChange={handleChange} />
            </div>

            <div className="mb-3 row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Your name</label>
                  <input type="text" className="form-control" onChange={(e) => setDoctorname(e.target.value)} placeholder="Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Doctor Email</label>
                  <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Set Password</label>
                  <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Experience</label><br />
                  <select className="form-select" value={experience} onChange={(e) => setExperience(e.target.value)}>
                    <option value="">Select Experience</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Fees</label>
                  <input type="text" className="form-control" onChange={(e) => setFees(e.target.value)} placeholder="Doctor fees" />
                </div>
              </div>

              <div className="col">
                <div className="mb-3 mt-2">
                  <label className="form-label">Speciality</label><br />
                  <select className="form-select" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                    <option value="">Select Specialty</option>
                    <option value="General physician">General physician</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Orthopedic">Orthopedic</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Degree</label>
                  <input type="text" className="form-control" onChange={(e) => setDegree(e.target.value)} placeholder="Degree" />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">About Doctor</label>
              <textarea className="form-control" rows="3" onChange={(e) => setDetails(e.target.value)} placeholder="Write about doctor"></textarea>
            </div>

            <div className="text-center mb-3">
              <button type="submit" className="btn btn-primary">ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
