import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import '../pages/header.css';

export function Header() {
  const { getTotalItems } = useCart();
  const { logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="header">
      <div className="left-section">
        <a href="/" className="header-link">
          <img className="logo" src="images/logo-white.png" alt="ShopEase Logo" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" alt="ShopEase Mobile Logo" />
        </a>
      </div>

      <div className="middle-section">
        <form onSubmit={handleSearch}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            <img className="search-icon" src="images/icons/search-icon.png" alt="Search" />
          </button>
        </form>
      </div>

      <div className="right-section">
        <a className="orders-link header-link" href="/orders">
          <span className="orders-text">Orders</span>
        </a>

        <a className="cart-link header-link" href="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" alt="Cart" />
          <div className="cart-quantity">{getTotalItems()}</div>
          <div className="cart-text">Cart</div>
        </a>

        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
