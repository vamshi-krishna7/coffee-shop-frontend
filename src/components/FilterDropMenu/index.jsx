import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Dropdown = ({ handleApplyFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const applyFilters = () => {
    handleApplyFilters();
    setIsOpen(false); 
  };

  return (
    <div className="relative mx-2"> 
      <button
        onClick={toggleDropdown}
        className="relative md:p-4 w-[45px] h-[45px] px-4 py-3 rounded-full hover:bg-neutral-100 border-[1px] transition font-semibold cursor-pointer flex items-center"
      >
        <FaFilter className="mx-auto" />
      </button>
      {isOpen && (
        <div className="absolute z-10 rounded-xl w-[240px] shadow-md bg-white overflow-hidden mt-1 top-full right-0 text-sm">
          <div className="p-4">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded-sm"
              />
              Wheelchair Accessible
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded-sm"
              />
              Parking Available
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded-sm"
              />
              Free WiFi
            </label>
          </div>
          <div className="border-t border-neutral-200 p-4">
            <h3 className="font-semibold mb-2">Payment Methods</h3>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded-sm"
              />
              Mobile Wallets
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded-sm"
              />
              Cash
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 border border-gray-300 rounded-sm"
              />
              Card
            </label>
          </div>
          <div className="p-4">
            <button
              onClick={applyFilters}
              className="px-4 py-2 rounded-md hover:bg-blue-600 transition"
              style={{ backgroundColor: "#235347", color: "#E1C699" }}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
