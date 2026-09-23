import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state);

  return (
    <div className="card">
      <div className="card-header bg-success text-white">
        <h2 className="mb-0">🛒 Shopping Cart</h2>
      </div>
      <div className="card-body">
        {cart.cakes.length === 0 ? (
          <p className="text-muted">Cart is empty</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.cakes.map(cake => (
                <li key={cake.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{cake.name}</strong> - ${cake.price}
                  </div>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(cake.id))}
                  >

                  Remove
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="alert alert-info">
              <p><strong>Total Items:</strong> {cart.totalItems}</p>
              <p className="mb-0"><strong>Total Price:</strong> ${cart.totalPrice}</p>
            </div>
            
            <button 
              className="btn btn-warning w-100"
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
