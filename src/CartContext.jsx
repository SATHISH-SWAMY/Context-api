import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // handle adding item to cart
      return {
        ...state,
        items: [...state.items, action.payload],
        totalQuantity: state.totalQuantity + action.payload.quantity,
        totalAmount: state.totalAmount + action.payload.quantity * action.payload.price
      };
    case 'UPDATE_QUANTITY':
      // handle updating item quantity
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          const updatedItem = {
            ...item,
            quantity: action.payload.quantity
          };
          return updatedItem;
        }
        return item;
      });

      const totalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      const totalAmount = updatedItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

      return {
        ...state,
        items: updatedItems,
        totalQuantity,
        totalAmount
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
