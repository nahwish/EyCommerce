import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items, setSearch, search, filteredItems } =
    useContext(ShoppingCartContext);

  const renderView = () =>{
    if(search?.length > 0){
      if( filteredItems?.length > 0){
        return filteredItems?.map(({ category, images, title, price, id }, index) => (
          <Card
            category={category}
            images={images}
            title={title}
            key={index}
            price={price}
            id={id}
          />
        ))

      }else{
        return <div>No existe</div>
      }
     
    }else{
      return items?.map(({ category, images, title, price, id }, index) => (
        <Card
          category={category}
          images={images}
          title={title}
          key={index}
          price={price}
          id={id}
        />
      ));
    }

  }
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Home</h1>
        </div>
        <input
          type="text"
          placeholder="Buscar"
          className="rounded border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
