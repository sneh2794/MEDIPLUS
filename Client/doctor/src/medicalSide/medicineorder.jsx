import React, { useEffect, useState } from "react";
import MedicalSidebar from "./medicalSidebar";
import axios from "axios";

const MedicalOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/medicalstaff/completed_orders")
            .then((response) => {
                console.log("Orders data:", response.data);
                const filteredOrders = response.data.filter(
                    (order) =>
                        order.order_status === "approved" ||
                        order.order_status === "rejected"
                );
                setOrders(filteredOrders);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    return (
        <div className="d-flex">
            <MedicalSidebar />
            <div
                className="container-fluid p-4"
                style={{ flex: 1, marginLeft: "260px" }}
            >
                <div className="d-flex justify-content-between">
                    <h2 className="text-center text-primary">All Orders</h2>
                    <div className="d-flex align-items-center">
                        <img
                            src="img/author2.jpg"
                            className="me-2 mx-3 rounded-circle"
                            style={{ width: 50 }}
                            alt="User"
                        />
                    </div>
                </div>

                <table className="table mt-4">
                    <thead className="table-primary">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Medicine</th>
                            <th>Price</th>
                            {/* <th>Payment</th> */}
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(orders) && orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.order_id}>
                                    <td>{order.order_id}</td>
                                    <td>{order.username}</td>
                                    <td>{order.useraddress}</td>
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
                                    {/* <td
                                        className={
                                            order.order_status === "approved"
                                                ? "text-success h5"
                                                : "text-danger h5"
                                        }
                                    >
                                        {order.order_status}
                                    </td> */}
                                    <td className="h5">
                                        <span className={`badge ${order.order_status === 'approved' ? 'text-success fw-bold' : order.order_status === 'rejected' ? 'text-danger fw-bold' : 'text-warning fw-bold'}`}>
                                            {order.order_status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    No approved or rejected orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MedicalOrders;
