import React from "react";

const Mainfori = () => {
  return (
    <div className="grid gri-col-1 md:grid-cols-2 mt-[80px] mr-[240px] ">
      <div className="relative  w-[560px]">
        <img
          className="rounded-2xl w-[568px] "
          src="/CoffeeShop-Files/categories/category-right.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
        <div className="absolute bottom-16 right-12 text-white z-10 leading-6">
          <span className="font-DanaBold text-[36px]">پودر های فوری</span>
          <div className="mt-4">
            <span className="font-DanaMedium text-[20px]">
              نسکافه . هات چاکلت . ماسالا
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-[560px] -mr-[132px]">
        <img
          className="rounded-2xl w-[568px] "
          src="/CoffeeShop-Files/categories/category-left.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
        <div className="absolute bottom-16 right-12 text-white z-10 leading-6">
          <span className="font-DanaBold text-[36px]">پودر های فوری</span>
          <div className="mt-4">
            <span className="font-DanaMedium text-[20px]">
              نسکافه . هات چاکلت . ماسالا
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainfori;
