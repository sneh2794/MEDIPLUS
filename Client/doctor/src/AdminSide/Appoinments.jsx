import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";


function Appoinments() {
    const [data, setData] = useState("");
    function showAppoinment() {
        fetch("http://localhost:5000/api/appointments").then((result) => result.json()).then((res) => {
            setData(res);
        })
    }

    useEffect(() => {
        showAppoinment();
    }, [data]);

    return (
        <div>

            <AdminSidebar></AdminSidebar>
            <div className="container-fluid p-4 w-75" style={{ marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary ">All Appoinments</h2>
                    {/* <div className="d-flex align-items-center">
                        <img
                            src="img/author2.jpg"
                            className=" me-2 mx-3 rounded-circle w-5%"
                            style={{ width: 50 }}
                        />

                      
                    </div> */}
                </div>

                <div className="d-flex justify-content-between">

                    <table className="table mt-4 shadow">
                        <thead className="table-primary">
                            <tr >
                                {/* <th>Id</th> */}
                                <th >Patient</th>
                                <th>Email</th>
                                <th >Date & Time</th>
                                <th>Doctor</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) ?

                                data.map((appointment) => {
                                    return <tr>
                                        {/* <td>{appointment.appnum}</td> */}
                                        <td >{appointment.appname}</td>
                                        <td>{appointment.appemail}</td>
                                        <td>{appointment.appdate}</td>
                                        <td>
                                            {appointment.appdoctor}
                                        </td>
                                        <td className="h5">

                                            <span className={`badge ${appointment.fees_paid ? 'text-success' : 'text-warning'} ms-2`}>
                                                {appointment.fees_paid ? 'Paid' : 'Pending'}
                                            </span>

                                        </td>
                                    </tr>
                                }
                                )
                                : <p>No data available</p>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Appoinments;