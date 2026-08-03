import React from "react";
import { Link } from "react-router";
import { FaAngleLeft } from "react-icons/fa6";

const MainHeader = ({ cart, addtocart }) => {
  return (
    <div className="flex gap-x-[600px]  w-[1216px] pt-[160px] mr-[245px] absolute ">
      <div>
        <span className="font-MorabbaMedium text-[48px] dark:text-white">
          جدید ترین محصولات
        </span>
        <br />
        <span className="font-MorabbaLight text-[30px] dark:text-white">
          فرآوری شده از دانه قهوه
        </span>
      </div>
      <div className="flex text-orange-300 pt-20">
        {/* <span className="font-Dana text-[20px]">مشاهده همه محصولات</span> */}

        <div className="flex items-center">
          <Link to="/shop" className="font-Dana text-[20px]">
            مشاهده همه محصولات
          </Link>
          <FaAngleLeft />
        </div>
        <svg className="w-[20px] h-[20px]">
          <use xlinkHref="#left"></use>
        </svg>
      </div>
    </div>
  );
};

export default MainHeader;
