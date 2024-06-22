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
};

const slice = createSlice({
  name: "coffeeShop",
  initialState,
  reducers: {
    fetchCoffeeShops: (state) => {
      console.log("fired");
      state.coffeeShops.loading = true;
    },
    fetchCoffeeShopsSuccess: (state, action) => {
      console.log("🚀 ~ action:", action);
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
    // updateSearchOrFilterParams:(state, action) => {
    //   console.log("🚀 ~ action:", state.search, action);
    //   state.search = action.payload;
    // }
  },
});

export const { actions: coffeeShopActions, reducer } = slice;

export const useCoffeeShopSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: coffeeShopSaga });
  return { actions: slice.actions };
};
