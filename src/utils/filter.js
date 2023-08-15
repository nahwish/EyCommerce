/**
 * Función para filtrar por titulo
 * @param {Array} items estados con los productos a filtrar
 * @param {String} searchTitle string recolectado del input
 * @returns {Array} array con los elementos filtrados
 */
const filteredItemsByTitle = (items, searchTitle) =>
  items?.filter((item) =>
    item.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

/**
 * Función para filtrar por categoria
 * @param {Array} items estado con los productos a filtrar
 * @param {String} searchCategory string con una categoria
 * @returns {Array} array con los elementos filtrados
 */
const filteredItemsByCategory = (items, searchCategory) =>
  items?.filter((item) =>
    item.category.name.toLowerCase().includes(searchCategory.toLowerCase())
  );

/**
 *
 * @param {Array} items estado con los productos a filtrar
 * @param {String} searchTitle string recolectado del input
 * @param {String} searchCategory string con una categoria
 * @returns {Array} array con los elementos filtrados
 */
const filterByTitleAndCategory = (items, searchTitle, searchCategory) =>
  items?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      item.category.name.toLowerCase().includes(searchCategory.toLowerCase())
  );
/**
 * Funcion que devuelve un array con los items filtrados, por defecto
 * devuelve los items completos,en el caso que solo se busque por titulo
 * se utiliza {filteredItemsByTitle} si se busca solo por categoria se 
 * utiliza {filteredItemsByCategory} y si se 
 * busca por ambos, se ejecuta {filterByTitleAndCategory}
 * @param {String} searchByTitle
 * @param {String} searchByCategory
 * @param {Function} setFilteredItems
 * @param {Array} items
 */
export const filter = (
  searchByTitle,
  searchByCategory,
  setFilteredItems,
  items
) => {
  setFilteredItems(
    !searchByTitle && !searchByCategory
      ? items
      : searchByTitle && !searchByCategory
      ? filteredItemsByTitle(items, searchByTitle)
      : !searchByTitle && searchByCategory
      ? filteredItemsByCategory(items, searchByCategory)
      : filterByTitleAndCategory(items, searchByTitle, searchByCategory)
  );
};
