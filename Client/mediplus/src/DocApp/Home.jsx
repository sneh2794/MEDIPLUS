import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    return (
        <div>
{/*           
  <ul className="pro-features">
    <a className="get-pro" href="#">
      Get Pro
    </a>
    <li className="big-title">Pro Version Available on Themeforest</li>
    <li className="title">Pro Version Features</li>
    <li>2+ premade home pages</li>
    <li>20+ html pages</li>
    <li>Color Plate With 12+ Colors</li>
    <li>Sticky Header / Sticky Filters</li>
    <li>Working Contact Form With Google Map</li>
    <div className="button">
      <a
        href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879"
        target="_blank"
        className="btn"
      >
        Pro Version Demo
      </a>
      <a
        href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910"
        target="_blank"
        className="btn"
      >
        Buy Pro Version
      </a>
    </div>
  </ul> */}
  {/* Header Area */}
        <Header></Header>
 
  <section className="slider">
    <div className="hero-slider">
      {/* Start Single Slider */}
      <div
        className="single-slider"
        style={{ backgroundImage: 'url("img/slider2.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text">
                <h1>
                  We Provide <span>Medical</span> Services That You Can{" "}
                  <span>Trust!</span>
                </h1>
                <p>
                At MediPlus, we provide reliable and expert healthcare services tailored to your needs. Our dedicated medical team ensures quality care with trust and excellence.{" "}
                </p>
                <div className="button">
                  {/* <a href="#" className="btn">
                    Get Appointment
                  </a> */}
                  <NavLink to="/appointment" className="btn">
                    Get Appointment
                  </NavLink>
                  <a href="#" className="btn primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </section>
  {/*/ End Slider Area */}
  {/* Start Schedule Area */}
  <section className="schedule">
    <div className="container">
      <div className="schedule-inner">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 ">
            {/* single-schedule */}
            <div className="single-schedule first">
              <div className="inner">
                <div className="icon">
                  <i className="fa fa-ambulance" />
                </div>
                <div className="single-content">
                  <span>Lorem Amet</span>
                  <h4>Emergency Cases</h4>
                  <p>
                    Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et
                    erat in lacus convallis sodales.
                  </p>
                  <a href="#">
                    LEARN MORE
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* single-schedule */}
            <div className="single-schedule middle">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-prescription" />
                </div>
                <div className="single-content">
                  <span>Fusce Porttitor</span>
                  <h4>Doctors Timetable</h4>
                  <p>
                    Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et
                    erat in lacus convallis sodales.
                  </p>
                  <a href="#">
                    LEARN MORE
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            {/* single-schedule */}
            <div className="single-schedule last">
              <div className="inner">
                <div className="icon">
                  <i className="icofont-ui-clock" />
                </div>
                <div className="single-content">
                  <span>Donec luctus</span>
                  <h4>Opening Hours</h4>
                  <ul className="time-sidual">
                    <li className="day">
                      Monday - Fridayp <span>8.00-20.00</span>
                    </li>
                    <li className="day">
                      Saturday <span>9.00-18.30</span>
                    </li>
                    <li className="day">
                      Monday - Thusday <span>9.00-15.00</span>
                    </li>
                  </ul>
                  <a href="#">
                    LEARN MORE
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/End Start schedule Area */}
  {/* Start Feautes */}
  <section  className="Feautes section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Are Always Ready to Help You &amp; Your Family</h2>
            <img src="img/section-img.png" alt="#" />
            <p>
            MediPlus is always ready to provide expert care for you and your family. From emergencies to advanced treatments, we are here to help.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features">
            <div className="signle-icon">
              <i className="icofont icofont-ambulance-cross" />
            </div>
            <h3>Emergency Help</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features">
            <div className="signle-icon">
              <i className="icofont icofont-medical-sign-alt" />
            </div>
            <h3>Enriched Pharmecy</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <div className="single-features last">
            <div className="signle-icon">
              <i className="icofont icofont-stethoscope" />
            </div>
            <h3>Medical Treatment</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          {/* End Single features */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End Feautes */}
  {/* Start Fun-facts */}
  <div id="fun-facts" className="fun-facts section overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-home" />
            <div className="content">
              <span className="counter">3468</span>
              <p>Hospital Rooms</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-user-alt-3" />
            <div className="content">
              <span className="counter">557</span>
              <p>Specialist Doctors</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont-simple-smile" />
            <div className="content">
              <span className="counter">4379</span>
              <p>Happy Patients</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-table" />
            <div className="content">
              <span className="counter">32</span>
              <p>Years of Experience</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
      </div>
    </div>
  </div>
  {/*/ End Fun-facts */}
  {/* Start Why choose */}
  <section className="why-choose section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Offer Different Services To Improve Your Health</h2>
            <img src="img/section-img.png" alt="#" />
            <p>
            We are committed to providing exceptional healthcare services with experienced doctors and advanced facilities.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          {/* Start Choose Left */}
          <div className="choose-left">
            <h3>Who We Are</h3>
            <p>
            MediPlus is committed to enhancing your health with advanced medical services. Our expert team delivers high-quality care, ensuring your well-being through innovative treatments and compassionate support.{" "}
            </p>
            <p>
            We strive to provide a patient-centered experience by combining modern technology with personalized healthcare. Your health is our priority, and we are dedicated to offering comprehensive medical solutions.{" "}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list">
                  <li>
                    <i className="fa fa-caret-right" />
                    Convenient Online Consultations.{" "}
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Order Medicines with Ease.
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Book Lab Tests Effortlessly.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list">
                  <li>
                    <i className="fa fa-caret-right" />
                    Expert Doctor Appointments.{" "}
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    Quick Access to Medical Reports.
                  </li>
                  <li>
                    <i className="fa fa-caret-right" />
                    24/7 Emergency Assistance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Choose Left */}
        </div>
        <div className="col-lg-6 col-12">
          {/* Start Choose Rights */}
          <div className="choose-right">
            <div className="video-image">
              {/* Video Animation */}
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1" />
                  <div className="waves wave-2" />
                  <div className="waves wave-3" />
                </div>
              </div>
              {/*/ End Video Animation */}
              <a
                href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                className="video video-popup mfp-iframe"
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          {/* End Choose Rights */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End Why choose */}
  {/* Start Call to action */}
  <section className="call-action overlay" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="content">
            <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
            <p>
            Get 24/7 emergency medical care with expert doctors at MediPlus.
            </p>
            <div className="button">
              {/* <a href="#" className="btn">
                Contact Now
              </a> */}
              <NavLink to="/contact"  className="btn btn-primary">Contact Now</NavLink>
              {/* <a href="#" className="btn btn-secondary second">
                Learn More
                <i className="fa fa-long-arrow-right" />
              </a> */}
              <NavLink to="/" className="btn">Learn More <span></span>
               <i className="fa fa-long-arrow-right" /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ End Call to action */}
  {/* Start portfolio */}
  <section className="portfolio section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
            <img src="img/section-img.png" alt="#" />
            <p>
            We ensure a clean and hygienic hospital environment by following strict sanitation protocols, maintaining sterilized equipment, and prioritizing patient safety at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="owl-carousel portfolio-slider">
            <div className="single-pf">
              <img src="img/pf1.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf2.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf3.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf4.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf1.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf2.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf3.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
            <div className="single-pf">
              <img src="img/pf4.jpg" alt="#" />
              <a href="portfolio-details.html" className="btn">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/ End portfolio */}
  {/* Start service */}
  <section className="services section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Offer Different Services To Improve Your Health</h2>
            <img src="img/section-img.png" alt="#" />
            <p>
            MediPlus provides comprehensive healthcare services, ensuring top-quality treatment with advanced medical technology and expert professionals to improve your well-being.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont icofont-prescription" />
            <h4>
              <a href="service-details.html">General Treatment</a>
            </h4>
            <p>
            Our general treatment services cover routine check-ups, illness diagnosis, and preventive care to keep you and your family healthy.{" "}
            </p>
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont icofont-tooth" />
            <h4>
              <a href="service-details.html">Teeth Whitening</a>
            </h4>
            <p>
            Brighten your smile with our professional teeth whitening services, using safe and effective techniques for a confident look.{" "}
            </p>
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont icofont-heart-alt" />
            <h4>
              <a href="service-details.html">Heart Surgery</a>
            </h4>
            <p>
            We offer advanced cardiac surgery solutions with state-of-the-art facilities and expert surgeons to ensure the best care for your heart.{" "}
            </p>
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont icofont-listening" />
            <h4>
              <a href="service-details.html">Ear Treatment</a>
            </h4>
            <p>
            Our specialized ear treatments help diagnose and manage hearing loss, infections, and other auditory conditions for better hearing health.{" "}
            </p>
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont icofont-eye-alt" />
            <h4>
              <a href="service-details.html">Vision Problems</a>
            </h4>
            <p>
            Get comprehensive eye care services, from vision correction to treating eye diseases, with cutting-edge diagnostic tools.{" "}
            </p>
          </div>
          {/* End Single Service */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Start Single Service */}
          <div className="single-service">
            <i className="icofont icofont-blood" />
            <h4>
              <a href="service-details.html">Blood Transfusion</a>
            </h4>
            <p>
            Safe and reliable blood transfusion services with thoroughly screened donors to ensure optimal patient health and recovery.{" "}
            </p>
          </div>
          {/* End Single Service */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End service */}
  {/* Pricing Table */}
 
  
  <section className="blog section" id="blog">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Keep up with Our Most Recent Medical News.</h2>
            <img src="img/section-img.png" alt="#" />
            <p>
            Stay updated with the latest advancements in healthcare, new treatments, and MediPlus innovations aimed at improving patient care and medical services.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* Single Blog */}
          <div className="single-news">
            <div className="news-head">
              <img src="img/blog1.jpg" alt="#" />
            </div>
            <div className="news-body">
              <div className="news-content">
                <div className="date">22 Aug, 2020</div>
                <h2>
                  <a href="blog-single.html">
                    We have annnocuced our new product.
                  </a>
                </h2>
                <p className="text">
                MediPlus has launched an innovative medical service, integrating AI-powered diagnostics and personalized treatment plans to enhance patient outcomes and accessibility.


                </p>
              </div>
            </div>
          </div>
          {/* End Single Blog */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Single Blog */}
          <div className="single-news">
            <div className="news-head">
              <img src="img/blog2.jpg" alt="#" />
            </div>
            <div className="news-body">
              <div className="news-content">
                <div className="date">15 Jul, 2020</div>
                <h2>
                  <a href="blog-single.html">
                    Top five way for solving teeth problems.
                  </a>
                </h2>
                <p className="text">
                Our latest research highlights the top five strategies for maintaining strong and healthy teeth, including the latest MediPlus dental care solutions.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Blog */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Single Blog */}
          <div className="single-news">
            <div className="news-head">
              <img src="img/blog3.jpg" alt="#" />
            </div>
            <div className="news-body">
              <div className="news-content">
                <div className="date">05 Jan, 2020</div>
                <h2>
                  <a href="blog-single.html">
                    We provide highly business soliutions.
                  </a>
                </h2>
                <p className="text">
                We are revolutionizing digital healthcare with telemedicine services, electronic prescriptions, and AI-assisted medical consultations to enhance patient care and accessibility.


                </p>
              </div>
            </div>
          </div>
          {/* End Single Blog */}
        </div>
      </div>
    </div>
  </section>
  {/* End Blog Area */}
  {/* Start clients */}
  <div className="clients overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="owl-carousel clients-slider">
            <div className="single-clients">
              <img src="img/client1.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client2.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client3.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client4.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client5.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client1.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client2.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client3.png" alt="#" />
            </div>
            <div className="single-clients">
              <img src="img/client4.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*/Ens clients */}
  {/* Start Appointment */}
  {/* <section className="appointment">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Are Always Ready to Help You. Book An Appointment</h2>
            <img src="img/section-img.png" alt="#" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
              aliquet. pretiumts
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          <form className="form" action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input name="name" type="text" placeholder="Name" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input name="email" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input name="phone" type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <div className="nice-select form-control wide" tabIndex={0}>
                    <span className="current">Department</span>
                    <ul className="list">
                      <li data-value={1} className="option selected ">
                        Department
                      </li>
                      <li data-value={2} className="option">
                        Cardiac Clinic
                      </li>
                      <li data-value={3} className="option">
                        Neurology
                      </li>
                      <li data-value={4} className="option">
                        Dentistry
                      </li>
                      <li data-value={5} className="option">
                        Gastroenterology
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <div className="nice-select form-control wide" tabIndex={0}>
                    <span className="current">Doctor</span>
                    <ul className="list">
                      <li data-value={1} className="option selected ">
                        Doctor
                      </li>
                      <li data-value={2} className="option">
                        Dr. Akther Hossain
                      </li>
                      <li data-value={3} className="option">
                        Dr. Dery Alex
                      </li>
                      <li data-value={4} className="option">
                        Dr. Jovis Karon
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input type="text" placeholder="Date" id="datepicker" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Write Your Message Here....."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-4 col-12">
                <div className="form-group">
                  <div className="button">
                    <button type="submit" className="btn">
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-8 col-12">
                <p>( We will be confirm by an Text Message )</p>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <div className="appointment-image">
            <img src="img/contact-img.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* End Appointment */}
  {/* Start Newsletter Area */}
  <section className="newsletter section">
    <div className="container">
      <div className="row ">
        <div className="col-lg-6  col-12">
          {/* Start Newsletter Form */}
          <div className="subscribe-text ">
            <h6>Sign up for newsletter</h6>
            <p className="">
              Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
              <br /> homero alterum.
            </p>
          </div>
          {/* End Newsletter Form */}
        </div>
        <div className="col-lg-6  col-12">
          {/* Start Newsletter Form */}
          <div className="subscribe-form ">
            <form
              action="mail/mail.php"
              method="get"
              target="_blank"
              className="newsletter-inner"
            >
              <input
                name="EMAIL"
                placeholder="Your email address"
                className="common-input"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Your email address'"
                required=""
                type="email"
              />
              <button className="btn">Subscribe</button>
            </form>
          </div>
          {/* End Newsletter Form */}
        </div>
      </div>
    </div>
  </section>
  {/* /End Newsletter Area */}
  {/* Footer Area */}
  <Footer></Footer>
  
        </div>
    );
}

export default Home;