import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function UserProfile() {
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const userId = sessionStorage.getItem("userid");

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/api/register/profile/${userId}`)
        .then((res) => {
          console.log("Fetched user data:", res.data); // Log the full response data
          if (res.data.success) {
            setUser(res.data.data);
          }
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [userId]);


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (file) {
      formData.append("userimage", file);
    }

    Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .put(`http://localhost:5000/api/register/profile/${userId}`, formData)
      .then((res) => {
        alert("Profile updated successfully");
        setIsEdit(false);
        setUser(res.data.data); // updated user
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update profile");
      });
  };

  return (
    <div>
      <Header />

      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 p-4" style={{ border: "2px solid #ced4da", borderRadius: "8px" }}>
            <h2 className="mb-4 text-center">User Profile</h2>

            <div className="text-center mb-4">
              <img
                src={`http://localhost:5000/${user.userimage}`}
                alt="User"
                className="rounded-circle"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />

            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="username"
                  value={user.username || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="useremail"
                  value={user.useremail || ""}
                  className="form-control"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  name="usermobile"
                  value={user.usermobile || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>
              <div className="mb-3">
                <label>Address</label>
                <textarea
                  name="useraddress"
                  value={user.useraddress || ""}
                  onChange={handleChange}
                  className="form-control"
                  readOnly={!isEdit}
                />
              </div>
              <div className="row">
                <div className="mb-3 col-md-4">
                  <label>City</label>
                  <input
                    type="text"
                    name="usercity"
                    value={user.usercity || ""}
                    onChange={handleChange}
                    className="form-control"
                    readOnly={!isEdit}
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <label>State</label>
                  <input
                    type="text"
                    name="userstate"
                    value={user.userstate || ""}
                    onChange={handleChange}
                    className="form-control"
                    readOnly={!isEdit}
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="userpincode"
                    value={user.userpincode || ""}
                    onChange={handleChange}
                    className="form-control"
                    readOnly={!isEdit}
                  />
                </div>
              </div>

              {isEdit && (
                <div className="mb-3">
                  <label>Update Image</label>
                  <input type="file" className="form-control" onChange={handleFileChange} />
                </div>
              )}

              <div className="text-center">
                {isEdit ? (
                  <div className="mb-3">
                    <button type="submit" className="btn btn-success mr-2">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setIsEdit(false)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => setIsEdit(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UserProfile;
