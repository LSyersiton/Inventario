import {useEffect, useState} from "react";
import ProductCard from "../componets/ProductCard/ProductCard"
import ProductServices from "../services/ProductServices";
import Header from "../componets/Header/header";

function Home() {
  const [productos, setProductos] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductServices.getAllProducts();
                setProductos(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

  return (
    <main className="main-container">
      <Header />
      <div class="div-content">
        <div class="title-main">
          <h1>Lista de productos</h1>
        </div>
        <section className="section-cards">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;