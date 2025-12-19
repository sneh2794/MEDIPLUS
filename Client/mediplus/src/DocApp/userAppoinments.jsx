import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [labAppointments, setLabAppointments] = useState([]);
    const [medicineOrders, setMedicineOrders] = useState([]);
    const username = sessionStorage.getItem("username");
    const useremail = sessionStorage.getItem("useremail");
    const usermobile = sessionStorage.getItem("usermobile");

    const [activeTab, setActiveTab] = useState("doctor");

    const userid = sessionStorage.getItem("userid");

    useEffect(() => {
        // Fetch Doctor Appointments
        axios.get(`http://localhost:5000/api/appointments/user/${userid}`)
            .then((res) => {
                console.log(res.data);
                setAppointments(res.data);
            });

        // Fetch Lab Appointments
        axios.get(`http://localhost:5000/api/laboratory/userlab/${userid}`)
            .then((res) => {
                console.log(res.data);
                setLabAppointments(res.data);
            });

        //Fetch Medicine Orders
        axios
            .get(`http://localhost:5000/api/medicine/userOrders?userid=${userid}`)
            .then((res) => {
                console.log("Fetched orders:", res.data.orders);
                setMedicineOrders(res.data.orders);
            })


    }, []);

    const updateStatus = (app) => {
        axios.post('http://localhost:5000/api/appointments/payment', {
            _id: app._id
        }).then((res) => {
            console.log("Backend response:", res.data);
            if (res.data.status === "success") {
                setAppointments(prev =>
                    prev.map(item =>
                        item._id === app._id ? { ...item, fees_paid: true } : item
                    )
                );
            } else {
                alert("Failed to update payment status.");
            }
        }).catch((err) => {
            console.error("Update error", err);
        });
    };
    
    const loadRazorpay = (app) => {
        const options = {
            key: "rzp_test_v8YmrOPZwGRgde", // Replace with your Razorpay key
            amount: parseInt(app.fees) * 100, // Convert to paise
            currency: "INR",
            name: "Mediplus",
            description: "Doctor Appointment Fee",
            handler: function (response) {
                // Payment success → update backend
                updateStatus(app);
                alert("Payment Successful!");
                console.log("Razorpay Response:", response);
            },
            prefill: {
                name: username,
                email: useremail,
                contact: usermobile,
            },
            notes: {
                address: "Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };
    
        const rzp = new window.Razorpay(options);
        rzp.open();
    };
    



    return (
        <div>
            <Header />

            <div className="container mt-3">
                {/* Tab Buttons */}
                <div className="btn-group mb-4">
                    <button className={`btn btn-outline-primary mr-3 ${activeTab === 'doctor' ? 'active' : ''}`} onClick={() => setActiveTab('doctor')} style={{ borderRadius: "25px" }}>
                        Doctor Appointments
                    </button>
                    <button className={`btn btn-outline-success mr-3 ${activeTab === 'lab' ? 'active' : ''}`} onClick={() => setActiveTab('lab')} style={{ borderRadius: "25px" }}>
                        Lab Appointments
                    </button>
                    <button className={`btn btn-outline-info ${activeTab === 'medicine' ? 'active' : ''}`} onClick={() => setActiveTab('medicine')} style={{ borderRadius: "25px" }}>
                        Medicine Orders
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        {/* Doctor Appointments */}
                        {activeTab === 'doctor' && Array.isArray(appointments) && [...appointments].reverse().map((app, index) => (
                            <div key={index} className="card flex-row my-3 shadow-sm" style={{ height: "275px" }}>
                                <div className='col-md-3'>
                                    <img src={app.image} alt={app.appdoctor} className="img-fluid w-100 h-100" />
                                </div>
                                <div className="ms-3 my-3 col-md-7">
                                    <h5 className="fw-bold my-3">{app.appdoctor}</h5>
                                    <p className="text-primary fw-semibold">{app.specialty}</p>
                                    <p className="fw-semibold">Experience: {app.experience}</p>
                                    <p className="text-muted">{app.details}</p>
                                    <p className="fw-semibold">Appointment Date: {app.appdate}</p>
                                    <p className="fw-semibold">Fees: ₹{app.fees}</p>

                                    <p className="fw-semibold">
                                        Payment Status:
                                        <span className={`badge ${app.fees_paid ? 'text-success' : 'text-warning'} ms-2`}>
                                            {app.fees_paid ? 'Paid' : 'Pending'}
                                        </span>
                                    </p>
                                   
                                    {!app.fees_paid && (
                                        <div className="my-3 ">
                                            <button onClick={() => loadRazorpay(app)} className="btn mr-3">Pay Fee</button>

                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}


                        {/* Lab Appointments */}
                        {activeTab === 'lab' && Array.isArray(labAppointments) && labAppointments.map((lab, index) => (
                            <div key={index} className="card my-4 shadow-sm border-0">
                                <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0 text-light">{lab.name}</h5>
                                    <span className={`badge ${lab.status === 'Completed' ? 'bg-success' : lab.status === 'Cancelled' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                                        {lab.status}
                                    </span>
                                </div>

                                <div className="card-body">
                                    <p className="mb-2"><strong>Message:</strong> {lab.message || '—'}</p>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-1"><strong>Address:</strong></p>
                                            <p className="text-muted">{lab.address}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-1"><strong>Phone:</strong> {lab.phone}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))}


                        {/* Medicine Orders */}
                        {activeTab === 'medicine' && Array.isArray(medicineOrders) && medicineOrders.map((order, index) => (
                            <div key={index} className="card my-4 shadow-sm border-0">
                                <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0 text-light">{order.username}</h5>
                                    <span className={`badge ${order.order_status === 'paid' ? 'bg-success' : order.order_status === 'failed' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                                        {order.order_status}
                                    </span>
                                </div>

                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <p className="mb-1"><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                                            <p className="mb-1"><strong>Total Price:</strong> ₹{order.totalAmount}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-1"><strong>Address:</strong></p>
                                            <p className="text-muted">{order.useraddress}</p>
                                        </div>
                                    </div>

                                    <h6 className="my-3">Medicines Ordered</h6>
                                    <ul className="list-group list-group-flush mb-3">
                                        {order.cartItems && order.cartItems.length > 0 ? (
                                            order.cartItems.map((med, i) => (
                                                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                                                    {med.medicinename}
                                                    <span className="badge bg-secondary text-white">x {med.quantity}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="list-group-item">No medicines listed for this order.</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAppointments;
