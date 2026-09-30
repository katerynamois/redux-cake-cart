import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const totalItems = useSelector(state =>state.totalItems);

    return (
        <nav className="navbar-shop">
         <h1 className="logo">Eclaire shop</h1>
        <div className="cart-wrapper">
            <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
            🛒 <span className="cart-count">{totalItems}</span>

            </button>

            {isOpen && (
                <div className="cart-dropdown">
                <Cart />
                </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar;