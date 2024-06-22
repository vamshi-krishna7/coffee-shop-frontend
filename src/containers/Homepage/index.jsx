import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import CoffeeShop from "../CoffeeShop";
import { selectCoffeeShops } from "../CoffeeShop/slice/selector";

function Homepage() {


  const coffeeShops = useSelector(selectCoffeeShops);
  console.log("🚀 ~ CoffeeShop ~ coffeeShops:", coffeeShops)
  return (
    <>
      <Header />
      <CoffeeShop />
    </>
  );
}

export default Homepage;
