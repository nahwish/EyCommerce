import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  // Increment quantity
  const [ count, setCount ] = useState( 0 );
  // Product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Checkout 
    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);
  //ShowProduct
  const [ productToShow,setProductToShow ] = useState({})
  //ShoppingCart
  const [cartProduct, setCartProduct] = useState([]);

  const increment = () => {
    setCount( count + 1 )
  }

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
  };
  return (
    <ShoppingCartContext.Provider value={contextValue }>
      {children}
    </ShoppingCartContext.Provider>
  )}
