import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import productsData from './products.json';
import './App.css';  // Import the CSS file here

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Cart products={productsData.products} />
      </div>
    </CartProvider>
  );
}

export default App;
