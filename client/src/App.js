import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Market from "./pages/Market";
import HomeProduct from "./pages/home-product-page";
import ProductDetails from "./pages/product-details-page";

function App() {
  return (
    <div className="App bg-black h-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/category/:category" element={<h1>category</h1>} />
        <Route path="/item/:id" element={<h1>item</h1>} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
