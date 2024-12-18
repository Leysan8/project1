import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Импортируем провайдер
import HomePage from './pages/HomePage/HomePage';
import Configurator from './pages/Configurator/Configurator';
import Cart from './pages/Cart/Cart';
import Support from './pages/Support/Support';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
