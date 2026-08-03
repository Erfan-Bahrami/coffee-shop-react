import React from "react";
import { Link } from "react-router";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
const Outicon = () => {
  return (
    //   <div className="toggle-theme cursor-pointer">
    //     <div className="flex items-center pl-2 gap-x-4 ">

    //    </div>   </div>

    <Link to="/Register" className="flex items-center gap-x-2.5">
      <HiMiniArrowRightEndOnRectangle className="  w-8 h-8" />

      <span className="xl:inline-block hidden">ورود | ثبت نام</span>
    </Link>
  );
};

export default Outicon;
