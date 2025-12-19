import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Error() {
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
  <section className="error-page section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-12">
          {/* Error Inner */}
          <div className="error-inner">
            <h1>
              404<span>Oop's sorry we can't find that page!</span>
            </h1>
            <p>
              Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod
              diam libero, sed dapibus leo laoreet ut. Suspendisse potenti.
              Phasellus urna lacus
            </p>
            <form className="search-form">
              <input placeholder="Search from Here" type="text" />
              <button className="btn" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          {/*/ End Error Inner */}
        </div>
      </div>
    </div>
  </section>
  {/*/ End Error Page */}
  {/* Footer Area */}
  <Footer></Footer>
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

export default Error;