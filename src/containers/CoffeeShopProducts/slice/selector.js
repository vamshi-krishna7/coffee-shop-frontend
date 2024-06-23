import { createSelector } from "@reduxjs/toolkit";
import { initialState } from ".";

const coffeeShopProductState = (state) =>
  state?.coffeeShopProduct || initialState;

export const selectCoffeeShop = createSelector(
  [coffeeShopProductState],
  (state) => state.coffeeShop
);

export const selectProducts = createSelector(
  [coffeeShopProductState],
  (state) => state.products
);
