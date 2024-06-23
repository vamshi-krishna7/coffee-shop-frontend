import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import { coffeeShopProductActions } from "./slice";
import {
  selectCoffeeShop,
  selectLoading,
  selectProducts,
} from "./slice/selector";

function CoffeeShopProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coffeeShop = useSelector(selectCoffeeShop);
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(coffeeShopProductActions.fetchCoffeeShopsProduct(id));
  }, []);

  const getSpecialtyCoffees = (specialtyCoffees) => {
    return specialtyCoffees?.join(" | ") || "Explore the best coffee shops in town.";
  };

  return (
    <div>
      <Banner
        backgroundColor="#235347"
        textColor="#E1C699"
        title={coffeeShop?.name}
        subtitle={getSpecialtyCoffees(coffeeShop?.specialtyCoffees)}
        isLoading={isLoading}
      />
      <ProductList
        shopName={coffeeShop?.name || "Our Special"}
        data={products}
        isLoading={isLoading}
      />
    </div>
  );
}

export default CoffeeShopProduct;
