import "./App.css";
import MainMenu from "./Components/MainMenu/MainMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Product from "./Components/Product/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <MainMenu />,
        },
        {
          path: "/:product",
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
