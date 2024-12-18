import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

class ApiService {
  static async request(endpoint, method = 'GET', data = null) {
    try {
      const config = {
        method,
        url: `${BASE_URL}/${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getToken()}`
        }
      };

      if (data) {
        config.data = data;
      }

      const response = await axios(config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static getToken() {
    return localStorage.getItem('token') || '';
  }

  static handleError(error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }

  // Методы для работы с продуктами
  static async getProducts(category = null) {
    const endpoint = category 
      ? `products?category=${category}` 
      : 'products';
    return this.request(endpoint);
  }

  static async getProductById(id) {
    return this.request(`products/${id}`);
  }

  // Методы для работы с корзиной
  static async addToCart(productId, quantity) {
    return this.request('cart', 'POST', { productId, quantity });
  }

  static async getCart() {
    return this.request('cart');
  }

  static async removeFromCart(productId) {
    return this.request(`cart/${productId}`, 'DELETE');
  }

  // Методы аутентификации
  static async login(email, password) {
    return this.request('auth/login', 'POST', { email, password });
  }

  static async register(userData) {
    return this.request('auth/register', 'POST', userData);
  }

  // Методы для конфигуратора
  static async checkCompatibility(components) {
    return this.request('configurator/compatibility', 'POST', { components });
  }

  static async saveConfiguration(configuration) {
    return this.request('configurations', 'POST', configuration);
  }
}

export default ApiService;
