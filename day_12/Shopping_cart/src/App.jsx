import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Mock data representing available products
const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 1999.99, category: 'Electronics' },
  { id: 2, name: 'Smart Watch', price: 2499.99, category: 'Electronics' },
  { id: 3, name: 'Leather Wallet', price: 499.00, category: 'Accessories' },
  { id: 4, name: 'Running Shoes', price: 899.00, category: 'Apparel' },
];

function App() {
  // STATE: This tracks items currently in the cart
  const [cart, setCart] = useState([]);

  // Handler to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If it exists, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it is new, add it to the array with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Handler to remove an item or reduce its quantity
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      
      if (existingItem.quantity === 1) {
        // Remove item entirely if quantity is 1
        return prevCart.filter((item) => item.id !== productId);
      } else {
        // Otherwise, decrement quantity by 1
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <div className="store-container">
      <header className="store-header">
        <h1>Mini E-Commerce Store</h1>
      </header>
      <main className="store-layout">
        {/* COMPONENT: Renders list of products. Passes product data and add handler via PROPS */}
        <ProductList products={PRODUCTS} onAddToCart={addToCart} />
        
        {/* COMPONENT: Renders cart items and calculations. Passes cart state and remove handler via PROPS */}
        <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;