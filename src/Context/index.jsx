import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  const [ count, setCount ] = useState( 0 );


  const increment = () => {
    setCount( count + 1 )
  }

  const contextValue = {increment,count}
  return (
    <ShoppingCartContext.Provider value={contextValue }>
      {children}
    </ShoppingCartContext.Provider>
  )}
