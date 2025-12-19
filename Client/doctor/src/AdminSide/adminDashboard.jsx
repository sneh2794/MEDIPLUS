import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import axios from 'axios';


function AdminDashboard() {
    const [stats, setStats] = useState([
        { title: "Appointments", value: 0, icon: "bi bi-calendar2-plus", background: "bg-primary" },
        { title: "Lab Requests", value: 0, icon: "bi bi-prescription2", background: "bg-success" },
        { title: "Medicines", value: 0, icon: "bi bi-capsule", background: "bg-warning" },
        { title: "Total Patients", value: 0, icon: "bi bi-people", background: "bg-secondary" },
    ]);

    useEffect(() => {
        axios.get("http://localhost/mediplus/count.php")
            .then((res) => {
                const data = res.data;
                setStats([
                    { title: "Appointments", value: data.appointments, icon: "bi bi-calendar2-plus", background: "bg-primary" },
                    { title: "Lab Requests", value: data.labRequests, icon: "bi bi-prescription2", background: "bg-success" },
                    { title: "Medicines", value: data.medicines, icon: "bi bi-capsule", background: "bg-warning" },
                    { title: "Total Patients", value: data.patients, icon: "bi bi-people", background: "bg-secondary" },
                ]);
            })
            .catch((err) => {
                console.error("Error fetching dashboard data", err);
            });
    }, []);

   

    const [data, setData] = useState("");

    function showAppoinment() {
        fetch("http://localhost:5000/api/appointments").then((result) => result.json()).then((res) => {
            console.log("Fetched appointments:", res);
            setData(res);
        })
    }

    useEffect(() => {
        showAppoinment();
    }, []);



    return (

        <div>

            <div className="d-flex">

                <AdminSidebar></AdminSidebar>
                <div className="container mt-3 pt-3" style={{ marginLeft: "250px" }}>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-center text-primary ml-3">Admin Dashboard</h2>
                        {/* <div className="d-flex align-items-center">
                            <img
                                src="img/author2.jpg"
                                className="  mx-3 rounded-circle w-5%"
                                style={{ width: 50 }}
                            />

                            
                        </div> */}
                    </div>
                    <div className="container mt-4">
                        <div className="row ">
                            {stats.map((stat, index) => (
                                <div className="col-md-3 mb-3" key={index}>
                                    <div className={`card h-100 shadow-sm text-dark ${stat.background}`} >
                                        <div className="card-body d-flex align-items-center">

                                            <i className={`${stat.icon} h4 mr-3`}></i>

                                            <div>
                                                <div className="h5 fw-bold ml-2">{stat.title}</div>
                                                <div className="h5 fw-bold text-center">{stat.value}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <h3>Latest Appointments</h3>
                        {Array.isArray(data) && data.map((app, index) => (
                            <div key={index} className="card flex-row my-3 shadow-sm">
                                <div className='col-md-1 d-flex justify-content-center align-items-center'>
                                    <img
                                        src={app.image}
                                        alt={app.appdoctor}
                                        className="profile-pic rounded-circle"
                                        style={{
                                            cursor: "pointer",
                                            width: "52px",
                                            height: "52px",
                                            objectFit: "cover",
                                        }}
                                    />

                                </div>
                                <div className="ms-3 my-3 col-md-9">
                                    <h5 className="fw-bold">{app.appdoctor}</h5>
                                    <p className="fw-semibold">Patient Name: {app.appname}</p>
                                    <p className="fw-semibold">Appointment Date: {app.appdate}</p>


                                </div>
                                <div className="d-flex justify-content-center align-items-center col-md-2">
                                    <p className="fw-semibold col-md-2">

                                        <span className={`badge ${app.status === 'approved' ? 'text-success fw-bold' : app.status === 'rejected' ? 'text-danger fw-bold' : 'text-warning fw-bold'}`}>
                                            {app.status}
                                        </span>
                                    </p>
                                </div>

                            </div>
                        ))}


                    </div>
                </div>
            </div>


        </div>
    )
}

export default AdminDashboard;