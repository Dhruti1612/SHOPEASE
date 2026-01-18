import React from 'react';

const QuantityUpdater = ({ item, updateQuantity, removeFromCart }) => {
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
  );
};

export default QuantityUpdater;
