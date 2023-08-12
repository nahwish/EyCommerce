import { useContext } from "react";
import { CheckoutContext } from "../../Context/index";
import { ShoppingCartContext } from "../../Context/cartContext";

const Card = (props) => {
  const { category, images, title, price, id } = props;
  const { name } = category;
  // const {openProductDetail,setProductToShow,closeCheckoutMenu} = useContext(CheckoutContext);
  const { cartProduct, AddProductToCart, showProduct } =
    useContext(ShoppingCartContext);


  // const showProduct = (productData) => {
  //   closeCheckoutMenu();
  //   openProductDetail();
  //   setProductToShow(productData);
  // };
  // const AddProductToCart = (product) => {
  //   setCartProduct([...cartProduct, product]);
  //   increment();
  //   closeProductDetail();
  //   openCheckoutMenu();

  // };

  const renderIcon = (id) => {
    const isInCart =
      cartProduct?.filter((product) => product.id == id).length > 0;

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
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
};

export default Card;
