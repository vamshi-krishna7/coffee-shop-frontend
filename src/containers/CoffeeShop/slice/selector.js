import { createSelector } from "@reduxjs/toolkit";
import { initialState } from ".";

const coffeeShopsState = (state) => state?.coffeeShop || initialState;

export const selectCoffeeShops = createSelector(
  [coffeeShopsState],
  (state) => state.coffeeShops.data
);

export const selectSearchCoffeeShops = createSelector(
  [coffeeShopsState],
  (state) => state.search
);

export const selectSearchAndSortBy = createSelector(
  [coffeeShopsState],
  (state) => ({
    search: state.search,
    sortBy: state.sortBy,
  })
);
