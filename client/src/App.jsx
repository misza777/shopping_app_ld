import "./scss/App.scss";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  );};

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Layout/> ,
    children: [
      { path: "/", element: <Home /> },
      { path: "products/:id", element: <Products /> },
      { path: "product/:id", element: <Product /> },
    ],
  }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
