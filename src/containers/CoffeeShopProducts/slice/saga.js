import { takeLatest, call, put, select } from "redux-saga/effects";
import { coffeeShopProductActions } from ".";
import request from "../../../utils/request";

function* fetchCoffeeShopProductsSaga(action) {
  try {
    let apiUrl = `/api/v1/coffee-shop/${action.payload}/products`;

    const response = yield call(request, apiUrl);
    yield put(coffeeShopProductActions.fetchCoffeeShopsProductSuccess(response));
  } catch (error) {}
}

function* coffeeShopProductSaga() {
  yield takeLatest(
    coffeeShopProductActions.fetchCoffeeShopsProduct,
    fetchCoffeeShopProductsSaga
  );
}

export default coffeeShopProductSaga;
