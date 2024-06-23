import { createSlice } from "@reduxjs/toolkit";
import coffeeShopSaga from "./saga";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../store/redux-injectors";

export const initialState = {
  coffeeShops: {
    data: [],
    success: false,
    loading: false,
    error: false,
  },
  search: "",
  sortBy: "",
  filterBy: {
    wheelchairAccessible: false,
    parkingAvailable: false,
    freeWifi: false,
    mobileWallets: false,
    cash: false,
    card: false,
    openNow: false,
  },
};

const slice = createSlice({
  name: "coffeeShop",
  initialState,
  reducers: {
    fetchCoffeeShops: (state) => {
      state.coffeeShops.loading = true;
    },
    fetchCoffeeShopsSuccess: (state, action) => {
      state.coffeeShops.success = true;
      state.coffeeShops.loading = false;
      state.coffeeShops.error = false;
      state.coffeeShops.data = action.payload;
    },
    fetchCoffeeShopsFailed: (state, action) => {
      state.coffeeShops.loading = false;
      state.coffeeShops.success = false;
      state.coffeeShops.error = action.payload?.message || "error occured";
    },
    updateSearchBy: (state, action) => {
      state.search = action.payload.search;
    },
    updateSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
    },
  },
});

export const { actions: coffeeShopActions, reducer } = slice;

export const useCoffeeShopSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: coffeeShopSaga });
  return { actions: slice.actions };
};
