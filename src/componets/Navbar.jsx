import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const totalItems = useSelector(state => state.cart.totalItems);

    return (
        <nav className="navbar-shop">
         <h1 className="logo">Eclaire shop</h1>
        <div className="cart-wrapper">
            <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
                <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 3h3l2.5 12h11L21 7H6.2" />
                    <path d="M9 10h9M9.5 12.5h8" />
                    <circle cx="9" cy="19.5" r="1.3" />
                    <circle cx="17" cy="19.5" r="1.3" />
                </svg>
                <span>Cart</span>
                <span className="cart-count">{totalItems}</span>
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