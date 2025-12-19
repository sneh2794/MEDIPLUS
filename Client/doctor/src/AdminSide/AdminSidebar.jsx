import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function AdminSidebar() {
    const location = useLocation();


    const isDoctorPath = location.pathname.includes("/doctorList") || location.pathname.includes("/AddDoctor");
    const isMedicalPath = location.pathname.includes("/medicalList") || location.pathname.includes("/addMedicine");

    const [doctorMenuOpen, setDoctorMenuOpen] = useState(isDoctorPath);
    const [medicalMenuOpen, setMedicalMenuOpen] = useState(isMedicalPath);

    
    useEffect(() => {
        if (isDoctorPath) setDoctorMenuOpen(true);
        if (isMedicalPath) setMedicalMenuOpen(true);
    }, [location.pathname]);

    const handleLogout = () => {
        sessionStorage.removeItem("adminid");
    };

    return (
        <div className="bg-primary text-white p-3 position-fixed" style={{ width: "240px", height: "100vh" }}>
            <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
                <h4 className="text-center mb-3 p-2">
                    <img src="../img/logo.png" alt="Logo" />
                </h4>
            </div>

            <NavLink
                to="/adminDashboard"
                className={({ isActive }) =>
                    `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                }
            >
                <span className="mr-2"><i className="bi bi-house"></i></span>
                Dashboard
            </NavLink>

            <NavLink
                to="/appoinments"
                className={({ isActive }) =>
                    `p-2 d-block fs-2 ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                }
            >
                <span className="mr-2"><i className="bi bi-calendar2-plus"></i></span>
                Appointments
            </NavLink>
            
            <NavLink
                to="/userData"
                className={({ isActive }) =>
                    `p-2 d-block fs-2 ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                }
            >
                <span className="mr-2"><i class="bi bi-person-circle"></i></span>
                Users
            </NavLink>


            {/* Doctor Dropdown */}
            <div>
                <div
                    className="p-2 d-block text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => setDoctorMenuOpen(!doctorMenuOpen)}
                >
                    <span className="mr-2"><i className="bi bi-person-badge"></i></span>
                    Doctor
                    <i className={`bi ${doctorMenuOpen ? "bi-chevron-compact-up" : "bi-chevron-compact-down"} float-end ml-2`}></i>
                </div>
                {doctorMenuOpen && (
                    <div className="pl-3">
                        <NavLink
                            to="/AddDoctor"
                            className={({ isActive }) =>
                                `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                            }
                        >
                            <i className="bi bi-plus-circle mr-2"></i>Add Doctor
                        </NavLink>
                        <NavLink
                            to="/doctorList"
                            className={({ isActive }) =>
                                `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                            }
                        >
                            <i className="bi bi-people mr-2"></i>Doctors List
                        </NavLink>
                    </div>
                )}
            </div>

            {/* Medical Dropdown */}
            <div>
                <div
                    className="p-2 d-block text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => setMedicalMenuOpen(!medicalMenuOpen)}
                >
                    <span className="mr-2"><i className="bi bi-capsule"></i></span>
                    Medical
                    <i className={`bi ${medicalMenuOpen ? "bi-chevron-compact-up" : "bi-chevron-compact-down"} float-end ml-2`}></i>
                </div>
                {medicalMenuOpen && (
                    <div className="pl-3">
                        <NavLink
                            to="/addMedicine"
                            className={({ isActive }) =>
                                `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                            }
                        >
                            <i className="bi bi-plus-circle mr-2"></i>Add Medicine
                        </NavLink>
                        <NavLink
                            to="/medicalList"
                            className={({ isActive }) =>
                                `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                            }
                        >
                            <i className="bi bi-list-ul mr-2"></i>Medical List
                        </NavLink>
                        
                    </div>
                )}
            </div>

            <NavLink
                to="/laboratoryList"
                className={({ isActive }) =>
                    `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                }
            >
                <span className="mr-2"><i className="bi bi-prescription2"></i></span>
                Laboratory List
            </NavLink>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`
                }
                onClick={handleLogout}
            >
                <span className="mr-2"><i className="bi bi-arrow-bar-right"></i></span>
                Logout
            </NavLink>
        </div>
    );
}

export default AdminSidebar;
