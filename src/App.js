import { useState } from "react";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import { CartContext } from "./components/contexts/CartContext"

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cartItem, setCartItem }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={"/product/:id"} element={<ProductPage />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
