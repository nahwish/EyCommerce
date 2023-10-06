import { createContext, useState, useEffect } from "react";
import {filter} from "../utils/filter"

/**
 * Contexto de filtrado de productos que proporciona funcionalidad para filtrar productos por título y categoría.
 * @typedef {Object} FilterProductContextType
 * @property {Array} filteredItems - Lista de productos filtrados.
 * @property {Array} items - Lista de todos los productos.
 * @property {Function} setItems - Función para establecer la lista de todos los productos.
 * @property {Function} setSearchByTitle - Función para establecer el criterio de búsqueda por título.
 * @property {string} searchByTitle - Criterio de búsqueda por título.
 * @property {Function} setSearchByCategory - Función para establecer el criterio de búsqueda por categoría.
 * @property {string} searchByCategory - Criterio de búsqueda por categoría.
 */

export const FilterProductContext = createContext();

/**
 * Proveedor de contexto de filtrado de productos que contiene la lógica y el estado relacionados con el filtrado de productos.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos.
 * @returns {React.ReactNode} - El contexto de filtrado de productos y los componentes hijos.
 */

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
