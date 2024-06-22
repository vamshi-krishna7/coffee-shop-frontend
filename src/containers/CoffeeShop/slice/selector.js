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

export const selectSearchAndFilter = createSelector(
  [coffeeShopsState],
  (state) => ({
    search: state.search,
    filterBy: state.filterBy,
  })
);
