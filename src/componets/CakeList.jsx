import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const CakeList = () => {
  const dispatch = useDispatch();

  const cakes = [
    { id: 1, name: 'Raspberry Éclair', description: 'Raspberry cream, freeze-dried raspberries', price: 45, image: '/images/raspberry.png' },
    { id: 2, name: 'Coffee Éclair', description: 'Espresso cream, cocoa nibs', price: 42, image: '/images/coffee.png' },
    { id: 3, name: 'Chocolate Éclair', description: 'Vanilla custard, dark chocolate glaze', price: 42, image: '/images/chocolate.png' },
    { id: 4, name: 'Vanilla Éclair', description: 'Madagascar vanilla cream, chocolate drizzle', price: 40, image: '/images/vanilla.png' },
    { id: 5, name: 'Salted Caramel Éclair', description: 'Caramel cream, flaky sea salt', price: 45, image: '/images/salted-caramel.png' },
    { id: 6, name: 'Pistachio Éclair', description: 'Pistachio cream, roasted pistachios', price: 48, image: '/images/pistachio.png' }
  ];

  return (
    <div className="mb-5">
      <div className="row g-4">
        {cakes.map(cake => (
          <div key={cake.id} className="col-sm-6 col-lg-4">
            <div className="card h-100">
              <img src={cake.image} alt={cake.name} className="cake-image" />
              <div className="card-body">
                <h5 className="card-title">{cake.name}</h5>
                <p className="card-text">{cake.description}</p>
                <p className="price">{cake.price} kr.</p>
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
