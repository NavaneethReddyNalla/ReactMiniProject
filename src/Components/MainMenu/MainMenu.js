import React from "react";
import { useEffect, useState } from "react";

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
    <div>
      {products.map((product) => {
        return <p key={product.id}>{JSON.stringify(product)}</p>;
      })}
    </div>
  );
}

export default MainMenu;
