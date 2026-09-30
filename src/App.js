import React from 'react';
import CakeList from './componets/CakeList';
import Navbar from './componets/Navbar';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <CakeList />
      </div>
    </div>
  );
}

export default App;
