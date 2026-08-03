import React from "react";

const Club = () => {
  return (
    <div className=" flex w-[1152px] h-[144px] mr-[240px] mt-[825px] rounded-[16px]  bg-emerald-700 ">
      <div className="flex ">
        <div className="flex items-center pr-[48px]  ">
          <img src="../public/CoffeeShop-Files/club/diamond.png" alt="" />
          <div className="pr-[32px]">
            <span className="font-MorabbaBold text-[35px] text-white">
              کافی کلاب
            </span>
            <br />
            <span className="font-MorabbaLight text-[18px] text-white">
              میدونستی میتونی با امتیاز هات قهوه بگیری؟
            </span>
          </div>
        </div>
      </div>
      <div className=" flex pr-[48px] gap-x-[32px] pt-[25px] ">
        <div className="  w-[96px] h-[96px] pt-[18px]  bg-white rounded-[16px] ">
          <img
            className="pr-[27px] mb-2"
            src="../public/CoffeeShop-Files/club/Discovery.svg"
            alt=""
          />
          <span className="font-Dana text-[14px] pr-[15px] text-emerald-500 ">
            چرخ و بخت
          </span>
        </div>
        <div className=" w-[96px] h-[96px] pt-[18px] bg-white rounded-[16px] ">
          <img
            className="pr-[27px] mb-2"
            src="../public/CoffeeShop-Files/club/Activity.svg"
            alt=""
          />
          <span className="font-Dana text-[14px] pr-[15px] text-emerald-500 ">
            ماموریت ها
          </span>
        </div>
        <div className="w-[96px] h-[96px] pt-[18px] bg-white rounded-[16px] ">
          <img
            className="pr-[27px] mb-2"
            src="../public/CoffeeShop-Files/club/Ticket-Star.svg"
            alt=""
          />
          <span className="font-Dana text-[14px] pr-[25px] text-emerald-500 ">
            جایزه ها
          </span>
        </div>
      </div>

      <div className="mr-[110px] mt-[24px]">
        <div className="text-white ">
          <span className="font-DanaBold text-[30px]">542</span>
          <br />
          <span className="font-Dana text-[14px]">امتیاز شما</span>
        </div>

        <div className="bg-orange-300 flex rounded-[10px] w-[112px] h-[24px] items-center justify-center mt-2 -mr-[16px] p-[11px]">
          <span className="text-white font-DanaMedium text-[14px]">
            دریافت جایزه
          </span>
          <svg className="text-white w-[20px] h-[20px]">
            <use xlinkHref="#left"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Club;
