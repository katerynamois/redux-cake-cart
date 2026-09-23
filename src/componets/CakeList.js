import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const CakeList = () => {
  const dispatch = useDispatch();

  const cakes = [
    { id: 1, name: 'Chocolate Cake', price: 50 },
    { id: 2, name: 'Vanilla Cake', price: 40 },
    { id: 3, name: 'Strawberry Cake', price: 60 }
  ];

  return (
    <div>
      <h2>Available Cakes</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {cakes.map(cake => (
          <div key={cake.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{cake.name}</h3>
            <p>Price: ${cake.price}</p>
            <button onClick={() => dispatch(addToCart(cake))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeList;
