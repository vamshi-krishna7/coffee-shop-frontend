import { all } from "redux-saga/effects";
import coffeeShopSaga from "../containers/CoffeeShop/slice/saga";
import coffeeShopProductSaga from "../containers/CoffeeShopProducts/slice/saga";

export default function* rootSaga() {
  // Use the `all` effect to run all the Sagas concurrently
  // List all your Saga watchers here
  yield all([
    coffeeShopSaga(),
    coffeeShopProductSaga(),
  ]);
}
