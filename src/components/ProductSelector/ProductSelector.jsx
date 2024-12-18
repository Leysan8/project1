import React from 'react';
import './ProductSelector.css';

const ProductSelector = ({ category, products, onSelect }) => {
  return (
    <div className="product-selector">
      <h2>{category}</h2>
      <div className="products-list">
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-item"
            onClick={() => onSelect(product)}
          >
            <h3>{product.name}</h3>
            <p>{product.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelector;
