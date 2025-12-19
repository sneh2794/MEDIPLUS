import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [totalAmount, setTotalAmount] = useState(0);
  const orderId = sessionStorage.getItem("order_id");
  const userid = sessionStorage.getItem("userid");
  const username = sessionStorage.getItem("username");
  const useremail = sessionStorage.getItem("useremail");
  const usermobile = sessionStorage.getItem("usermobile");
  const useraddress = sessionStorage.getItem("useraddress");

  const [name, setName] = useState(username || "");
  const [address, setAddress] = useState(useraddress || "");
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem(`cart_${userid}`)) || [];
    const total = cart.reduce((sum, item) => sum + item.medicineprice * item.quantity, 0);
    setTotalAmount(total);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cart = JSON.parse(sessionStorage.getItem(`cart_${userid}`)) || [];
    if (cart.length === 0) {
      alert("Your cart is empty. Cannot place order!");
      return;
    }

    const orderData = {
      order_id: orderId,
      userid: userid,
      username,
      useremail,
      usermobile,
      useraddress: address,
      cartItems: cart, // sending all cart items
      totalAmount: totalAmount,
    };

    // Call to create the order before opening Razorpay
    const response = await fetch("http://localhost:5000/api/medicine/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();
    if (result.success) {
      // Proceed with payment only after order creation
      loadRazorpay(cart);
    } else {
      alert("Order creation failed!");
    }
  };

  const loadRazorpay = (cart) => {
    const options = {
      key: "rzp_test_v8YmrOPZwGRgde", // Replace with your Razorpay Key ID
      amount: totalAmount * 100, // Amount is in the smallest currency unit (e.g., 50000 paise = ₹500)
      currency: "INR",
      name: "Mediplus",
      description: "Test Transaction",
      handler: async function (response) {
        alert("Payment Successful!");
        console.log("Razorpay Response:", response);
      
        // Update payment status to 'paid' in MongoDB
        await fetch("http://localhost:5000/api/payment/update-payment-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order_id: orderId,
            status: "paid",
          }),
        });
      
        console.log("Payment status updated to paid");
      
        // Clear session data
        sessionStorage.removeItem(`cart_${userid}`);
        sessionStorage.removeItem("order_id");
      
        navigate("/"); // Redirect to home page
      },
      
      prefill: {
        name: name,
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center mb-4">MediPlus Order</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Total Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  value={totalAmount}
                  readOnly
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Place Order ₹{totalAmount}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
