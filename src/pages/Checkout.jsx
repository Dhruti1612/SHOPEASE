import './checkout-header.css'
import './Checkout.css'
import { useCart } from '../../context/CartContext.jsx'
import { useState  } from 'react'
import dayjs from 'dayjs'
import CartItem from '../components/Cartitem'
import { PaymentSummary } from '../components/PaymentSummary'

export function Checkout() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, placeOrder } = useCart()
  const [deliveryOptions, setDeliveryOptions] = useState({})

  const getShippingCost = () => {
    return cartItems.reduce((total, item) => {
      const option = deliveryOptions[item.id] || 'free'
      const cost = option === 'free' ? 0 : option === 'standard' ? 499 : 999
      return total + cost
    }, 0)
  }

  const shippingCost = getShippingCost()
  const subtotal = getTotalPrice() / 100
  const tax = subtotal * 0.1
  const total = subtotal + shippingCost / 100 + tax

  const handlePlaceOrder = () => {
    const missingOptions = cartItems.filter(item => !deliveryOptions[item.id])
    if (missingOptions.length > 0) {
      alert('Please select a delivery option for all items.')
      return
    }

    const confirmed = window.confirm('Are you sure you want to place this order?')
    if (confirmed) {
      placeOrder(deliveryOptions)
      alert('Order placed successfully!')
      window.location.href = '/orders'
    }
  }

  if (cartItems.length === 0) {
    return (
      <>
        <title>Checkout</title>
        <div className="checkout-header">
          <div className="header-content">
            <div className="checkout-left-header">
              <a href="/">
                <img className="logo" src="images/logo.png" />
                <img className="logo-mobile" src="images/mobile-logo-green.png" />
              </a>
            </div>
            <div className="checkout-middle-header">
              Checkout (<a className="return-home-link" href="/">0 items</a>)
            </div>
            <div className="checkout-right-header">
              <img src="images/icons/checkout-lock-icon.png" />
            </div>
          </div>
        </div>
        <div className="checkout-page">
          <div className="page-title">Your cart is empty</div>
          <a href="/" className="button-primary">Continue Shopping</a>
        </div>
      </>
    )
  }

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-left-header">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="logo-mobile" src="images/mobile-logo-green.png" />
            </a>
          </div>
          <div className="checkout-middle-header">
            Checkout (<a className="return-home-link" href="/">{cartItems.length} items</a>)
          </div>
          <div className="checkout-right-header">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review Your Order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-container">
                <div className="delivery-date">
                  Delivery date: {(() => {
                    const option = deliveryOptions[item.id] || 'free'
                    const days = option === 'free' ? 3 : option === 'standard' ? 4 : 5
                    return dayjs().add(days, 'day').format('dddd, MMMM D')
                  })()}
                </div>

                <div className="cart-item-grid">
                  <img className="product-image" src={item.image} />

                  <CartItem
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a Delivery Option:
                    </div>
                    <div className="delivery-option">
                      <input
                        type="radio"
                        checked={(deliveryOptions[item.id] || 'free') === 'free'}
                        className="delivery-option-input"
                        name={`Delivery-Option-${item.id}`}
                        onChange={() => setDeliveryOptions(prev => ({ ...prev, [item.id]: 'free' }))}
                      />
                      <div>
                        <div className="delivery-option-date">
                          {dayjs().add(3, 'day').format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">Free Shipping</div>
                      </div>
                    </div>

                    <div className="delivery-option">
                      <input
                        type="radio"
                        checked={(deliveryOptions[item.id] || 'free') === 'standard'}
                        className="delivery-option-input"
                        name={`Delivery-Option-${item.id}`}
                        onChange={() => setDeliveryOptions(prev => ({ ...prev, [item.id]: 'standard' }))}
                      />
                      <div>
                        <div className="delivery-option-date">
                          {dayjs().add(4, 'day').format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">₹{(4.99 * 83).toFixed(2)} - Shipping</div>
                      </div>
                    </div>

                    <div className="delivery-option">
                      <input
                        type="radio"
                        checked={(deliveryOptions[item.id] || 'free') === 'express'}
                        className="delivery-option-input"
                        name={`Delivery-Option-${item.id}`}
                        onChange={() => setDeliveryOptions(prev => ({ ...prev, [item.id]: 'express' }))}
                      />
                      <div>
                        <div className="delivery-option-date">
                          {dayjs().add(5, 'day').format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">₹{(9.99 * 83).toFixed(2)} - Shipping</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <PaymentSummary
              cartItems={cartItems}
              subtotal={subtotal}
              shippingCost={shippingCost}
              tax={tax}
              total={total}
              handlePlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
    </>
  )
}
