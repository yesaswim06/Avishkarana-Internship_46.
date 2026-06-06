import React from 'react';
import ProductCard from './ProductCard';

// PROPS: Receives 'products' array and 'onAddToCart' callback function
function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-list-section">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          // COMPONENT: Renders individual product card
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;