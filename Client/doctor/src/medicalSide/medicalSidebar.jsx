import React from "react";
import { NavLink } from "react-router-dom";

function MedicalSidebar(){
  const handleLogout = () => {
    sessionStorage.removeItem("id");
  };
    return (
        <div className="bg-primary text-white p-3 position-fixed" style={{ width: "250px", height: "100vh" }}>
      <div className="" style={{backgroundColor: "white", borderRadius: "20px"}}>
            <h4 className="text-center mb-3 p-2" ><img src="img/logo.png" alt="#" /></h4>
            </div>
        <ul className="nav flex-column ">
          <li className="nav-item py-2">
           
            <NavLink to="/medical" className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`}><span className="mr-2"><i className="bi bi-house"></i></span>Dashboard</NavLink>
          </li>
          <li className="nav-item py-2">
           
            <NavLink to="/medicineorder" className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`}><span className="mr-2"><i className="bi bi-cart-plus"></i></span>Medicine Orders</NavLink>
          </li>
          <li className="nav-item py-2">
              <NavLink to="/"  className={({ isActive }) => `p-2 d-block ${isActive ? "bg-light text-dark rounded" : "text-white"}`} onClick={handleLogout}><span className="mr-2"><i className="bi bi-arrow-bar-right"></i></span>Logout</NavLink>
          </li>
        </ul>
      </div>
    )
}

export default MedicalSidebar;