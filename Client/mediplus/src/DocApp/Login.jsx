import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    const data = {
      useremail: email,  // Corrected field names
      userpassword: password,  // Corrected field names
    };

    axios
      .post("http://localhost:5000/api/register/login", data)
      .then((result) => {
        if (result.data.success) {
          sessionStorage.setItem("userid", result.data.userid);
          sessionStorage.setItem("_id", result.data._id);
          sessionStorage.setItem("username", result.data.username);
          sessionStorage.setItem("useremail", result.data.useremail);
          sessionStorage.setItem("usermobile", result.data.usermobile);
          sessionStorage.setItem("useraddress", result.data.useraddress);

          alert("Login Successfully");
          navigate("/"); // Navigate to the homepage
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.response?.data?.message || error.message);
        alert("Login Failed: " + (error.response?.data?.message || "Server error"));
      });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row login-container mt-5">
          <div className="col-md-6">
            <div className="login-form my-5 shadow">
              <h2 className="mb-4">Login to Your Account</h2>
              <form onSubmit={login}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <NavLink to="/register" className="text-decoration-none" style={{ color: "blue" }}>
                    Forgot your Password?
                  </NavLink>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              <p className="mt-3">
                Don't have an account?{" "}
                <NavLink to="/registration" className="text-decoration-none" style={{ color: "blue" }}>
                  Sign up here.
                </NavLink>
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="img/contact-img.png" alt="Doctors" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
