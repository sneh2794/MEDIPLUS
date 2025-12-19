import React, { useEffect, useState } from "react";
import LabSidebar from "./labSidebar";

function LabReportsStatus() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/laboratory/labStatusShow")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="d-flex">
            <LabSidebar />
            <div className="container-fluid p-4 w-75" style={{ marginLeft: "260px" }}>
                <h2 className="text-primary">All Reports</h2>

                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Message</th>
                            <th>Prescription</th>
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
                                <td>
                                    <a href={`http://localhost:5000/${lab.prescription}`} target="_blank" className="btn btn-primary">View</a>
                                </td>
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

export default LabReportsStatus;
