import React from 'react'
import TotalPrice from './TotalPrice'

export function PaymentSummary({ cartItems, subtotal, shippingCost, tax, total, handlePlaceOrder }) {
  return (
    <div className="payment-summary">
      <div className="payment-title">Payment Summary</div>

      <div className="summary-row">
        <div>Items ({cartItems.length}):</div>
        <div className="summary-money">₹{(subtotal * 90).toFixed(2)}</div>
      </div>

      <div className="summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="summary-money">₹{(shippingCost / 100 * 90).toFixed(2)}</div>
      </div>

      <div className="summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="summary-money">₹{((subtotal + shippingCost / 100) * 90).toFixed(2)}</div>
      </div>

      <div className="summary-row">
        <div>Estimated tax (10%):</div>
        <div className="summary-money">₹{(tax * 90).toFixed(2)}</div>
      </div>

      <TotalPrice total={total} />

      <button className="place-order-button button-primary" onClick={handlePlaceOrder}>
        Place Your Order
      </button>
    </div>
  )
}
