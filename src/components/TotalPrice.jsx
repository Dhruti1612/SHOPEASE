import React from 'react';

const TotalPrice = ({ total }) => {
  return (
    <div className="summary-row total-row">
      <div>Order total:</div>
      <div className="summary-money">₹{(total * 83).toFixed(2)}</div>
    </div>
  );
};

export default TotalPrice;
