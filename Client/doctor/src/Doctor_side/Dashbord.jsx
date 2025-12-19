import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";

function Dashboard() {
    const [data, setData] = useState([]);
    const [doctor, setDoctor] = useState("");
    const doctorid = sessionStorage.getItem("doctorid");

    console.log("Doctor ID from session:", doctorid);

    const showAppointments = () => {
        if (!doctorid) return;

        axios
            .get(`http://localhost:5000/api/doctor/appointments?doctorid=${doctorid}`)
            .then((res) => {
                // Only show pending appointments
                const pending = res.data.filter(app => app.status === "pending");
                setData(pending);
            })
            .catch((err) => console.error("Appointments fetch error:", err));
    };

    const updateStatus = (appointmentId, action) => {
        axios
            .put(`http://localhost:5000/api/doctor/appointment/${appointmentId}?action=${action}`)
            .then(() => {
                showAppointments(); // Refresh after update
            })
            .catch((err) => {
                console.error("Update status error:", err);
                alert("Failed to update status. Please try again.");
            });
    };

    useEffect(() => {
        if (!doctorid) return;

        showAppointments();

        axios
            .get(`http://localhost:5000/api/doctor/details?doctorid=${doctorid}`)
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setDoctor(res.data[0]);
                }
            })
            .catch((err) => console.error("Doctor details fetch error:", err));
    }, [doctorid]);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="container-fluid p-4" style={{ marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary">Doctor Dashboard</h2>
                    <div className="d-flex align-items-center">
                        <img
                            src="http://localhost:5000/uploads/doctorLogo.jpg"
                            className="me-2 mx-3 rounded-circle"
                            alt="Doctor"
                            style={{ width: 50 }}
                        />
                        <span className="me-3 fw-semibold">Hello, {doctor.doctorname || "Doctor"}!</span>
                    </div>
                </div>

                <h3 className="text-center my-4">Pending Appointments</h3>

                <div className="table-responsive">
                    <table className="table table-bordered mt-4">
                        <thead className="table-primary">
                            <tr>
                                <th>Patient</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Fees</th>
                                <th>Action</th>
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
                                        <td>
                                            <button
                                                onClick={() => updateStatus(appointment._id, 'approve')}
                                                className="btn btn-success btn-sm mr-2"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => updateStatus(appointment._id, 'reject')}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No pending appointments</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
