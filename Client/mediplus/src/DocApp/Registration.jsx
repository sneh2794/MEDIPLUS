import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState(null);
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", uname);
        formData.append("useremail", email);
        formData.append("userpassword", password);
        formData.append("usermobile", phone);
        formData.append("useraddress", address);
        formData.append("userimage", image);
        formData.append("userpincode", pincode);
        formData.append("userstate", state);
        formData.append("usercity", city);

        try {
            const response = await axios.post("http://localhost:5000/api/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.data.success) {
                alert("Registered Successfully!");
                navigate("/login");
            } else {
                alert(response.data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Something went wrong during registration!");
        }
    };

    return (
        <div>
            <Header />
            <section className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 p-4" style={{ border: "2px solid #ced4da", borderRadius: "8px" }}>
                        <h2 className="mb-4">Register Your Account</h2>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setUname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <textarea
                                    className="form-control"
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Pincode</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setPincode(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Registration;
