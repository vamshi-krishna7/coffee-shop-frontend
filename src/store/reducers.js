/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "@reduxjs/toolkit";
import { reducer as coffeShopReducer } from "../../src/containers/CoffeeShop/slice/index";
import { reducer as coffeeShopProductReducer } from "../../src/containers/CoffeeShopProducts/slice/index";


const createRootReducer = () =>
  combineReducers({
    coffeeShop: coffeShopReducer,
    coffeeShopProduct: coffeeShopProductReducer,
  });

export default createRootReducer;
