import './header.css'
import './Orders.css'
import { useCart } from '../../context/CartContext.jsx'
import dayjs from 'dayjs'

export function Orders() {
  const { orders, addToCart, getTotalItems, deleteOrder } = useCart()
  return (
    <>
      <div className="header">
        <div className="left-section">
          <a href="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </a>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{getTotalItems()}</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.length === 0 ? (
            <div className="no-orders">Order is not placed</div>
          ) : (
            <>
            <div className="order-status">Order is placed</div>
            {orders.map((order) => (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="left-section">
                    <div className="order-date">
                      <div className="order-label">Order Placed:</div>
                      <div>{dayjs(order.date).format('MMMM D')}</div>
                    </div>
                    <div className="order-total">
                      <div className="header-label">Total:</div>
                      <div>₹{(order.total * 90).toFixed(2)}</div>
                    </div>
                  </div>

                  <div className="right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                {order.items.map((item) => (
                  <div key={item.id} className="order-details-grid">
                    <div className="product-image-container">
                      <img src={item.image} />
                    </div>

                    <div className="product-details">
                      <div className="product-name">{item.name}</div>
                      <div className="product-delivery-date">
                        Arriving on: {dayjs(order.date).add(order.deliveryDays, 'day').format('dddd, MMMM D')}
                      </div>
                      <div className="product-quantity">Quantity: {item.quantity}</div>
                      <button className="buy-again-button button-primary" onClick={() => addToCart(item, item.quantity)}>
                        <img className="buy-again-icon" src="images/icons/buy-again.png" />
                        <span className="buy-again-message">Add to Cart</span>
                      </button>
                    </div>

                    <div className="product-actions">
                      <a href={`/tracking/${order.id}`}>
                        <button className="track-package-button button-secondary">
                          Track package
                        </button>
                      </a>
                      <button className="delete-order-button button-secondary" onClick={() => deleteOrder(order.id)}>
                        Delete Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
