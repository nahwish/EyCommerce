import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { FilterProductContext } from "../../Context/filterProductContext";
import CardHomeView from "../../Components/Home/CardHomeView";

/**
 * Componente que representa la página principal de la aplicación.
 * @component
 */

function Home() {
  const { setSearchByTitle, setItems } = useContext(FilterProductContext);

  const API = "https://api.escuelajs.co/api/v1/products";

  /**
   * Función asincrónica para obtener datos de la API y establecer los productos en el contexto de filtrado.
   * @async
   * @param {string} URL - URL de la API para obtener productos.
   */

  useEffect(() => {
    try {
      async function fetchData(URL) {
        let result = await fetch(URL);
        let data = await result.json();

        setItems(data);
      }
      fetchData(API);
    } catch (error) {
      console.error("Error ->", error);
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
