import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items } = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {items?.map(({ category, images, title, price, id }, index) => (
            <Card
              category={category}
              images={images}
              title={title}
              key={index}
              price={price}
              id={id}
            />
          ))}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
