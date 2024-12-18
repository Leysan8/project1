import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>О компании</h4>
          <p>© 2024 Ваша Компания. Все права защищены.</p>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Email: support@company.com</p>
          <p>Телефон: +7 (999) 123-45-67</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
