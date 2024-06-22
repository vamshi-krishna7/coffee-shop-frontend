import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "../MenuItem";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("askdjaskjdkjasjk");
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="relative md:p-4 w-[45px] h-[45px] md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        onClick={toggleDropdown}
      >
        <AiOutlineMenu className="mx-auto" />
      </div>

      {isOpen && (
        <div className="absolute z-10 rounded-xl shadow-md w-[140px] bg-white overflow-hidden top-95 right-0 text-sm">
          <div>
            <MenuItem onClick={toggleDropdown} label="Open Now" />
            <MenuItem onClick={toggleDropdown} label="Most Popular" />
            <MenuItem onClick={toggleDropdown} label="Best Rating" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
