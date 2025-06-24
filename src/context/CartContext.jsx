import React, { createContext, useState, useContext } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider component to wrap your app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart or increase quantity if it already exists
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(i => i.name === item.name);
      if (existing) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Remove one quantity of the item; if quantity is 1, remove the item
  const removeFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems
        .map(item =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Provide the cart state and actions to children components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
