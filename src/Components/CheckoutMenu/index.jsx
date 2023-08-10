import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutMenu = () => {
  const { isCheckoutMenuOpen, closeCheckoutMenu, cartProduct, setCartProduct } =
    useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProduct.filter((product) => product.id != id);
    setCartProduct(filteredProducts);
  };

  return (
    <aside
      className={`${
        isCheckoutMenuOpen ? "flex" : "hidden"
      } checkout-menu flex flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div onClick={closeCheckoutMenu}>
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
      <div className="px-6 overflow-y-scroll">
        {cartProduct.map((product) => (
          <OrderCard
            product={product}
            key={product.id}
            handleDelete={handleDelete}
            id={product.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutMenu;
