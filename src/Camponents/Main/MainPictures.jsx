import React from "react";

const MainPictures = () => {
  return (
    <div className="flex mr-[208px] mt-[64px] gap-x-[56px]">
      <div>
        <img src="../public/CoffeeShop-Files/categories/category1.png" alt="" />
        <div className=" pr-6 pt-[10px]">
          <span className="font-DanaBold text-[20px] text-zinc-700 dark:text-white">
            قهوه دمی اسپرسو
          </span>
        </div>
      </div>
      <div>
        <img src="../public/CoffeeShop-Files/categories/category2.png" alt="" />
        <div className=" pt-[10px]">
          <span className="font-DanaBold text-[20px] text-zinc-700 dark:text-white">
            لولزم جانبی و تجهیزات
          </span>
        </div>
      </div>
      <div>
        <img src="../public/CoffeeShop-Files/categories/category3.png" alt="" />
        <div className="pr-[48px] pt-[10px]">
          <span className="font-DanaBold text-[20px] text-zinc-700 dark:text-white">
            اسپرسو ساز
          </span>
        </div>
      </div>
      <div>
        <img src="../public/CoffeeShop-Files/categories/category4.png" alt="" />
        <div className=" pr-[40px] pt-[10px]">
          <span className="font-DanaBold text-[20px] text-zinc-700 dark:text-white">
            پک تستر قهوه
          </span>
        </div>
      </div>
      <div>
        <img src="../public/CoffeeShop-Files/categories/category5.png" alt="" />
        <div className="pr-[72px] pt-[10px]">
          <span className="font-DanaBold text-[20px] text-zinc-700 dark:text-white">
            قوه ترک
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPictures;
