import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FoodAdmin } from "./pages/FoodAdmin";
import { UserAdmin } from "./pages/UserAdmin";
import { Menu } from "./pages/Menu";
import { Layout } from "./common/Layout.js";
import { Home } from "./pages/Home";
import { Cart } from "./modules/cart/Cart";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/admin/food">
            <Route index element={<FoodAdmin />} />
            <Route path=":id" element={<FoodAdmin />} />
          </Route>
          <Route path="/admin/user">
            <Route index element={<UserAdmin />} />
          </Route>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/menu">
            <Route index element={<Menu />} />
          </Route>
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
