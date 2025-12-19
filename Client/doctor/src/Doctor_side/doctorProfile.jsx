import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./sidebar";

function DoctorProfile() {
  const [doctor, setDoctor] = useState({});
  const [file, setFile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const doctorid = sessionStorage.getItem("doctorid");

    axios
      .get(`http://localhost:5000/api/doctorprofile/doctor?doctorid=${doctorid}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.error("Error fetching doctor:", err);
      });
  }, []);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", doctor._id);

    if (file) {
      formData.append("uploaded_file", file);
    }

    for (const key in doctor) {
      if (key !== "image" && key !== "_id") {
        formData.append(key, doctor[key]);
      }
    }

    axios
      .post("http://localhost:5000/api/doctorprofile/doctor/update", formData)
      .then((res) => {
        alert("Doctor Profile Updated Successfully");
        setDoctor(res.data.doctor);
        setIsEdit(false);
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update profile");
      });
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <section className="container-fluid p-4" style={{ marginLeft: "260px" }}>
        <div className="row justify-content-center">
          <div
            className="col-md-8 p-4"
            style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
          >
            <h2 className="text-center text-primary mb-4">Doctor Profile</h2>

            <div className="text-center mb-4">
              <img
                src={doctor.image || "/default-profile.png"}
                alt="Doctor"
                className="rounded-circle"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label>Doctor Name</label>
                <input
                  type="text"
                  name="doctorname"
                  value={doctor.doctorname || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={doctor.email || ""}
                  className="form-control"
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label>Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  value={doctor.specialty || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>

              <div className="mb-3">
                <label>Fees</label>
                <input
                  type="number"
                  name="fees"
                  value={doctor.fees || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>

              <div className="mb-3">
                <label>Experience (Years)</label>
                <input
                  type="text"
                  name="experience"
                  value={doctor.experience || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>

              <div className="mb-3">
                <label>Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={doctor.degree || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>

              <div className="mb-3">
                <label>Details</label>
                <textarea
                  name="details"
                  value={doctor.details || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>

              {isEdit && (
                <div className="mb-3">
                  <label>Update Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              )}

              <div className="text-center">
                {isEdit ? (
                  <div className="mb-3">
                    <button type="submit" className="btn btn-success mr-2">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setIsEdit(false)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => setIsEdit(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorProfile;
