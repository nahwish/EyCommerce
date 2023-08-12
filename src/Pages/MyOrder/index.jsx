import Layout from "../../Components/Layout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderCard from "../../Components/OrderCard";
import { CheckoutContext } from "../../Context";

function MyOrder() {
    const { order } = useContext(CheckoutContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if(index == "last") index = order?.length -1;

  return (
    <>
      <Layout>
        <div className="flex w-80 items-center relative justify-center mb-2">
          <Link to="/my-orders" className="absolute left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <h2>MyOrder</h2>
        </div>
        <div className="flex flex-col w-80">
          {order?.[index]?.products.map((product) => (
            <OrderCard product={product} key={product.id} id={product.id} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
