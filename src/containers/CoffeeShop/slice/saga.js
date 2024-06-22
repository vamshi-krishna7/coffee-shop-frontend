import { takeLatest, call, put, select } from "redux-saga/effects";
import { coffeeShopActions } from ".";
import request from "../../../utils/request";
import { selectSearchAndFilter } from "./selector";
// import { fetchCoffeeShopsSuccess, fetchCoffeeShopsFailed, coffeeShopActions } from './index'; // Import your slice action creators
// import { getCoffeeShopsApi } from './api'; // Replace with your actual API function

// const   getCoffeeShopsApi = () => {
//   console.log("🚀 ~ getCoffeeShopsApi ~ getCoffeeShopsApi:")
//   return axios.get("http://13.235.135.9/api/v1/coffee-shop");
// };

// Saga worker function
function* fetchCoffeeShopsSaga(action) {
  try {
    console.log("fetching", action);
    let apiUrl = `/api/v1/coffee-shop`;

    if (action.payload?.search) {
      console.log("went-insde")
      apiUrl = apiUrl + `?search=${action.payload.search}`;
    }

    if (action.payload?.sortBy) {
      apiUrl +=`${action.payload.search ? '&' : '?'}sortBy=${action.payload.sortBy}`;
    }

    console.log("fnial-=asdasndkas", apiUrl)

    const response = yield call(request, apiUrl);
    console.log("🚀 ~ function*fetchCoffeeShopsSaga ~ response:", response);
    yield put(coffeeShopActions.fetchCoffeeShopsSuccess(response)); // Dispatch success action with API response
  } catch (error) {
    console.log("🚀 ~ function*fetchCoffeeShopsSaga ~ error:", error);
    // yield put(fetchCoffeeShopsFailed(error)); // Dispatch failed action with error message
  }
}

function* coffeeShopSaga() {
  yield takeLatest(coffeeShopActions.fetchCoffeeShops, fetchCoffeeShopsSaga);
  // yield takeLatest(
  //   coffeeShopActions.updateSearchOrFilterParams,
  //   fetchCoffeeShopsSaga
  // );
}

export default coffeeShopSaga;
