import React from "react";

const Icons = () => {
  return (
    <div>
      <div className="flex mr-[240px] mt-[144px] items-center gap-x-[96px]">
        <div className="flex items-center">
          <img src="/CoffeeShop-Files/svgs/services/support.svg" alt="" />
          <div className="dark:text-white mr-[16px]">
            <span className="font-DanaBold text-[18px]">
              پشتیبانی شبانه روزی
            </span>
            <br />
            <div className="">
              <span className="font-Dana text-[14px]">
                7روز هفته . 24 ساعته
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <img
            src="/CoffeeShop-Files/svgs/services/express-delivery.svg"
            alt=""
          />
          <div className="dark:text-white mr-[16px]">
            <span className="font-DanaBold text-[18px]">
              امکان تحویل اکسپرس
            </span>
            <br />
            <div className="">
              <span className="font-Dana text-[14px]">
                ارسال بسته با سرعت باد
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <img src="/CoffeeShop-Files/svgs/services/pitcher.svg" alt="" />
          <div className="dark:text-white mr-[16px]">
            <span className="font-DanaBold text-[18px]">رست تخصصی</span>
            <br />
            <div className="">
              <span className="font-Dana text-[14px]">
                تازه برشته شده و با کیفیت
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img src="/CoffeeShop-Files/svgs/services/coffee.svg" alt="" />
          <div className="dark:text-white mr-[16px]">
            <span className="font-DanaBold text-[18px]">اکسسوری قهوه</span>
            <br />
            <div className="">
              <span className="font-Dana text-[14px]">
                وسایل و ادوات در آوری
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
