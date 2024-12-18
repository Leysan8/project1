import React from 'react';
import './ConfigurationSummary.css'; 

const ConfigurationSummary = ({ configuration }) => {
  const totalPrice = Object.values(configuration).reduce(
    (sum, item) => sum + (item?.price || 0),
    0
  );

  return (
    <div className="configuration-summary">
      <h2>Итоговая конфигурация</h2>
      <div className="summary-items">
        {Object.entries(configuration).map(([key, item]) => (
          <div key={key} className="summary-item">
            <span className="item-category">{key}:</span>
            <span className="item-name">{item?.name || 'Не выбрано'}</span>
            <span className="item-price">{item?.price || 0} ₽</span>
          </div>
        ))}
      </div>
      <div className="total-price">
        <strong>Итого:</strong> {totalPrice} ₽
      </div>
    </div>
  );
};

export default ConfigurationSummary;
  