import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AddProduct from './Components/AddProduct/AddProduct';
import { CartProvider } from "./Components/Cart/CartContext";
import { ProductProvider } from './Components/Product/ProductContext';

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add-new-product" element={<AddProduct />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
