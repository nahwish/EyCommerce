import { useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [ items, setItems ] = useState([]);

  const API = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    try {
      async function fetchData(URL) {
        let result = await fetch(URL);
        let data = await result.json();
        setItems(data);
      }
      fetchData(API);
    } catch (error) {
      console.log("Error ->", error);
    }
  }, []);
  
  return (
    <>
      <Layout>
        Home!!
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map(({ category,images,title },index) => (
          <Card category={category} images={images} title={title} key={index}/>
        ))}

        </div>
        <ProductDetail/>
      </Layout>
    </>
  );
}

export default Home;
