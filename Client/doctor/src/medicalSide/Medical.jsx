import React, { useEffect, useState } from "react";
import MedicalSidebar from "./medicalSidebar";
import axios from "axios";

const MedicalStoreOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/medicalstaff/orders")
      .then((response) => {
        console.log("API response:", response.data);
        // Filter orders that are not approved or rejected
        const pendingOrders = response.data.orders.filter(order => order.order_status !== 'approved' && order.order_status !== 'rejected');
        setOrders(pendingOrders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const updateStatus = (orderId, action) => {
    axios
      .get(`http://localhost:5000/api/medicalstaff/orders/update_status?order_id=${orderId}&action=${action}`)
      .then(() => {
        setOrders(prev => prev.filter((order) => order.order_id !== orderId));
      })
      .catch((error) => {
        console.error(`Error updating order status:`, error);
      });
  };

  const handleApprove = (orderId) => {
    updateStatus(orderId, "approve");
  };

  const handleReject = (orderId) => {
    updateStatus(orderId, "reject");
  };

  return (
    <div className="d-flex">
      <MedicalSidebar />
      <div className="container-fluid p-4" style={{ flex: 1, marginLeft: "260px" }}>
        <div className="d-flex justify-content-between">
          <h2 className="text-center text-primary">Medical Store Orders</h2>
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
              <th>Status</th>
              <th>Action</th>
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

                  <td>{order.order_status}</td>
                  <td className="d-flex">
                    <button className="btn btn-success mr-2" onClick={() => handleApprove(order.order_id)}>Approve</button>
                    <button className="btn btn-danger" onClick={() => handleReject(order.order_id)}>Reject</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">No pending orders</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MedicalStoreOrders;
