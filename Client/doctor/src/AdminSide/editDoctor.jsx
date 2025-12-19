import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    doctorname: "",
    specialty: "",
    experience: "",
    degree: "",
    details: "",
    fees: "",
    image: ""
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctor/list`)
      .then((res) => res.json())
      .then((doctors) => {
        const doctor = doctors.find((d) => d._id === id);
        if (doctor) {
          setForm(doctor);
        }
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/doctor/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Doctor updated successfully");
        navigate("/admin/doctors");
      });
  };

  return (
    <div>
      <AdminSidebar />
      <div className="container" style={{ marginLeft: "260px", paddingTop: "20px" }}>
        <h2 className="mb-4 text-primary">Edit Doctor</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="doctorname"
            value={form.doctorname}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Doctor Name"
            required
          />
          <input
            type="text"
            name="specialty"
            value={form.specialty}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Specialty"
            required
          />
          <input
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Experience"
            required
          />
          <input
            type="text"
            name="degree"
            value={form.degree}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Degree"
            required
          />
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Details"
            required
          ></textarea>
          <input
            type="number"
            name="fees"
            value={form.fees}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Fees"
            required
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Image URL"
            required
          />
          <button type="submit" className="btn btn-success">Update Doctor</button>
        </form>
      </div>
    </div>
  );
}

export default EditDoctor;
