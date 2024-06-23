import { createSlice } from "@reduxjs/toolkit";
import coffeeShopProductSaga from "./saga";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../store/redux-injectors";

export const initialState = {
  coffeeShop: {},
  products: [],
  success: false,
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "coffeeShopProduct",
  initialState,
  reducers: {
    fetchCoffeeShopsProduct: (state) => {
      state.loading = true;
    },
    fetchCoffeeShopsProductSuccess: (state, action) => {
      console.log("🚀 ~ action:", action);
      state.success = true;
      state.loading = false;
      state.error = false;
      state.coffeeShop = action.payload.coffeeShop;
      state.products = action.payload.products;
    },
    fetchCoffeeShopsProductFailed: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload?.message || "error occured";
    },
  },
});

export const { actions: coffeeShopProductActions, reducer } = slice;

export const useCoffeeShopProductSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: coffeeShopProductSaga });
  return { actions: slice.actions };
};
