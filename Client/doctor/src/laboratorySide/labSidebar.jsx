import React from "react";
import { NavLink } from "react-router-dom";

function LabSidebar(){
  const handleLogout = () => {
    sessionStorage.removeItem("id");
  };

    return (
        <div className="bg-primary text-white p-3 position-fixed" style={{ width: "250px", height: "100vh" }}>
        <div className="" style={{backgroundColor: "white", borderRadius: "20px"}}>
              <h4 className="text-center mb-3 p-2" ><img src="img/logo.png"  /></h4>
              </div>
          <ul className="nav flex-column ">
            <li className="nav-item py-2">
             
              <NavLink to="/labreports" className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`}><span className="mr-2"><i className="bi bi-house"></i></span>Dashboard</NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/labhistory" className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`}><span className="mr-2"><i className="bi bi-file-earmark-text"></i></span>Lab Reports</NavLink>
            </li>
            <li className="nav-item py-2">
               <NavLink to="/"  className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`} onClick={handleLogout}><span className="mr-2"><i className="bi bi-arrow-bar-right"></i></span>Logout</NavLink>
            </li>
          </ul>
        </div>
    )
}

export default LabSidebar;