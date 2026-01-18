import React from 'react';
import QuantityUpdater from './QuantityUpdater';
import RemoveFromCart from './RemoveFromCart';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleUpdate = () => {
    const newQuantity = prompt('Enter new quantity:', item.quantity);
    if (newQuantity && !isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(item.id, Number(newQuantity));
    }
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-items-detail">
      <div className="product-name">{item.name}</div>
      <div className="product-price">₹{((item.priceCents / 100) * 83).toFixed(2)}</div>
      <div className="product-quantity">
        <span>
          Quantity: <span className="quantity-label">{item.quantity}</span>
        </span>
        <button className="quantity-btn" onClick={handleDecrease}>-</button>
        <button className="quantity-btn" onClick={handleIncrease}>+</button>
        <span
          className="update-cart-quantity primary-link"
          onClick={handleUpdate}
        >
          Update
        </span>
        <span
          className="delete-cart-quantity primary-link"
          onClick={handleDelete}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default CartItem;
