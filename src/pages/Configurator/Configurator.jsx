import React, { useState } from 'react';
import ProductSelector from '../../components/ProductSelector/ProductSelector';
import ConfigurationSummary from '../../components/ConfigurationSummary/ConfigurationSummary';
import './Configurator.css';

const Configurator = () => {
  const [configuration, setConfiguration] = useState({});

  const categories = {
    processors: [
      { id: 1, name: 'Intel Core i5', price: 20000 },
      { id: 2, name: 'AMD Ryzen 5', price: 18000 }
    ],
    graphics: [
      { id: 3, name: 'NVIDIA RTX 3060', price: 35000 },
      { id: 4, name: 'AMD RX 6600', price: 30000 }
    ]
  };

  const handleSelect = (category, product) => {
    setConfiguration(prev => ({
      ...prev,
      [category]: product
    }));
  };

  return (
    <div className="configurator-page">
      <h1>Конфигуратор ПК</h1>
      <div className="configurator-content">
        <div className="product-selectors">
          <ProductSelector 
            category="Процессоры"
            products={categories.processors}
            onSelect={(product) => handleSelect('processor', product)}
          />
          <ProductSelector 
            category="Видеокарты"
            products={categories.graphics}
            onSelect={(product) => handleSelect('graphics', product)}
          />
        </div>
        <ConfigurationSummary configuration={configuration} />
      </div>
    </div>
  );
};

export default Configurator;
