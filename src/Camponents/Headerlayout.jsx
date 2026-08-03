import React from "react";

const Headerlayout = ({ children }) => {
  return (
    <div className="  ">
      <div className="flex items-center justify-between w-full">
        <nav className="flex items-center gap-x-5 lg:gap-x-9 ">
          <ul className="flex gap-x-5 lg:gap-x-9">{children}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Headerlayout;
