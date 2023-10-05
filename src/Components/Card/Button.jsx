import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context/cartContext";

/**
 * Componente Button para agregar o quitar un producto del carrito de compras.
 * @function
 * @param {Object} props - Las propiedades del componente.
 * @param {number} id - El ID del producto asociado al botón.
 * @returns {JSX.Element} Elemento JSX que representa el componente Button.
 */

const Button = (props, id) => {
  const { AddProductToCart, cartProduct } = useContext(ShoppingCartContext);
  
  // Comprobar si el producto está en el carrito
  const isInCart =
    cartProduct?.filter((product) => product.id == id).length > 0;

  // Renderizar el botón de acuerdo a si el producto está en el carrito o no
  if (!isInCart) {
    return (
      <button
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 "
        onClick={() => AddProductToCart(props)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-green-700 text-slate-300 border-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    );
  }
};

export default Button;
