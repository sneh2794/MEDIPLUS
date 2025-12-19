import React from "react";
import Sidebar from "./sidebar";

function Patient() {
    return (
        <div>
            <div className="d-flex">
                <Sidebar></Sidebar>
                <div className="container mt-4 " style={{ marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                        <h2 className="text-center text-primary">Patient Details</h2>
                        <div className="d-flex align-items-center">
                        <button className="btn btn-primary mr-5">
                                    <i class="fa-solid fa-video"></i>
                                </button>

                        </div>
                    </div>
                    <div className="card p-3 mb-4 mt-4 w-75 mx-auto">
                        <div className="d-flex align-items-center">
                            <div className="col-md-5">

                                <img
                                    src="img/author3.jpg"
                                    className=" w-75 rounded "
                                    alt="Patient Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h4>Patient Details</h4>
                                <p>
                                    <strong>Name:</strong> John Doe
                                </p>
                                <p>
                                    <strong>Age:</strong> 30
                                </p>
                                <p>
                                    <strong>Gender:</strong> Female
                                </p>
                                <p>
                                    <strong>Contact:</strong> +1234567890
                                </p>
                                <p>
                                    <strong>Reason:</strong> Fever
                                </p>
                               
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="card p-3 w-75 mx-auto">
                        <h4 className="text-center">
                            <i class="fa-solid fa-prescription "></i>
                            <br />Medicine Box
                        </h4>
                        <p className="text-center">
                            Store and access your prescriptions securely.
                        </p>
                        <textarea
                            className="form-control"
                            placeholder="Write here..."
                            defaultValue={""}
                        />

                        <button className="btn btn-primary mt-3 w-25 mx-auto">
                            Send Medicine
                        </button>
                    </div>
                    <br />
                    <div className="card p-3 w-75 mx-auto mb-5">
                        <h4 className="text-center">
                            <i class="fa-solid fa-flask-vial"></i>
                            <br />Laboratory Box
                        </h4>
                        <p className="text-center">
                            Store and access your prescriptions securely.
                        </p>
                        <textarea
                            className="form-control"
                            placeholder="Write here..."
                            defaultValue={""}
                        />
                        <button className="btn btn-primary mt-3 w-25 mx-auto">
                            Send Reports
                        </button>
                    </div>
                    <br />
                   


                </div>

            </div>



        </div>
    );
}
export default Patient;