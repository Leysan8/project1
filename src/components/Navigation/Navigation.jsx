import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import cartIcon from '../../assets/icons/cart.svg';
import compareIcon from '../../assets/icons/compare.svg';
import logo from '../../assets/images/logo.png';
import './Navigation.css';

const Navigation = () => {
  const { totalQuantity } = useCart();

  return (
    <nav className="navigation">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/configurator">Конфигуратор</Link>
        <Link to="/support">Поддержка</Link>
      </div>
      <div className="nav-actions">
        <Link to="/cart" className="icon-button">
          <img src={cartIcon} alt="Корзина" className="icon" />
          {totalQuantity > 0 && (
            <span className="cart-badge">{totalQuantity}</span>
          )}
        </Link>
        <button className="icon-button">
          <img src={compareIcon} alt="Сравнить" className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
