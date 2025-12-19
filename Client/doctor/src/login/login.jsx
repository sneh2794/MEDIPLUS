import React, { useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate("")
    useEffect(() => {
        // Clear type on first load
        sessionStorage.clear(); // Clears all session storage

      }, []);
    const admin = () => {
        sessionStorage.setItem('type', "a");

        
    }
    const doctor = () => {
        sessionStorage.setItem('type', "d");
        
    }
    const laboratory = () => {
        sessionStorage.setItem('type', "l");
    }
    const medical = () => {
        sessionStorage.setItem('type', "m");
    }




    return (
        <div>
            

            <div className="container mt-5">
           <div className="row mb-5">
            <div className="logo col-md-6">
                {/* <a href="index.html"> */}
                <NavLink to="/"><img src="img/logo.png" alt="#" /></NavLink>
            </div>
            <div className="col-md-6 text-right">
                <NavLink to="/login2" className="btn" onClick={admin}>Admin</NavLink>
            </div>
                {/* </a> */}
                
            </div>
            <div className="my-5">
                <h2 className="text-center">Login as per your profession</h2>
                </div>
                <div className="row text-center justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow p-4 border-0">
                            <i className="fa-solid fa-stethoscope fa-3x text-primary" />
                            <h2 className="mt-3">Doctor</h2>
                            <p className="text-muted">Login as a healthcare professional</p>
                            <NavLink to="/login2" className="btn btn-primary mt-2" onClick={doctor}>Login</NavLink>
                           
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow p-4 border-0">
                            <i className="fa-solid fa-vials fa-3x text-success" />
                            <h2 className="mt-3">Laboratory</h2>
                            <p className="text-muted">Access lab reports and tests</p>

                            <NavLink to="/login2" className="btn btn-success mt-2" onClick={laboratory}>Login</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow p-4 border-0">
                            <i className="fa-solid fa-prescription-bottle-medical fa-3x text-warning" />
                            <h2 className="mt-3">Medical Store</h2>
                            <p className="text-muted">Manage medicines and inventory</p>

                            <NavLink to="/login2" className="btn btn-warning mt-2" onClick={medical}>Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>


            {/* <Footer></Footer> */}
        </div>
    );
}
export default Login;