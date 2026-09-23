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
    <div className="mb-5">
      <div className="row">
        {cakes.map(cake => (
          <div key={cake.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{cake.name}</h5>
                <p className="card-text">Price: <strong>${cake.price}</strong></p>
                <button 
                  className="btn btn-primary w-100"
                  onClick={() => dispatch(addToCart(cake))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeList;
