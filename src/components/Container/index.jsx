// src/components/Container.js
import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default Container;
