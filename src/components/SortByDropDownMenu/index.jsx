import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFilter } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { coffeeShopActions } from "../../containers/CoffeeShop/slice";
import MenuItem from "../MenuItem";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClickMenuItem = (value) => {
    dispatch(coffeeShopActions.updateSortBy({ sortBy: value }));
    toggleDropdown();
  };

  return (
    <div className="relative">
      <div
        className="md:p-4 w-[45px] h-[45px] md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        onClick={toggleDropdown}
      >
        <AiOutlineMenu className="mx-auto" />
      </div>

      {isOpen && (
        <div className="absolute z-10 rounded-xl shadow-md w-[140px] bg-white overflow-hidden top-95 right-0 text-sm">
          <div>
            {/* <MenuItem onClick={toggleDropdown} label="Open Now" /> */}
            <MenuItem
              onClick={onClickMenuItem}
              label="Most Popular"
              value="mostPopular"
            />
            <MenuItem
              onClick={onClickMenuItem}
              label="Best Rating"
              value="bestRating"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
