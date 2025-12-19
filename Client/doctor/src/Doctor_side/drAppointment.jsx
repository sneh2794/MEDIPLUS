import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";

function DrAppoinment() {
  const [data, setData] = useState([]);
  const doctorid = sessionStorage.getItem("doctorid");

  const showAppoinment = () => {
    axios
      .get(`http://localhost:5000/api/doctor/appointments?doctorid=${doctorid}`)
      .then((res) => {
        // Only show approved or rejected
        const filtered = res.data.filter(app =>
          app.status === "approved" || app.status === "rejected"
        );
        setData(filtered);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    showAppoinment();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid p-4" style={{ marginLeft: "260px" }}>
        <div className="d-flex justify-content-between">
          <h2 className="text-center text-primary">Completed Appointments</h2>
        </div>
        <div className="table-responsive">
          <table className="table mt-4">
            <thead className="table-primary">
              <tr>
                <th>Patient</th>
                <th>Email</th>
                <th>Date</th>
                <th>Fees</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? (
                data.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.appname}</td>
                    <td>{appointment.appemail}</td>
                    <td>{appointment.appdate}</td>
                    <td>
                      {appointment.fees_paid ? (
                        <span className="text-warning h6">Paid</span>
                      ) : (
                        <span className="text-danger">Unpaid</span>
                      )}
                    </td>

                    <td className="h5">
                      <span className={`badge ${appointment.status === 'approved' ? 'text-success fw-bold' : 'text-danger fw-bold'}`}>
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">No past appointments</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DrAppoinment;
