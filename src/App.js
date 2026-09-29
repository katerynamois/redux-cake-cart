import React from 'react';
import CakeList from './componets/CakeList';
import Cart from './componets/Cart';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Eclaire shop</h1>
        <CakeList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
