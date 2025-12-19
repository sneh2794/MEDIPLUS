import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="header">
        {/* Topbar */}
        
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    {/* <a href="index.html"> */}
                    <NavLink to="/"><img src="img/logo.png" alt="#" /></NavLink>

                    {/* </a> */}
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-6 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                          {/* <a href="#">Doctos </a> */}
                          <NavLink to="/doctors">Doctors</NavLink>
                        </li>

                        <li>
                          {/* <a href="#">
                            Services
                          </a> */}
                          <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                          <NavLink to="/blog">Blog </NavLink>
                        </li>
                        <li>
                          {/* <a href="contact.html">Contact Us</a> */}
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>

                <div className="col-lg-3 col-12 d-flex">
                  <div className="get-quote mr-4">
                    {/* <a href="appointment.html" className="btn"> */}
                    <NavLink to="/login" className="btn btn-primary">
                      Login</NavLink>

                    {/* </a> */}
                  </div>
                  <div className="get-quote">
                    {/* <a href="appointment.html" className="btn"> */}
                    <NavLink to="/appointment" className="btn btn-primary">
                      Book Appointment</NavLink>

                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
    </div>
  )
}
export default Header;