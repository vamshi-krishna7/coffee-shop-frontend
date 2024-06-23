import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import { coffeeShopProductActions } from "./slice";
import { selectCoffeeShop } from "./slice/selector";

function CoffeeShopProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const coffeeShop = useSelector(selectCoffeeShop);
  console.log("🚀 ~ CoffeeShopProduct ~ coffeeShop:", coffeeShop);
  useEffect(() => {
    dispatch(coffeeShopProductActions.fetchCoffeeShopsProduct(id));
  }, []);

  return (
    <div>
      <Banner
        backgroundColor="#235347"
        textColor="#E1C699"
        title={coffeeShop?.name}
        subtitle="Explore the best coffee shops in town."
      />
    </div>
  );
}

export default CoffeeShopProduct;
