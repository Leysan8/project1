import React, { createContext, useReducer, useContext } from 'react';

// Начальное состояние
const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

// Редьюсер для управления состоянием корзины
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      let updatedItems;
      if (existingItemIndex > -1) {
        // Если товар уже есть в корзине, увеличиваем количество
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
      } else {
        // Добавляем новый товар
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.price
      };
    }

    case 'REMOVE_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem.quantity === 1) {
        // Если количество 1, удаляем товар полностью
        updatedItems = state.items.filter(item => item.id !== action.payload);
      } else {
        // Уменьшаем количество
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1
        };
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - existingItem.price
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

// Создаем контекст
const CartContext = createContext();

// Провайдер контекста
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Действия для работы с корзиной
  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Значение контекста
  const contextValue = {
    cart: cartState.items,
    totalQuantity: cartState.totalQuantity,
    totalAmount: cartState.totalAmount,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста корзины
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
