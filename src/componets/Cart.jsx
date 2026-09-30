import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div className="card cart">
      <div className="card-header">
        <h2 className="mb-0">Shopping Cart</h2>
      </div>
      <div className="card-body">
        {cart.cakes.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.cakes.map(cake => (
                <li key={cake.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{cake.name}</strong>
                    <span className="cart-qty"> × {cake.quantity}</span>
                    <div className="cart-line-price">{cake.price * cake.quantity} kr.</div>
                  </div>
                  <button
                    className="btn btn-remove"
                    onClick={() => dispatch(removeFromCart(cake.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <p><span>Total Items</span> <span>{cart.totalItems}</span></p>
              <p className="mb-0 cart-total"><span>Total Price</span> <span>{cart.totalPrice} kr.</span></p>
            </div>

            <button
              className="btn btn-clear w-100"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
