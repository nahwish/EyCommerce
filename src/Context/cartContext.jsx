import { createContext,useState,useContext } from "react";
import {CheckoutContext} from "./index";
export const ShoppingCartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { openCheckoutMenu } = useContext(CheckoutContext);
  // Increment quantity
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  //ShoppingCart
  const [cartProduct, setCartProduct] = useState([]);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const increment = () => setCount(count + 1);

  const AddProductToCart = (product) => {
    setCartProduct([...cartProduct, product]);
    increment();
    closeProductDetail();
    openCheckoutMenu();
  };

  const contextValue = {
    AddProductToCart,
    count,
    isProductDetailOpen,
    setIsProductDetailOpen,
    cartProduct,
    setCartProduct,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default CartContextProvider;
