import { products } from '../assets/products'
import './Homepage.css'
import { useCart } from '../../context/CartContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Header } from '../components/Header.jsx'

function ProductItem({ product, onAddToCart, addedToCart }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        ₹{((product.priceCents / 100) * 90).toFixed(2)}
      </div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      {addedToCart[product.id] && (
        <div className="added-to-cart">
          <img src="images/icons/checkmark.png" />
          Added
        </div>
      )}

      <button
        className="add-to-cart-button button-primary"
        onClick={() => onAddToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export function Homepage() {
  const { addToCart, getTotalItems } = useCart()
  const { logout } = useAuth()
  const [addedToCart, setAddedToCart] = useState({})
  const navigate = useNavigate()

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity)
    setAddedToCart(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }))
    }, 2000)
  }

  return (
    <>
      <title>ShopEase</title>
      <div className="header">
        <div className="left-section">
          <div className="header-link" onClick={() => navigate('/')}>
            <img className="logo" src="/images/logo-white.png" />
            <img className="mobile-logo" src="/images/mobile-logo-white.png" />
          </div>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">
            <img className="search-icon" src="/images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <div className="orders-link header-link" onClick={() => navigate('/orders')}>
            <span className="orders-text">Orders</span>
          </div>

          <div className="cart-link header-link" onClick={() => navigate('/checkout')}>
            <img className="cart-icon" src="/images/icons/cart-icon.png" />
            <div className="cart-quantity">{getTotalItems()}</div>
            <div className="cart-text">Cart</div>
          </div>

          <div className="orders-link header-link" onClick={logout}>
            <span className="orders-text">Logout</span>
          </div>
        </div>
      </div>

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              addedToCart={addedToCart}
            />
          ))}
        </div>
      </div>
    </>
  )
}
