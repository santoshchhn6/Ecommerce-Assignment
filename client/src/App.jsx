import Home from "./Home";
import Login from "./Login";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
