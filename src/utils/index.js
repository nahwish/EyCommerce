/**
 * calcula el precio total de la orden del carrito
 * @param {Array} products array de productos
 * @returns {Number} precio total
 */
export const totalPrice = (products) => {
  let sum =  0;
  products.forEach((prdct) => (sum += prdct.price));
  return sum;
}