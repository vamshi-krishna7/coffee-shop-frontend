import Container from "../components/Container";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CoffeeShopProduct from "./CoffeeShopProducts";

function AppRouter() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/coffee-shop/:id/products"
            element={<CoffeeShopProduct />}
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default AppRouter;
