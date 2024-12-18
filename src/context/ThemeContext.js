import React, { createContext, useState, useContext, useEffect } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff',
    secondary: '#6c757d'
  },
  dark: {
    background: '#121212',
    text: '#ffffff',
    primary: '#0d6efd',
    secondary: '#6c757d'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [theme, setTheme] = useState(themes[themeName]);

  useEffect(() => {
    localStorage.setItem('theme', themeName);
    setTheme(themes[themeName]);
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      themeName, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
