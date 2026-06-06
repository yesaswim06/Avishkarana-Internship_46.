import React from 'react';

// PROPS: Receives 'cartItems' and 'onRemoveFromCart'
function Cart({ cartItems, onRemoveFromCart }) {
  // Derive the total price directly from the props in the render cycle
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 
    0
  );

  return (
    <aside className="cart-aside">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-qty-price">
                    Qty: {item.quantity} x ${item.price.toFixed(2)}
                  </span>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={() => alert('Proceeding to checkout...')}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Cart;