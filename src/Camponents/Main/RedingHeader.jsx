import React from "react";
import { Link } from "react-router";
import { FaAngleLeft } from "react-icons/fa6";

const RedingHeader = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <div className="flex items-center justify-between">
        <span className="font-MorabbaMedium  text-[48px] dark:text-white">
          مطالب خواندنی
        </span>

        <Link
          to="/shop"
          className="flex items-center gap-1 text-orange-300 hover:text-orange-400 transition-colors font-Dana text-[20px]"
        >
          مشاهده همه مطالب
          <FaAngleLeft />
        </Link>
      </div>
    </div>
  );
};

export default RedingHeader;
