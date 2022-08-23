import "./App.css";
import React, { useState, useEffect } from "react";
import Menubar from "./components/menu";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/productDetails";
import Cart from "./components/cart";
import Profile from "./components/profile";
import { CartContextProvider } from "./components/context";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
