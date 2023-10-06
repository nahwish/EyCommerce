import { createContext, useState } from "react";

/**
 * Contexto del menú de pago que proporciona funcionalidad para abrir y cerrar el menú de pago y gestionar los detalles del pedido.
 * @typedef {Object} CheckoutContextType
 * @property {Function} openCheckoutMenu - Función para abrir el menú de pago.
 * @property {Function} closeCheckoutMenu - Función para cerrar el menú de pago.
 * @property {boolean} isCheckoutMenuOpen - Estado que indica si el menú de pago está abierto.
 * @property {Function} setOrder - Función para establecer los detalles del pedido.
 * @property {Array} order - Detalles del pedido.
 */

export const CheckoutContext = createContext();

/**
 * Proveedor de contexto del menú de pago que contiene la lógica y el estado relacionados con el menú de pago y los detalles del pedido.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos.
 * @returns {React.ReactNode} - El contexto del menú de pago y los componentes hijos.
 */

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
