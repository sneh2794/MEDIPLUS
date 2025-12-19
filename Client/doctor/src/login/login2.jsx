import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginAll() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const type = sessionStorage.getItem("type"); // Must be set on selection page before login

  const login = (e) => {
    e.preventDefault();
    const data = { email, password, type };

    axios.post("http://localhost:5000/api/login", data)
      .then((res) => {
        if (res.data.success) {
          // Save to sessionStorage based on type
          switch (type) {
            case "a":
              sessionStorage.setItem("adminid", res.data.id);
              navigate("/adminDashboard");
              break;
              case "d":
                sessionStorage.setItem("doctorid", res.data.id); // Save doctorid
                sessionStorage.setItem("doctorid", res.data.doctorid); // Make sure the correct doctor ID is saved
                navigate("/dashbord");
                break;
            case "l":
              sessionStorage.setItem("labid", res.data.id);
              navigate("/labreports");
              break;
            case "m":
              sessionStorage.setItem("medicalid", res.data.id);
              navigate("/medical");
              break;
            default:
              alert("Invalid user type selected.");
          }
          alert("Login Successful");
        } else {
          alert(res.data.message || "Login Failed");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="container">
      <div className="row login-container mt-5">
        <div className="col-md-6">
          <div className="login-form my-5">
            <h2 className="mb-4">Login to Your Account</h2>
            <form onSubmit={login}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3">
                <NavLink to="/forgotpass" className="text-decoration-none" style={{ color: "blue" }}>
                  Forgot your Password?
                </NavLink>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="img/contact-img.png" alt="Doctors" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default LoginAll;
