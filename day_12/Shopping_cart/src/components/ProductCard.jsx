import React from 'react';

// PROPS: Receives 'product' object and 'onAddToCart' function
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <span className="product-category">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="product-price">₹{product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart-btn" 
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;