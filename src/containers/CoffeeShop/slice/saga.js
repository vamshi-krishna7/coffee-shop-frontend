import { takeLatest, call, put, select } from "redux-saga/effects";
import { coffeeShopActions } from ".";
import request from "../../../utils/request";
import { selectSearchAndSortBy } from "./selector";

function* fetchCoffeeShopsSaga(action) {
  try {
    let apiUrl = `/api/v1/coffee-shop`;

    const { search, sortBy } = yield select(selectSearchAndSortBy);

    if (search) {
      apiUrl = apiUrl + `?search=${search}`;
    }

    if (sortBy) {
      apiUrl +=`${search ? '&' : '?'}sortBy=${sortBy}`;
    }


    const response = yield call(request, apiUrl);
    yield put(coffeeShopActions.fetchCoffeeShopsSuccess(response)); // Dispatch success action with API response
  } catch (error) {
  }
}

function* coffeeShopSaga() {
  yield takeLatest(coffeeShopActions.fetchCoffeeShops, fetchCoffeeShopsSaga);
  yield takeLatest(
    coffeeShopActions.updateSearchBy,
    fetchCoffeeShopsSaga
  );
  yield takeLatest(
    coffeeShopActions.updateSortBy, fetchCoffeeShopsSaga
  )
}

export default coffeeShopSaga;
