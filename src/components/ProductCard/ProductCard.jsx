import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onCompare }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Цена: {product.price} руб.</p>
      <div className="card-actions">
        <button onClick={() => onAddToCart(product)}>
          Добавить в корзину
        </button>
        {onCompare && (
          <button onClick={() => onCompare(product)} className="compare-btn">
            Сравнить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
