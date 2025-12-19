import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Services(){
  return(
    <div>
      <Header></Header>
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Our Services</h2>
                <br />
                
                <ul className="bread-list">
                  <li>
                    <NavLink to="/">Home</NavLink>
                    {/* <a href="index.html">Home</a> */}
                  </li>
                  <li>
                    <i className="icofont-simple-right" />
                  </li>
                  <li className="active">Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container py-5 w-50">
        <div className="text-center mb-4">
          {/* <h2 className="fw-bold">Our Medical Services</h2>
          <p className="text-muted">
            Providing quality healthcare for you and your family
          </p> */}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm text-center p-4 mb-3">
              {/* <img
                src=""
                alt="Doctor Image"
                className="img-fluid rounded-circle mb-3"
              /> */}
              <i className="fas fa-user-md fa-3x text-primary mb-3" />
              <h4>Doctors</h4>
              <p className="text-muted">
                Expert medical consultations for all your healthcare needs.
              </p>
              <br />
              <NavLink to="/doctors" className="btn  mx-auto">Get Appointment</NavLink>
              {/* <button className="btn w-25 mx-auto ">Get Appoitment</button> */}
            </div>
          </div>
          <div className="col-12">
            <div className="card shadow-sm text-center p-4 mb-3">
              {/* <img
                src=""
                alt="Medical Store"
                className="img-fluid rounded-circle mb-3"
              /> */}
              <i className="fas fa-stethoscope fa-3x text-success mb-3" />
              <h4>Medical store</h4>
              <p className="text-muted">Get all types of medicines at doorstep.</p>
              <br />
              <NavLink to="/medicine" className="btn w-25 mx-auto">Get Medicine</NavLink>
              {/* <button className="btn w-25 mx-auto">Get Medicine</button> */}
            </div>
          </div>
          <div className="col-12">
            <div className="card shadow-sm text-center p-4 mb-3">
              {/* <img
                src=""
                alt="Laboratory"
                className="img-fluid rounded-circle mb-3"
              /> */}
              <i className="fas fa-ambulance fa-3x text-danger mb-3" />
              <h4>Laboratory Services</h4>
              <p className="text-muted">24/7 Laboratory Services Available.</p>
              <br />
              <NavLink to="/laboratory" className="btn w-25 mx-auto">Get Laboratory</NavLink>
              {/* <button className="btn w-50 mx-auto">Get Laboratory Appointment</button> */}
            </div>
          </div>
        </div>
      </section>

  <Footer></Footer>
 
    </div>
  )
}

export default Services;
     
    