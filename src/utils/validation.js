export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  export const validateName = (name) => {
    return name.length >= 2;
  };
  
  export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.name) errors.name = 'Имя обязательно';
    if (!formData.email) errors.email = 'Email обязателен';
    if (!validateEmail(formData.email)) errors.email = 'Некорректный email';
    if (!formData.message) errors.message = 'Сообщение обязательно';
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  