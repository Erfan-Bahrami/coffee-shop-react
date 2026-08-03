import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
const Loveitems = ({
  cart,
  love,
  Clearbasket,
  removecart,
  removecartLove,
  addtoLove,
}) => {
  //   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="flex items-center gap-x-3">
      <div className="relative group cursor-pointer">
        <div
          className="absolute left-0 mt-14 w-[440px]
          rounded-2xl border-t-[3px] border-t-orange-300
          bg-white dark:bg-zinc-700
          p-6 shadow-xl
          opacity-0 invisible
          duration-300
          group-hover:opacity-100
          group-hover:visible"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-400">{love.length} کالا</span>

            <a
              href="#"
              className="text-sm text-emerald-600 hover:text-emerald-700"
            >
              مشاهده علاقه مندی ها
            </a>
          </div>

          {/* Products */}
          <div className="max-h-[260px] overflow-y-auto flex flex-col gap-y-4">
            {love.length === 0 ? (
              <p className="text-center text-gray-400 py-6">
                علاقه مندی ها خالی است.
              </p>
            ) : (
              love.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-x-4 border-b border-gray-200 dark:border-zinc-600 pb-4"
                >
                  <img
                    className="w-20 h-20 object-contain"
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="flex-1 leading-7">
                    <h3 className="text-sm font-Dana text-zinc-700 dark:text-white">
                      {product.name}
                    </h3>

                    <p className="text-xs text-emerald-600">موجود در انبار</p>

                    <p className="text-base font-DanaBold text-zinc-700 dark:text-white">
                      {product.price.toLocaleString()} {product.priceCurrency}
                    </p>
                  </div>
                  <FaTrashCan
                    onClick={() => removecartLove(product.id)}
                    className="mt-16 cursor-pointer"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex items-center pl-2 gap-x-4 cursor-pointer ">
          <FaRegHeart className="w-8 h-8 " />
        </div>
      </div>
    </div>
  );
};

export default Loveitems;
