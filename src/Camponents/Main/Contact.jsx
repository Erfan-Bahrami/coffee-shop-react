import React from "react";
import { Link } from "react-router";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";
const Contact = () => {
  return (
    <div>
      <div className="flex w-[1232px] h-[280px]  mr-[240px]">
        <div>
          <img
            className="w-[300px] h-[300px]"
            src="../public/CoffeeShop-Files/contact.png"
            alt=""
          />
        </div>

        <div className="dark:text-white mr-[32px]">
          <span className="font-MorabbaMedium text-[48px]">
            یکی از بهترین قهوه ها !
          </span>

          <br />

          <span className="font-MorabbaLight text-[30px]">
            کیفیت را از ما بخواهید...
          </span>
          <div className="flex gap-x-4 mt-[24px]">
            <span className=" rounded-[32px] w-[4px] h-[4px] bg-zinc-400"></span>
            <span className=" rounded-[32px] w-[4px] h-[4px] bg-zinc-400"></span>
            <span className=" rounded-[32px] w-[4px] h-[4px] bg-zinc-400"></span>
          </div>
          <br />

          <span className="font-Dana text-[18px]">
            فضای گرم و دنج ما را احساس کنید. جایی که همه می توانند قهوه معطری
            پیدا کنند و دسر های
            <br />
            خوشمزه ما را که کاملا با قهوه داغ همراه شده است. امتحان کنند. فضای
            داخلی شیک و کارکنان خوش
            <br /> برخورد ما روز شما را می سازد!
          </span>
        </div>
      </div>

      <div className="flex  items-center relative w-[216px] h-[60px] mr-[570px] p-4 text-orange-300 rounded-[32px]  border-orange-300  border-[2px]">
        <Link to="./Ticket" className="flex items-center">
          <div className="  p-1 text-[25px]">
            <HiOutlinePhoneArrowUpRight />
          </div>
          <span className="text-[18px] font-YekanBakhMedium mr-[45px] absolute">
            ثبت سفارش تلفنی
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
