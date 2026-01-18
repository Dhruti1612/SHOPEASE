import React from 'react';

const RemoveFromCart = ({ item, removeFromCart }) => {
  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <span
      className="delete-cart-quantity primary-link"
      onClick={handleDelete}
    >
      Delete
    </span>
  );
};

export default RemoveFromCart;
