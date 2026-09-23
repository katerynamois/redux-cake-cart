import './App.css';
import React from 'react';
import CakeList from './componets/CakeList';
import Cart from './componets/Cart';

function App() {
  return (
    <div className="App">
      <h1>Redux Cake Cart</h1>
      <CakeList />
      <Cart />
    </div>
  );
}

export default App;
