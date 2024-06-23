import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coffeeShopActions } from "../../containers/CoffeeShop/slice";
import { selectSearchCoffeeShops } from "../../containers/CoffeeShop/slice/selector";

function Search() {
  const dispatch = useDispatch();

  const searchCoffeeShops = useSelector(selectSearchCoffeeShops);


  return (
    <input
      type="text"
      placeholder="cafe latte ... "
      onChange={(e) =>
        dispatch(coffeeShopActions.updateSearchBy({search: e.target.value}))
      }
      value={searchCoffeeShops}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
    />
  );
}

export default Search;
