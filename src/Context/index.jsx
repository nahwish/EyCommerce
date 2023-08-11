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
  const [filteredItems, setfilteredItems] = useState([]);
  // Search
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");

  const filteredItemsByTitle = (items, searchtitle) =>
    items?.filter((item) =>
      item.title.toLowerCase().includes(searchtitle.toLowerCase())
    );
  const filteredItemsByCategory = (items, searchCategory) =>
    items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchCategory.toLowerCase())
    );
console.log("items:",items)
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByTitle(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if(!searchType){
      return items;
    }
  };
  useEffect(() => {
    if (searchByTitle && !searchByCategory)
      setfilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (searchByTitle && searchByCategory)
      setfilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByCategory && !searchByTitle)
      setfilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByCategory && !searchByTitle)
      setfilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  const API = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    try {
      async function fetchData(URL) {
        let result = await fetch(URL);
        let data = await result.json();
        console.log("useEffect:", data)
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
    setSearchByTitle,
    searchByTitle,
    filteredItems,
    searchByCategory,
    setSearchByCategory,
  };
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
