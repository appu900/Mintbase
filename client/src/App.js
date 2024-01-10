import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Market from "./pages/Market";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market/>} />
        <Route path="/category/:category" element={<h1>category</h1>}/>
        <Route path="/item/:id" element={<h1>item</h1>}/>     
      </Routes>
    </div>
  );
}

export default App;
