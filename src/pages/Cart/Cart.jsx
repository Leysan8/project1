import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ApiService from '../../services/api';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';
const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const cartTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity, 
      0
    );
    setTotal(cartTotal);
  };

  const handleCheckout = async () => {
    try {
      await ApiService.createOrder(cart);
      // Очистка корзины, показ success-сообщения
    } catch (error) {
      console.error('Ошибка оформления заказа', error);
    }
  };

  return (
    <div className="cart container">
      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}

          <div className="cart-summary">
            <h3>Итого: {total} ₽</h3>
            <button 
              className="btn btn-primary"
              onClick={handleCheckout}
            >
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
