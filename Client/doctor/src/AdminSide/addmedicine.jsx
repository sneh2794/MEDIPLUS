import React, { useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar"; // Assuming you already have this component

function AddMedicine() {
  const [medicinename, setMedicinename] = useState("");
  const [file, setFile] = useState(null);
  const [medicinecategory, setMedicinecategory] = useState("");
  const [medicineprice, setMedicineprice] = useState("");
  const [medicinedescription, setMedicinedescription] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const medicineadd = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a medicine image.");
      return;
    }

    const formData = new FormData();
    formData.append("uploaded_file", file);
    formData.append("medicinename", medicinename);
    formData.append("medicineprice", medicineprice);
    formData.append("medicinetype", medicinecategory);
    formData.append("medicinedetail", medicinedescription);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/medicine/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Medicine Added Successfully!");
      // Reset form
      setMedicinename("");
      setFile(null);
      setMedicinecategory("");
      setMedicineprice("");
      setMedicinedescription("");
    } catch (err) {
      console.error(err);
      alert("Error adding medicine.");
    }
  };

  return (
    <div style={{ backgroundColor: "#f4f7fc" }}>
      <AdminSidebar />
      <div
        className="d-flex justify-content-between mt-4"
        style={{ marginLeft: "270px" }}
      >
        <h2 className="text-center text-primary">Add Medicine</h2>
        
      </div>

      <div
        className="container mt-4 w-75"
        style={{
          marginLeft: "270px",
          backgroundColor: "white",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <div className="shadow mx-auto">
          <div className="card-body">
            <form onSubmit={medicineadd} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Upload Medicine Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Medicine Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={medicinename}
                  onChange={(e) => setMedicinename(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  value={medicinecategory}
                  onChange={(e) => setMedicinecategory(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  value={medicineprice}
                  onChange={(e) => setMedicineprice(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={medicinedescription}
                  onChange={(e) => setMedicinedescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Add Medicine
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMedicine;
