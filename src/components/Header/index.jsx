import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { coffeeShopActions } from "../../containers/CoffeeShop/slice";
import FilterDropMenu from "../FilterDropMenu";
import Search from "../Search";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "../MenuItem";
import DropDownMenu from "../SortByDropDownMenu";
import Banner from "../Banner";

function Header() {
  return (
    <div className="my-0 sm:my-0 md:my-4">
      <Banner
        backgroundColor="#235347"
        textColor="#E1C699"
        title="Find a coffee shop"
        subtitle="Explore the best coffee shops in town."
      />
      <div className="flex justify-between items-center mx-4 my-4">
        <Search />
        <FilterDropMenu />
        <DropDownMenu />
      </div>
    </div>
  );
}

export default Header;
