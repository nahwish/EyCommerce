import { createContext, useState, useEffect } from "react";
import {filter} from "../utils/filter"
export const FilterProductContext = createContext();

export const FilterProductProvider = ({ children }) => {
  const [filteredItems, setfilteredItems] = useState([]);
  //get Products
  const [items, setItems] = useState([]);
  //search
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    filter(searchByTitle, searchByCategory, setfilteredItems, items);
    
  }, [items, searchByTitle, searchByCategory]);

  const API = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    try {
      async function fetchData(URL) {
        let result = await fetch(URL);
        let data = await result.json();
        console.log("useEffect:", data);
        setItems(data);
      }
      fetchData(API);
    } catch (error) {
      console.log("Error ->", error);
    }
  }, []);
  const contextValue = {
    filteredItems,
    items,
    setItems,
    setSearchByTitle,
    searchByTitle,
    searchByCategory,
    setSearchByCategory,
  };
  return (
    <FilterProductContext.Provider value={contextValue}>
      {children}
    </FilterProductContext.Provider>
  );
};
