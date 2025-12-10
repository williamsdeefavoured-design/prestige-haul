import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add order to cart (original)
  const addToCart = (order) => {
    setCart((prev) => [...prev, order]);
  };

  // Alias for OrderForm so it stops crying
  const saveOrder = (order) => {
    addToCart(order);
  };

  const removeOrder = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, saveOrder, removeOrder, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
