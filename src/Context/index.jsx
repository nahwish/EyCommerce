import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Increment quantity
  const [count, setCount] = useState(0);
  // Product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Checkout
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);
  //ShowProduct
  const [productToShow, setProductToShow] = useState({});
  //ShoppingCart
  const [cartProduct, setCartProduct] = useState([]);

  // Order
  const [order, setOrder] = useState([]);
  //get Products
  const [items, setItems] = useState([]);
  const API = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    try {
      async function fetchData(URL) {
        let result = await fetch(URL);
        let data = await result.json();
        setItems(data);
      }
      fetchData(API);
    } catch (error) {
      console.log("Error ->", error);
    }
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const contextValue = {
    increment,
    count,
    openProductDetail,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setProductToShow,
    cartProduct,
    setCartProduct,
    openCheckoutMenu,
    closeCheckoutMenu,
    isCheckoutMenuOpen,
    setOrder,
    order,
    items,
    setItems,
  };
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
