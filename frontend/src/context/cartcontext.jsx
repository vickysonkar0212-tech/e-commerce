import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  // ✅ EXISTING: Add to cart (UNCHANGED)
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🆕 ADD: Increase Quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 🆕 ADD: Decrease Quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🆕 ADD: Remove Item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ EXISTING: Place Order (UNCHANGED)
  const placeOrder = (paymentMethod, totalAmount) => {
    const newOrder = {
      id: "ORD" + Date.now(),
      items: cart,
      paymentMethod,
      amount: totalAmount,
      date: new Date().toLocaleString(),
      status: 0,
    };

    setOrderHistory((prev) => [...prev, newOrder]);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,     // ✅ added
        decreaseQty,     // ✅ added
        removeFromCart,  // ✅ added
        placeOrder,
        orderHistory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

