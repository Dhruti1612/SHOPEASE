 import './header.css'
 import './Tracking.css'
 import { useParams } from 'react-router'
 import { useCart } from '../../context/CartContext.jsx'
 import dayjs from 'dayjs'

 export function Tracking () {
  const { orderId } = useParams()
  const { orders, getTotalItems } = useCart()
  const order = orders.find(o => o.id === orderId)
  return (
    <>
    <title>Tracking</title>
    <div className="header">
      <div className="left-section">
        <a href="/" className="header-link">
          <img className="logo" src="/images/logo-white.png" />
          <img className="mobile-logo" src="/images/mobile-logo-white.png" />
        </a>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-icon" src="/images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <a className="orders-link header-link" href="/orders">
          <span className="orders-text">Orders</span>
        </a>

        <a className="cart-link header-link" href="/checkout">
          <img className="cart-icon" src="/images/icons/cart-icon.png" />
          <div className="cart-quantity">{getTotalItems()}</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </div>

    <div className="tracking-page">
      {order ? (
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            Arriving on {dayjs(order.date).add(order.deliveryDays, 'day').format('dddd, MMMM D')}
          </div>

          {order.items.map((item) => (
            <div key={item.id}>
              <div className="product-info">
                {item.name}
              </div>

              <div className="product-info">
                Quantity: {item.quantity}
              </div>

              <img className="product-image" src={`/${item.image}`} />
            </div>
          ))}

          <div className="progress-labels-container">
            <div className="progress-label">
              Preparing
            </div>
            <div className="progress-label current-status">
              Shipped
            </div>
            <div className="progress-label">
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      ) : (
        <div className="no-order">Order not found or not placed</div>
      )}
    </div>
    </>
  )
}
