import React, { useEffect, useState } from "react";
import LabSidebar from "./labSidebar";

function LabReports() {
    const [data, setData] = useState([]);

    const labShow = () => {
        fetch("http://localhost:5000/api/laboratory/labShow")
            .then((result) => result.json())
            .then((res) => {
                const pending = res.filter(report => report.status !== "Completed" && report.status !== "Cancelled");
                setData(pending);
            })
            .catch((err) => console.error("Error fetching reports:", err));
    };

    useEffect(() => {
        labShow();
    }, []);

    const updateStatus = (id, action) => {
        fetch(`http://localhost:5000/api/laboratory/labapprove?action=${action}&casenum=${id}`)
            .then((res) => res.json())
            .then(() => {
                labShow(); // Refresh after action
            })
            .catch((err) => console.error("Error updating status:", err));
    };

    return (
        <div className="d-flex">
            <LabSidebar />
            <div className="container-fluid p-4 w-75" style={{ marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary">Laboratory Reports</h2>
                </div>

                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Message</th>
                            <th>Prescription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((lab) => (
                                <tr key={lab._id}>
                                    {/* <td>{lab._id}</td> */}
                                    <td>{lab.name}</td>
                                    <td>{lab.phone}</td>
                                    <td>{lab.address}</td>
                                    <td>{lab.message}</td>
                                    <td>
                                        <a href={`http://localhost:5000/${lab.prescription}`} target="_blank" rel="noreferrer" className="btn btn-primary">
                                            View
                                        </a>
                                    </td>
                                    <td className="d-flex">
                                        <button
                                            className="btn btn-success btn-sm mr-2"
                                            onClick={() => updateStatus(lab._id, "approve")}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => updateStatus(lab._id, "reject")}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No pending reports</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LabReports;
