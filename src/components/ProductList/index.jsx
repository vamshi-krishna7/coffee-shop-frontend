import React from "react";

function ProductList({ data, shopName, isLoading }) {
  return (
    <div className="mx-4">
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">{`${shopName}'s special`}</h2>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin mx-auto rounded-full border-b-2 border-gray-800 h-10 w-10"></div>
        </div>
      ) : (
        <div className="flex xs:justify-center md:justify-between flex-wrap">
          {data?.map((el, index) => (
            <div
              className="md:p-2 pr-2 rounded-lg lg:w-[33.33%] md:w-[50%] xs:w-[100%] hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => navigate(`coffee-shop/${el._id}/products`)}
              key={index}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={el.imageUrl || "https://via.placeholder.com/100"}
                  alt="Coffee shop"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-md font-semibold text-gray-900 hover:letter-spacing-1 transition duration-300">
                    {el.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="ml">{el.description}</span>
                  </div>
                  <div className="text-sm text-gray-500">${el.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
