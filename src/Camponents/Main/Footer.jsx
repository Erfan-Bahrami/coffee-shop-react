import React from "react";
import { LuMapPin } from "react-icons/lu";
import { BsCamera } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineLocalPostOffice } from "react-icons/md";
const Footer = () => {
  return (
    <div className="font-Dana">
      <div className=" p-[50px] bg-zinc-700 w-full   bottom-0 h-[460px] mt-[176px]">
        <div className="flex pb-[48px] border-b-2 border-white/10">
          <div>
            <div className="flex gap-x-4">
              <img
                className="w-[57px] h-[57px]"
                src="/CoffeeShop-Files/svgs/logo.svg"
                alt=""
              />
              <img src="/CoffeeShop-Files/svgs/logo-type.svg" alt="" />
            </div>
            <div className="font-Dana mt-[35px]  leading-[40px] ">
              <span className="text-gray-300">
                ما برآنیم تا با پیشرو بودن در فرآیند تولید. نوع و کیفیت محصول.
                خدمات و
                <br /> توزیع الگویی برای تولید کنندگان ایرانی باشیم و به مرجع
                فرهنگ قهوه در ایران
                <br /> تبدیل شویم. می پندازیم که نظر مردم ایران و منطقه باید
                نسبت به کالای ایرانی
                <br /> بهبود یابد و در این راستا با اشتیاق می کوشیم.
              </span>
            </div>
          </div>

          <div className="flex gap-x-[20px] mr-[128px]">
            <div>
              <div>
                <div>
                  <span className="font-DanaBold text-[24px] text-white">
                    دسترسی سریع
                  </span>
                </div>
                <div className="mt-[32px] leading-[40px] text-gray-300">
                  <div className="felx items-center">
                    <span className="  w-[2px] h-[2px] bg-orange-300"></span>
                    <span>حریم خصوصی</span>
                  </div>
                  <div className="flex">
                    <span className="w-[10px] h-1 text-gr-300"></span>
                    <span>عودت کالا</span>
                  </div>
                  <div className="flex">
                    <span className="w-[10px] h-1 text-gr-300"></span>
                    <span>شرایط استفاده</span>
                  </div>
                  <div className="flex">
                    <span className="w-[10px] h-1 text-gr-300"></span>
                    <span>ثبت سفارش</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="leading-[40px] text-gray-300">
                  <div className="flex pt-[75px] items-center  gap-x-4   ">
                    <span className="w-[10px] h-1 bg-gray-300  "> </span>
                    <span>حریم خصوصی</span>
                  </div>
                  <div className="flex ">
                    <span className="w-[10px] h-1 text-gr-300"></span>
                    <span>عودت کالا</span>
                  </div>
                  <div className="flex">
                    <span className="w-[10px] h-1 text-gr-300"></span>
                    <span>شرایط استفاده</span>
                  </div>
                  <div className="flex">
                    <span className="w-[10px] h-1 text-gr-300"></span>
                    <span>ثبت سفارش</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mr-[150px] leading-[48px]">
            <div>
              <span className="text-[24px] font-DanaBold text-gray-300">
                در تماس باشیم
              </span>
            </div>

            <div className="flex items-center  gap-x-2 mt-4 text-gray-300">
              <div className="flex items-center">
                <LuMapPin className="w-6 h-6 " />
              </div>
              <span className="font-Dana text-[20px] text-gray-300">
                بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
              </span>
            </div>

            <div className="flex items-center mt-4  ">
              <div className=" flex items-center gap-x-2 text-orange-300 font-DanaMedium">
                <div className="flex items-center">
                  <MdOutlineLocalPostOffice className="w-6 h-6 " />
                </div>
                <span>Erfanbahrami12@gmail.com</span>
              </div>

              <div className="flex items-center gap-x-2 mr-6 text-gray-300">
                <div className=" flex items-center">
                  <BsTelephoneOutbound className="w-6 h-6" />
                </div>
                <span>09366124617</span>
              </div>

              <div className=" mr-4">
                <span className="text-gray-300">021 - 6789012</span>
              </div>
            </div>

            <div className="flex gap-x-[48px] mt-6">
              <div className="flex items-center w-[192px] text-orange-300 border-orange-300 border-[2px]  rounded-[10px] h-[40px] gap-x-[8px] p-4">
                <div className=" text-orange-300">
                  <div className="flex items-center">
                    <BsCamera className="w-[22px] h-[22px]" />
                  </div>
                </div>
                <div className="pt-[6px]">
                  <span>@golden_coffee</span>
                </div>
              </div>

              <div className="flex items-center w-[192px] bg-orange-300 rounded-[10px] h-[40px] p-4 gap-x-[8px]">
                <div className="w-[25px] h-[25px] flex items-center">
                  <img src="/CoffeeShop-Files/svgs/telegram.svg" alt="" />
                </div>
                <div className="pt-[6px]">
                  <span>@golden_coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-DanaMedium text-gray-300 text-[16px]  flex items-center gap-x-[448px] pt-[50px]">
          <div>
            <span className="text-[16px]">
              تمام حقوق این رابط کاربری متعلق به عرفان میباشد و دانشجوی این دوره
              اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
            </span>
          </div>

          <div className="text-[16px]">
            <span>Copyright © 2026 Golden Coffee. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
