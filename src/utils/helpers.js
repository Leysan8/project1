export const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  export const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  };
  
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  