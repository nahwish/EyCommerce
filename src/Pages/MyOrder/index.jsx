import Layout from "../../Components/Layout";
import { useContext } from "react";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
    const { order } = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        MyOrder!
        <div className="flex flex-col w-80">
          {order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              product={product}
              key={product.id}
              id={product.id}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
