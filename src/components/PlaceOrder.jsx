import React from 'react';

const PlaceOrder = ({ handlePlaceOrder }) => {
  return (
    <button className="place-order-button button-primary" onClick={handlePlaceOrder}>
      Place Your Order
    </button>
  );
};

export default PlaceOrder;
