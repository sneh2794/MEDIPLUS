import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";


function Laboratory() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [file, setFile] = useState();
    const [message, setMessage] = useState("");
    const userid = sessionStorage.getItem("userid");
    const navigate = useNavigate();

    function handleChange(e) {
        setFile(e.target.files[0])
    }

    function laboratory(e) {
        e.preventDefault()
        
        if (!userid) {
            alert("Please login first to access laboratory services.");
            navigate("/login");
            return;
        }

        const url = "http://localhost:5000/api/laboratory/userlab";
        const formData = new FormData();
        
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("prescription", file);
        // formData.append("name", name);
        formData.append("message", message);
         formData.append("userid", userid);
        
        const config = {
            method: "POST",
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
            alert("Prescription Uploaded Successfully")
            navigate("/userAppoinments")
        })
    }

    return (
        <div>
            <Header></Header>
            <div className="breadcrumbs overlay">
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Welcome to Laboratory</h2>
                                <ul className="bread-list">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right" />
                                    </li>
                                    <li className="active">Laboratory</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}
            {/* Start Contact Us */}
            <section className="contact-us section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="contact-us-left" >
                                    {/*Start Google-map */}
                                    <img src="img/laboratory.jpg" alt="" className="w-100 h-100" />

                                    {/*/End Google-map */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-us-form">
                                    <h2>Upload Your Prescription</h2>

                                    {/* Form */}
                                    <form className="form" onSubmit={laboratory} encType="multipart/form-data">

                                        <div >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Name"
                                                    required


                                                />
                                            </div>
                                        </div>

                                        <div >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Phone"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div >
                                            <div className="form-group">
                                                <textarea
                                                    name="Address"
                                                    placeholder="Your Address"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    required
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="file"
                                                name="prescription"
                                                onChange={handleChange}
                                                placeholder="Upload Your Prescription"
                                                required
                                            />
                                        </div>


                                        <div >
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message"
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    required
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div >
                                            <div className="form-group login-btn">
                                                <button type="submit" className="btn btn-primary">submit</button>
                                            </div>

                                        </div>

                                    </form>
                                    {/*/ End Form */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer></Footer>
        </div>
    );

}
export default Laboratory;