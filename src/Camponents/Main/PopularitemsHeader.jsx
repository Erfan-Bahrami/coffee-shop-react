import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
const PopularitemsHeader = () => {
  return (
    <div>
      <div className="flex gap-x-[600px]  w-[1216px] pt-[160px] mr-[245px] absolute  ">
        <div>
          <span className="font-MorabbaMedium text-[48px] dark:text-white">
            محصولات پر فروش
          </span>
          <br />
          <span className="font-MorabbaLight text-[30px] dark:text-white">
            پیشنهاد قهوه خور ها ...
          </span>
        </div>
        {/* <div className="flex gap-x-3 mr-[112px]  pt-20">
          <div className="w-[44px] h-[44px] dark:bg-zinc-700 rounded-[48px] relative flex items-center justify-center">
            <svg className="w-[20px] h-[20px] dark:text-white absolute">
              <use xlinkHref="#right"></use>
            </svg>
          </div>
          <div className="w-[44px] h-[44px] dark:bg-zinc-700 rounded-[48px]  flex items-center justify-center">
            <svg className="w-[20px] h-[20px] dark:text-white ">
              <use xlinkHref="#left"></use>
            </svg>
          </div>
        </div> */}

        <div className="flex gap-x-3 mr-[112px]  pt-20">
          <div className=" popular-prev w-[44px] h-[44px] dark:bg-zinc-700 rounded-[48px] relative flex items-center justify-center">
            {/* <svg className="w-[20px] h-[20px] dark:text-white absolute">
              <use xlinkHref="#right"></use>
            </svg> */}

            <FaAngleRight className="w-[20px] h-[20px] dark:text-white absolute" />
          </div>
          <div className=" popular-next w-[44px] h-[44px] dark:bg-zinc-700 rounded-[48px]  flex items-center justify-center">
            {/* <svg className="w-[20px] h-[20px] dark:text-white ">
              <use xlinkHref="#left"></use>
            </svg> */}
            <FaAngleLeft className="w-[20px] h-[20px] dark:text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularitemsHeader;
