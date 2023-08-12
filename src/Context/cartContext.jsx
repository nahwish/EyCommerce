import { createContext, useState, useContext } from "react";
import { CheckoutContext } from "./index";
export const ShoppingCartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { openCheckoutMenu, closeCheckoutMenu } = useContext(CheckoutContext);
  // Increment quantity
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  //ShoppingCart
  const [cartProduct, setCartProduct] = useState([]);
  //ShowProduct
  const [productToShow, setProductToShow] = useState({});
  const closeProductDetail = () => setIsProductDetailOpen(false);


  // const increment = () => setCount(count + 1);

  const AddProductToCart = (product) => {
    setCount(count + 1);
    setCartProduct([...cartProduct, product]);
    // increment();
    closeProductDetail();
    openCheckoutMenu();
  };

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
