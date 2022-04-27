import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { BookDetailPage } from "./pages/BookDetailPage";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path=":id" element={<Admin />} />
        </Route>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/books">
          <Route index element={<Home />} />
          <Route path=":id" element={<BookDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
