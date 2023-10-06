"use client"
import { createContext, useState, useContext } from "react";
import { CheckoutContext } from "./checkoutContext";


/**
 * Contexto del carrito de compras que proporciona funcionalidad para agregar productos al carrito y mostrar detalles de productos.
 * @typedef {Object} CartContextType
 * @property {Function} AddProductToCart - Función para agregar un producto al carrito.
 * @property {number} count - Cantidad total de productos en el carrito.
 * @property {boolean} isProductDetailOpen - Estado que indica si los detalles del producto están abiertos.
 * @property {Function} setIsProductDetailOpen - Función para establecer el estado de los detalles del producto.
 * @property {Array} cartProduct - Lista de productos en el carrito.
 * @property {Function} setCartProduct - Función para establecer la lista de productos en el carrito.
 * @property {Function} showProduct - Función para mostrar los detalles de un producto.
 * @property {Object} productToShow - Datos del producto que se muestra en detalle.
 * @property {Function} closeProductDetail - Función para cerrar los detalles del producto.
*/

export const ShoppingCartContext = createContext();

/**
 * Proveedor de contexto del carrito de compras que contiene la lógica y el estado relacionados con el carrito de compras.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos.
 * @returns {React.ReactNode} - El contexto del carrito de compras y los componentes hijos.
 */

const CartContextProvider = ({ children }) => {
  const { openCheckoutMenu, closeCheckoutMenu } = useContext(CheckoutContext);
  
  // Increment quantity
  let [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  //ShoppingCart
  const [cartProduct, setCartProduct] = useState([]);

  //ShowProduct
  const [productToShow, setProductToShow] = useState({});
  const closeProductDetail = () => setIsProductDetailOpen(false);

  /**
   * Agrega un producto al carrito y realiza acciones adicionales, como cerrar los detalles del producto y abrir el menú de pago.
   * @param {Object} product - Datos del producto a agregar al carrito.
   */

  const AddProductToCart = (product) => {
    setCount(count + 1);
    setCartProduct([...cartProduct, product]);
    closeProductDetail();
    openCheckoutMenu();
  };

  /**
   * Muestra los detalles de un producto y realiza acciones adicionales, como cerrar el menú de pago.
   * @param {Object} productData - Datos del producto que se mostrarán en detalle.
   */

  const showProduct = (productData) => {
    closeCheckoutMenu();
    setIsProductDetailOpen(true);
    setProductToShow(productData);
  };

  const contextValue = {
    AddProductToCart,
    count,
    isProductDetailOpen,
    setIsProductDetailOpen,
    cartProduct,
    setCartProduct,
    showProduct,
    productToShow,
    closeProductDetail,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default CartContextProvider;
