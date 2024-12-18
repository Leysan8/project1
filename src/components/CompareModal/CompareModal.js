import React from 'react';
import './CompareModal.css';

const CompareModal = ({ items, onClose }) => {
  return (
    <div className="compare-modal">
      <div className="compare-content">
        <h2>Сравнение компонентов</h2>
        <div className="compare-grid">
          {items.map(item => (
            <div key={item.id} className="compare-item">
              <h3>{item.name}</h3>
              <p>Цена: {item.price} руб.</p>
              <div className="compare-stats">
                <div className="stat-bar">
                  <span>Производительность:</span>
                  <div 
                    className="progress-bar" 
                    style={{width: `${item.power}%`}}
                  >
                    {item.power}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default CompareModal;
