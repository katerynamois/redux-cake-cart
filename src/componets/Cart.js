import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state);

  return (
    <div style={{ marginTop: '30px', borderTop: '2px solid #333', paddingTop: '20px' }}>
      <h2>Shopping Cart</h2>
      
      {cart.cakes.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.cakes.map(cake => (
              <li key={cake.id} style={{ marginBottom: '10px' }}>
                {cake.name} - ${cake.price}
                <button 
                  onClick={() => dispatch(removeFromCart(cake.id))}
                  style={{ marginLeft: '10px' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total Items: {cart.totalItems}</strong></p>
          <p><strong>Total Price: ${cart.totalPrice}</strong></p>
          <button onClick={() => dispatch(clearCart())} style={{ marginTop: '10px' }}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
