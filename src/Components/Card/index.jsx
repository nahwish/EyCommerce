import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";

const Card = (props) => {
  const { category, images, title, price } = props;
  const { name } = category;
  const {
    increment,
    openProductDetail,
    setProductToShow,
    setCartProduct,
    cartProduct,
  } = useContext(ShoppingCartContext);

  const showProduct = (productData) => {
    openProductDetail();
    setProductToShow(productData);
  };
  const AddProductToCart = (product) => {
    setCartProduct([...cartProduct, product]);
    increment();
  };
console.log(cartProduct)
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
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
};

export default Card;
