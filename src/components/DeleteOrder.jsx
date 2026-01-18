import React from 'react';

const DeleteOrder = ({ orderId, deleteOrder }) => {
  const handleDelete = () => {
    deleteOrder(orderId);
  };

  return (
    <button className="delete-order-button button-secondary" onClick={handleDelete}>
      Delete Order
    </button>
  );
};

export default DeleteOrder;
