import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const handleLogout = () => {
        sessionStorage.removeItem("doctorid");
      };
      
    return (

        <div className="d-flex">
            <div

                className="bg-primary text-white p-3 position-fixed"
                style={{ width: 250, height: "100vh" }}
            >
                <div className="" style={{ backgroundColor: "white", borderRadius: "20px" }}>
                    <h4 className="text-center mb-3 p-2" ><img src="img/logo.png"  /></h4>
                </div>
                {/* <a href="#" className="d-block text-white text-decoration-none">
                    Dashboard
                </a> */}
                <NavLink to="/dashbord" className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`}> <span className="mr-2"><i className="bi bi-house"></i></span>Dashboard</NavLink>
                
                <NavLink to="/drAppointment" className={({ isActive }) => `p-2 d-block fs-2 ${isActive ? "bg-light text-dark rounded" : "text-white"}`}> <span className="mr-2"><i className="bi bi-calendar2-plus"></i></span>Appoinments</NavLink> 

                <NavLink to="/doctorProfile" className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`}> <span className="mr-2"><i className="bi bi-person"></i></span>Profile</NavLink>
               
               
                {/* <a href="#" className="d-block text-white p-2 text-decoration-none">
                    Profile
                </a> */}
                <NavLink to="/"  className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`} onClick={handleLogout}><span className="mr-2"><i className="bi bi-arrow-bar-right"></i></span>Logout</NavLink>
            </div>
        </div>

    )
}

export default Sidebar;
