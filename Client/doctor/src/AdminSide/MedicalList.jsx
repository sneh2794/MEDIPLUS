import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function MedicalList() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/medicalstaff/orders")
            .then((res) => {
                console.log("Fetched Orders:", res.data.orders);
                setOrders(res.data.orders)
            })
            .catch((err) => console.error("Failed to fetch orders:", err));
    }, []);

    return (
        <div className="d-flex">
            <AdminSidebar></AdminSidebar>
            <div className="container mt-3 w-75 pt-3" style={{ marginLeft: "260px" }}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary ">All Medicine Orders</h2>
                    {/* <div className="d-flex align-items-center">
                        <img
                            src="img/author2.jpg"
                            className=" me-2 mx-3 rounded-circle w-5%"
                            style={{ width: 50 }}
                        />

                    </div> */}
                </div>

                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            {/* <th>Order ID</th> */}
                            <th>Patient Name</th>
                            <th>Address</th>
                            <th>Medicine</th>
                            <th>Price</th>
                            {/* <th>payment</th> */}
                            <th>order status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Array.isArray(orders) && orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.order_id}>
                                    {/* <td>{order.order_id}</td> */}
                                    <td>{order.username}</td>
                                    <td className="w-50">{order.useraddress}</td>
                                    <td>
                                        <ul className="list-unstyled mb-0">
                                            {order.cartItems.map((item, index) => (
                                                <li key={index}>
                                                    {item.medicinename} (x{item.quantity}) - ₹{item.medicineprice}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>₹{order.totalAmount}</td>
                                    {/* <td>{order.payment_status}</td> */}
                                    <td className="h5">
                                        <span className={`badge ${order.order_status === 'approved' ? 'text-success fw-bold' : order.order_status === 'rejected' ? 'text-danger fw-bold' : 'text-warning fw-bold'}`}>
                                            {order.order_status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">No data available</td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MedicalList;