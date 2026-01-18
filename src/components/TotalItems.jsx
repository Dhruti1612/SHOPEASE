import React from 'react';

const TotalItems = ({ cartItems }) => {
  return (
    <div className="summary-row">
      <div>Items ({cartItems.length}):</div>
      <div className="summary-money">₹{(cartItems.reduce((total, item) => total + (item.priceCents / 100) * 83 * item.quantity, 0)).toFixed(2)}</div>
    </div>
  );
};

export default TotalItems;
