import React, { useState, createContext } from "react";
import Categories from "./categories";
import Products from "./products";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
export const PageContext = createContext("electronics");

function HomePage() {
  const [category, setCategory] = useState("electronics");

  console.log(category);
  return (
    <PageContext.Provider value={{ category, setCategory }}>
      <Categories />
      <Products />
    </PageContext.Provider>
  );
}

export default HomePage;
