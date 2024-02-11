import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from './context/shop-context';
import ProductDetail from "./pages/product-detail/ProductDetail";
import AccountPage from "./pages/AccountPage/AccountPage"; 
import SignUpPage from "./pages/AccountPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/signup" element={<SignUpPage/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

