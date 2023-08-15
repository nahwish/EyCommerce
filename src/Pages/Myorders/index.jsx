import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { useContext } from "react";
import { CheckoutContext } from "../../Context/checkoutContext";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(CheckoutContext);

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
        {order.map((order, index) => {
          return (
            <Link to={`/my-orders/${index}`} key={index}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
                dateOfOrder={order?.date || ""}
              />
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export default MyOrders;
