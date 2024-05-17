import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Check if item with same id and size already exists in cart
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.item.id && item.size === action.item.size
      );

      if (existingItemIndex !== -1) {
        // If item exists, update its quantity
        const updatedState = [...state];
        updatedState[existingItemIndex].quantity += action.item.quantity;
        return updatedState;
      } else {
        // If item doesn't exist, add it to cart
        return [...state, action.item];
      }

    case "REMOVE":
      // Remove item from cart
      return state.filter((item) => item.id !== action.itemId);

    case "UPDATE_CART":
      return action.payload;

    case "RESET_CART":
      // Reset cart to an empty array
      return [];

    default:
      console.log("Unknown action type");
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, reducer };
