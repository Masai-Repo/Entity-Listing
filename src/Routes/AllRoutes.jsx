import React from "react";
import { Route, Routes } from "react-router";
import { Homepage } from "../Components/Homepage";
import { ProductDetails } from "../Components/ProductDetails";
import { Products } from "../Components/Products";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Products />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};
