import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Portfolio() {
  return (
    <div>
      
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
  </ul>
  {/* Header Area */}
  <Header></Header>
  
  <div className="breadcrumbs overlay">
    <div className="container">
      <div className="bread-inner">
        <div className="row">
          <div className="col-12">
            <h2>Portfolio Details</h2>
            <ul className="bread-list">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="icofont-simple-right" />
              </li>
              <li className="active">Portfolio Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Portfolio Details Area */}
  <section className="pf-details section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="inner-content">
            <div className="image-slider">
              <div className="pf-details-slider">
                <img src="img/call-bg.jpg" alt="#" />
                <img src="img/call-bg.jpg" alt="#" />
                <img src="img/call-bg.jpg" alt="#" />
              </div>
            </div>
            <div className="date">
              <ul>
                <li>
                  <span>Category :</span> Heart Surgery
                </li>
                <li>
                  <span>Date :</span> April 20, 2019
                </li>
                <li>
                  <span>Client :</span> Suke Agency
                </li>
                <li>
                  <span>Ags :</span> Typo
                </li>
              </ul>
            </div>
            <div className="body-text">
              <h3>Here is the name of this project here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor a ti incididunt ut labore et dolore to in magna
                aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et
                dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in a
                in to in a consectetur.ncididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et
                dolore magna in a aliqua uis nostrud.Lorem ipsum dolor sit amet,
                in aed do eiusmod
              </p>
              <p>
                ncididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis to the in nostrud.abore et dolore magna to in
                aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do
                eiusmod.ncididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p>
                ncididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis to the in nostrud.abore et dolore magna a aliqua
                uis nostrud.Lorem ipsum dolor sit amet, in aed do
                eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis to the in nostrud.abore et dolore magna
                aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do
                eiusmod. dolor sit amet, in aed do eiusmod.ncididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis to the in
                nostrud.abore et dolore magna aliqua uis nostrud.
              </p>
              <div className="share">
                <h4>Share Now -</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-official"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer></Footer>
  {/* End Portfolio Details Area */}
  {/* Footer Area */}
  
  {/*/ End Footer Area */}
  {/* jquery Min JS */}
  {/* jquery Migrate JS */}
  {/* jquery Ui JS */}
  {/* Easing JS */}
  {/* Color JS */}
  {/* Popper JS */}
  {/* Bootstrap Datepicker JS */}
  {/* Jquery Nav JS */}
  {/* Slicknav JS */}
  {/* ScrollUp JS */}
  {/* Niceselect JS */}
  {/* Tilt Jquery JS */}
  {/* Owl Carousel JS */}
  {/* counterup JS */}
  {/* Steller JS */}
  {/* Wow JS */}
  {/* Magnific Popup JS */}
  {/* Counter Up CDN JS */}
  {/* Bootstrap JS */}
  {/* Main JS */}


    </div>
  );
}

export default Portfolio;