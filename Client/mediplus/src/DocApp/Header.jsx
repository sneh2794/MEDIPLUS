import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function userProfile(_id) {
    fetch(`http://localhost:5000/api/register/profile/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({
            id: _id,
            userimage: data.data.userimage,
            username: data.data.username,
          });
        }
      })
      .catch((error) => console.error("Error fetching user profile:", error));
  }

  useEffect(() => {
    const userid = sessionStorage.getItem("userid");
    console.log("Loaded userid:", userid);

    if (userid) {
      setIsAuthenticated(true);
      userProfile(userid);
    }
  }, []);

  const handleLogout = () => {
    const _id = sessionStorage.getItem("_id");

    sessionStorage.removeItem(`cart_${_id}`);
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <NavLink to="/">
                      <img src="img/logo.png" alt="#" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/doctors">Doctors</NavLink>
                        </li>
                        <li>
                          <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-12 d-flex">
                  <div className="get-quote mr-4">
                    <NavLink to="/appointment" className="btn">
                      Book Appointment
                    </NavLink>
                  </div>

                  {isAuthenticated ? (
                    <div className="user-profile get-quote">
                      <nav className="navigation">
                        <ul className="nav menu">
                          {user && (
                            <li>
                              <img
                                src={`http://localhost:5000/${user.userimage}`}
                                alt={user.username}
                                className="profile-pic rounded-circle ml-4"
                                style={{
                                  cursor: "pointer",
                                  width: "52px",
                                  height: "52px",
                                  objectFit: "cover",
                                }}
                                onClick={() => setShowDropdown(!showDropdown)}
                              />

                              {showDropdown && (
                                <ul
                                  className="dropdown"
                                  style={{
                                    backgroundColor: "white", // Inline CSS for background color
                                    color: "black", // Inline CSS for text color
                                    border: "1px solid #ccc", // Optional: Border styling
                                  }}
                                >
                                  <li className="dropdown-header text-capitalize">
                                    <strong>Hello, {user.username.split(" ")[0]}!</strong>
                                  </li>
                                  <li>
                                    <NavLink to="/userProfile">Profile</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/userAppoinments">My Appointments</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/" onClick={handleLogout}>
                                      Logout
                                    </NavLink>
                                  </li>
                                </ul>
                              )}
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  ) : (
                    <div className="get-quote">
                      <NavLink to="/login" className="btn">Login</NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
