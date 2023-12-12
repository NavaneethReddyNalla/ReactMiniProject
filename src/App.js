import "./App.css";
import Header from "./Components/Header/Header";
import MainMenu from "./Components/MainMenu/MainMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
    },
  ]);
  return (
    <div className="App">
      <Header />
      <div className="container-fluid p-2">
        <MainMenu />
      </div>
    </div>
  );
}

export default App;
