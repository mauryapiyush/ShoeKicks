import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const cleanPrice = (price) => {
    return Number(price.replace(/[^0-9.-]+/g,"")); 
  };

  const total = cartItems.reduce((sum, item) => sum + cleanPrice(item.price), 0);

  const handleBuy = (item) => {
    alert(`You have bought: ${item.name}`);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-content">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-price">Price: {item.price}</p>
                  <div className="cart-buttons">
                    <button
                      onClick={() => {
                        alert(`You have removed: ${item.name}`);
                        removeFromCart(index);
                      }}
                      className="cart-remove-btn"
                    >
                      Remove from Cart
                    </button>
                    <button
                      onClick={() => handleBuy(item)}
                      className="cart-buy-btn"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="cart-total">Total: ${total}</p>
            <button
              onClick={clearCart}
              className="cart-clear-btn"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
