import Layout from "./Layout";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
