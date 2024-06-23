import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { coffeeShopActions } from "./slice";
import { selectCoffeeShops, selectSearchCoffeeShops } from "./slice/selector";

function CoffeeShop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(coffeeShopActions.fetchCoffeeShops());
  }, []);
  const coffeeShops = useSelector(selectCoffeeShops);
  const searchCoffeeShops = useSelector(selectSearchCoffeeShops);

  return (
    <div className="mx-4">
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">Featured coffee shops</h2>
      </div>
      <div className="flex justify-between flex-wrap">
        {coffeeShops?.map((shop, index) => (
          <div
          className="rounded-lg shadow-md hover:shadow-lg cursor-pointer w-[270px]  m-2"
          onClick={() => navigate(`coffee-shop/${shop._id}/products`)}
          key={index}
        >
          <img
            src={shop?.bannerImage || "https://via.placeholder.com/100"}
            alt="Coffee shop"
            className="w-full h-[60%] rounded-t-lg object-cover"
          />
          <div className="p-4 flex flex-col space-y-2">
            <h3 className="text-md font-semibold">{shop.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.75l2.157 4.361 4.814.697-3.485 3.4.822 4.79L12 15.9l-4.308 2.268.822-4.79-3.485-3.4 4.814-.697L12 4.75z"
                />
              </svg>
              <span className="ml-1">{shop.averageRating}</span>
              <span className="ml-1">({`${shop.totalReviews} reviews`})</span>
            </div>
            <div className="text-sm text-gray-500">
              {shop.foodOptions?.join(" | ")}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeeShop;
