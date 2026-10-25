import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import MainLayout from "./MainLayout";
import About from "../pages/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
