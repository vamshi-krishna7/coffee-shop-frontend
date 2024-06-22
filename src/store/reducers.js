/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";
import { reducer as coffeShopReducer } from "../../src/containers/CoffeeShop/slice/index";

const createRootReducer = () =>
  combineReducers({
    coffeeShop: coffeShopReducer,
  });

export default createRootReducer;
