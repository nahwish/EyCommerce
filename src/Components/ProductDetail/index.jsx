import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/cartContext";
import "./styles.css";

const ProductDetail = () => {

  const { isProductDetailOpen, productToShow, closeProductDetail } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">{productToShow.title}</h2>
        <div onClick={closeProductDetail}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.images && productToShow.images[0]}
          alt={productToShow.title}
        />
        <p className="flex flex-col p-6">
          <span className="font-medium text-md">{productToShow.title}</span>
          <span className="font-medium text-2xl">${productToShow.price}</span>
        </p>
      </figure>
    </aside>
  );
};

export default ProductDetail;
