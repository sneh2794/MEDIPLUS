import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const userid = sessionStorage.getItem("userid");

    useEffect(() => {
        const savedCart = JSON.parse(sessionStorage.getItem(`cart_${userid}`)) || [];
        setCart(savedCart);
    }, []);

    const updateQuantity = (id, delta) => {
        const updatedCart = cart.map((item) =>
            item.medicineid === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        );
        setCart(updatedCart);
        sessionStorage.setItem(`cart_${userid}`, JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.medicineid !== id);
        setCart(updatedCart);
        sessionStorage.setItem(`cart_${userid}`, JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.medicineprice * item.quantity,
        0
    );

    const handleCheckout = (e) => {
        e.preventDefault();
        const generatedOrderId = "ORD_" + Date.now();
        sessionStorage.setItem("order_id", generatedOrderId);

        const userid = sessionStorage.getItem("userid");

        if (!userid) {
            alert("Please login first to proceed Medicine order.");
            navigate("/login");
            return;
        }

        navigate("/payment");  // Navigate to the payment page
    };

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <h4 className="text-center my-5">Your cart is empty.</h4>
                ) : (
                    <div>
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Medicine</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.medicineid}>
                                        <td>{item.medicinename}</td>
                                        <td>₹{item.medicineprice}</td>
                                        <td>
                                            <button className="p-2" onClick={() => updateQuantity(item.medicineid, -1)}>-</button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button className="p-2" onClick={() => updateQuantity(item.medicineid, 1)}>+</button>
                                        </td>
                                        <td>₹{item.medicineprice * item.quantity}</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.medicineid)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-end my-5">
                            <h4><strong>Total Price: ₹{totalPrice}</strong></h4>
                            <button className="btn btn-primary mt-3" onClick={handleCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
