import React from 'react';
import './CartItem.css'; // Добавьте стиль для компонентов

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.price} ₽</p>
      </div>
    </div>
  );
};

export default CartItem;
