import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const totalItems = useSelector(state => state.cart.totalItems);

    return (
        <nav className="navbar-shop">
            <h1 className="logo"><Link to="/">Eclaire shop</Link></h1>

            <div className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/checkout">Checkout</NavLink>
            </div>

            <NavLink to="/cart" className="cart-button">
                <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 3h3l2.5 12h11L21 7H6.2" />
                    <path d="M9 10h9M9.5 12.5h8" />
                    <circle cx="9" cy="19.5" r="1.3" />
                    <circle cx="17" cy="19.5" r="1.3" />
                </svg>
                <span>Cart</span>
                <span className="cart-count">{totalItems}</span>
            </NavLink>
        </nav>
    );
};

export default Navbar;
