import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function MainMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let prods = await fetch("https://fakestoreapi.com/products");
      prods = await prods.json();
      setProducts(prods);
    }
    fetchProducts();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-6 g-3">
      {products.map((product) => {
        return (
          <div className="col" key={product.id}>
            <Card product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default MainMenu;
