class LocalStorageService {
    static setItem(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error saving to localStorage', error);
      }
    }
  
    static getItem(key) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error('Error reading from localStorage', error);
        return null;
      }
    }
  
    static removeItem(key) {
      localStorage.removeItem(key);
    }
  
    static clear() {
      localStorage.clear();
    }
  
    // Специфичные методы
    static saveAuthToken(token) {
      this.setItem('token', token);
    }
  
    static getAuthToken() {
      return this.getItem('token');
    }
  
    static removeAuthToken() {
      this.removeItem('token');
    }
  
    static saveUserData(userData) {
      this.setItem('userData', userData);
    }
  
    static getUserData() {
      return this.getItem('userData');
    }
  
    static saveConfiguration(config) {
      this.setItem('savedConfiguration', config);
    }
  
    static getSavedConfiguration() {
      return this.getItem('savedConfiguration');
    }
  }
  
  export default LocalStorageService;
  