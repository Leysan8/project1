import { useState } from 'react';

export const useValidation = (initialState = {}) => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailRegex.test(value) ? 'Некорректный email' : '';
        break;
      case 'name':
        error = value.length < 2 ? 'Имя слишком короткое' : '';
        break;
      case 'message':
        error = value.length < 10 ? 'Сообщение слишком короткое' : '';
        break;
      default:
        break;
    }
    return error;
  };

  const validate = (values) => {
    const newErrors = {};
    Object.keys(values).forEach(key => {
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate, validateField };
};

export default useValidation;
