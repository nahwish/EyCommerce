import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { FilterProductContext } from "../../Context/filterProductContext";
import CardHomeView from "../../Components/Home/CardHomeView";

function Home() {
  const { setSearchByTitle, setItems } = useContext(FilterProductContext);

  const API = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    try {
      async function fetchData(URL) {
        let result = await fetch(URL);
        let data = await result.json();
        console.log("useEffect:", data);
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
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Home</h1>
        </div>
        <input
          type="text"
          placeholder="Buscar"
          className="rounded border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(e) => setSearchByTitle(e.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          <CardHomeView />
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
