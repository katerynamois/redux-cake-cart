import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const API_URL = 'https://6abe4f88c4d5ac54830261cc.mockapi.io/eclairs';

const CakeList = () => {
  const dispatch = useDispatch();
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Could not load éclairs. Please try again later.');
        return res.json();
      })
      .then(data => {
        setCakes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="shop-message">Loading éclairs…</p>;
  if (error) return <p className="shop-message">{error}</p>;

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
