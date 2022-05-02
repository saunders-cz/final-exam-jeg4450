import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FoodAdmin } from "./pages/FoodAdmin";
import { Menu } from "./pages/Menu";
import { Layout } from "./common/Layout.js";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/admin">
            <Route index element={<Home />} />
            <Route path=":food">
              <Route index element={<FoodAdmin />} />
              <Route path=":id" element={<FoodAdmin />} />
            </Route>
          </Route>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/menu">
            <Route index element={<Menu />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
