import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; 

const Navbar = () => {
    const items = useSelector((state) => state.cart);

    return (
        <nav className="navbar">
            <span className="logo">REDUX STORE</span>
            <div className="nav-links">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/cart">
                    Cart
                </Link>
                <span className="cart-count">
                    Cart items: {items.length}
                </span>
            </div>
        </nav>
    );
};

export default Navbar;

