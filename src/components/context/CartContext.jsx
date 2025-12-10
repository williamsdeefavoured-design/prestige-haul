import React, { createContext, useContext, useState } from "react";
import { riders } from "../../data/rider";
  // <-- new import

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // pick random rider
  const getRandomRider = () => {
    const i = Math.floor(Math.random() * riders.length);
    return riders[i];
  };

  const addToCart = (order) => {
    const assignedRider = getRandomRider();

    const finalOrder = {
      ...order,
      riderName: assignedRider.RiderName,
      riderId: assignedRider.RiderId,
      riderImg: assignedRider.RiderImg,
      riderLocation: assignedRider.RiderLocation,
      riderRating: assignedRider.rating,
    };

    setCart((prev) => [...prev, finalOrder]);
  };

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
