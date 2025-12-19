import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

function UserData() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/userdata/users");
                console.log("User data:", response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="d-flex">
            <AdminSidebar />
            <div className="container-fluid p-4" style={{ flex: 1, marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary">User Data</h2>
                </div>
                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(userData) && userData.length > 0 ? (
                                userData.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.useremail}</td>
                                        <td>{user.usermobile}</td>
                                        <td>{user.useraddress}</td>
                                        <td>{user.usercity}</td>
                                       
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No user data available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserData;
