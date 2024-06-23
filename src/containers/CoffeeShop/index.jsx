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
        {/* <div
          className="absolute xs:w-[30%] h-0.5 top-1/2 left-1/2"
          style={{ backgroundColor: "#333333" }}
        ></div> */}
      </div>
      <div className="flex justify-between flex-wrap">
        {coffeeShops?.map((shop, index) => (
          <div
          className="md:p-2 pr-2 rounded-lg lg:w-[33.33%] md:w-[50%] xs:w-[100%] hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => navigate(`coffee-shop/${shop._id}/products`)}
            key={index}
          >
            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Coffee shop"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
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
                  <span className="ml-1">
                    ({`${shop.totalReviews} reviews`})
                  </span>
                </div>
                <div className="text-sm text-gray-500">3.8 miles</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeeShop;
