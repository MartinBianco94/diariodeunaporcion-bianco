import "./App.css";
import Navbar from "./Components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nosotros from "./Components/Nosotros";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/" element={<ItemListConteiner />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListConteiner />}
            />
            <Route
              path="/ItemDetail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
