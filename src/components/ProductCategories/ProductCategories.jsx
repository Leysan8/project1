import React from 'react';

const ProductCategories = () => {
  const categories = [
    'Процессоры',
    'Видеокарты',
    'Материнские платы',
    'Память'
  ];

  return (
    <div className="product-categories">
      <h2>Категории продуктов</h2>
      <div className="categories-list">
        {categories.map(category => (
          <div key={category} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
