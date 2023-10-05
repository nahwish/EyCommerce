import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/cartContext";
import Button from "./Button";

/**
 * Componente Card para mostrar un producto individual.
 * @function
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.category - La categoría del producto.
 * @param {Array} props.images - Las imágenes del producto.
 * @param {string} props.title - El título del producto.
 * @param {number} props.price - El precio del producto.
 * @param {number} props.id - El ID del producto.
 * @returns {JSX.Element} Elemento JSX que representa el componente Card.
 */

const Card = (props) => {
  const { category, images, title, price, id } = props;
  const { name } = category;
  const { showProduct } = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {name}
        </span>
        <img
          onClick={() => showProduct(props)}
          className="w-full h-full object-cover rounded-lg"
          src={images[0] ? images[0] : ""}
          alt=""
        />
        {Button(props, id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
};

export default Card;
