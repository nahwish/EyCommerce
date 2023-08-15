import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
  // Checkout
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const [order, setOrder] = useState([]);

  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

  const contextValue = {
    openCheckoutMenu,
    closeCheckoutMenu,
    isCheckoutMenuOpen,
    setOrder,
    order,
  };
  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
};
