import React from 'react';

const Banner = ({ title, subtitle, backgroundColor, textColor }) => {
  return (
    <div
    className={`w-full h-[300px] py-4 mb-4 rounded-xl sm:rounded-t-xl flex items-center justify-center`} // Flexbox to center content
    style={{ background: backgroundColor, color: textColor }} // Apply background and text colors
  >
    <div className="text-center">
      {title && <h1 className="text-6xl font-bold">{title}</h1>}
      {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
    </div>
  </div>
  );
};

export default Banner;