import "./App.css";
import { useState, useEffect } from "react";
import MainMenu from "./Components/MainMenu/MainMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Product from "./Components/Product/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProducts() {
      let prods = await fetch("https://fakestoreapi.com/products");
      prods = await prods.json();
      setProducts(prods);
    }
    fetchProducts();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <MainMenu products={products} setProduct={setProduct} />,
        },
        {
          path: "/:productId",
          element: <Product product={product} />,
        },
      ],
    },
  ]);
  return (
    <div className="App bg-secondary bg-gradient">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
