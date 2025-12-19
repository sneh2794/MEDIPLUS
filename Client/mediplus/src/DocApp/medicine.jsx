import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Medicine() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // <-- Search state

    // Fetch medicine data
    function medicineShow() {
        fetch("http://localhost:5000/api/medicine")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Expected JSON, got: " + contentType);
                }
                return res.json();
            })
            .then(data => {
                console.log("Medicine data:", data);
                setData(data);
            })
            .catch(err => console.error("Fetch error:", err));

    }


    useEffect(() => {
        medicineShow();

        const userid = sessionStorage.getItem("userid");
        const savedCart = JSON.parse(sessionStorage.getItem(`cart_${userid}`)) || [];
        setCart(savedCart);
    }, []);

    // Function to add medicine to cart
    const addToCart = (medicine) => {
        const userId = sessionStorage.getItem("userid");

        const existingItem = cart.find(item => item.medicineid === medicine.medicineid);
        let updatedCart;

        if (existingItem) {
            updatedCart = cart.map(item =>
                item.medicineid === medicine.medicineid
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...medicine, quantity: 1 }];
        }

        setCart(updatedCart);
        sessionStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
        alert(`${medicine.medicinename} added to cart!`);
    };

    // Calculate total cart items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Filter medicines based on search term
    const filteredMedicines = data.filter((medicine) =>
        medicine.medicinename.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />

            {/* Breadcrumbs */}
            <div className="breadcrumbs overlay">
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Medical Store</h2>
                                <ul className="bread-list">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><i className="icofont-simple-right" /></li>
                                    <li className="active">Medicine</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search & Cart Summary */}
            <nav className="navbar navbar-light bg-light p-3">
                <div className="container">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for medicines..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <NavLink to="/cart" className="btn btn-primary position-relative ms-2">
                        <i className="fa-solid fa-cart-plus"></i> Cart
                        {totalItems > 0 && <span className="badge bg-danger ms-2 mx-2">{totalItems}</span>}
                    </NavLink>
                </div>
            </nav>

            {/* Product Catalog */}
            <section id="catalog" className="container my-5">
                <h2 className="text-center">Browse Medicines</h2>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredMedicines.length > 0 ? (
                        filteredMedicines.map((medicine) => (
                            <div key={medicine.medicineid} className="col-md-4 product-item">
                                <div className="card my-2">
                                    <img
                                        src={medicine.medicineimage}
                                        className="card-img-top"
                                        alt={medicine.medicinename}
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />

                                    <br />
                                    <div className="card-body">
                                        <h5 className="card-title">{medicine.medicinename}</h5>
                                        <p className="card-text">{medicine.medicinetype}</p>
                                        <p className="card-text">{medicine.medicinedetail}</p>
                                        <p><strong>Price: ₹{medicine.medicineprice}</strong></p>
                                        <button className="btn btn-primary mt-3" onClick={() => addToCart(medicine)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>No medicines found.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Medicine;
