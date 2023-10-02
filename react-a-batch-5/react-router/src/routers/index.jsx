import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import ProductDetail from "../pages/product-detail";
import PrivateRoute from "./private-route";
import LoginPage from "../pages/login-page";
import ProtectedRoute from "./protected-route";
import AddProductPage from "../pages/add-product";

export default function SetupRouters() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProductPage />} />
        </Route>
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/contact-us" element={<h1>contact us</h1>} />
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <header>
        <h1>Tokomamamu</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
