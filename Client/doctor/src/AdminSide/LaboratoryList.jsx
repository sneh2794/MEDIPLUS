import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";

function LaboratoryList() {
    const [data, setData] = useState([]);

    function labShow() {
        fetch("http://localhost:5000/api/admin/laboratoryList")
            .then((result) => result.json())
            .then((res) => {
                setData(res);
            });
    }

    useEffect(() => {
        labShow();
    }, []);

    return (
        <div>
            <AdminSidebar />
            <div className="container-fluid p-4 w-75" style={{ marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary">Laboratory Reports</h2>
                    {/* <div className="d-flex align-items-center">
                        <img
                            src="img/author2.jpg"
                            className="me-2 mx-3 rounded-circle w-5%"
                            style={{ width: 50 }}
                            alt="Author"
                        />
                    </div> */}
                </div>

                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((lab) => (
                            <tr key={lab._id}>
                                {/* <td>{lab._id}</td> */}
                                <td>{lab.name}</td>
                                <td>{lab.phone}</td>
                                <td>{lab.address}</td>
                                <td>{lab.message}</td>
                                <td className="h5">
                                    <span className={`badge ${lab.status === 'Completed' ? 'text-success fw-bold' : 'text-danger fw-bold'}`}>
                                        {lab.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LaboratoryList;
