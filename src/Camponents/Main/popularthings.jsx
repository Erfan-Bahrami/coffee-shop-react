// ProductCard.jsx
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
// import { menusitems } from "./../../Data/MenuData";
import PopularItems from "./../../../db.json";
import { Link } from "react-router";
const Popularthings = ({ product, cart, addtocart, addtoLove, love }) => {
  const [star, setstar] = useState(PopularItems.rating);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div key={i} className="flex items-center w-[120px] h-[24px]">
          <FaRegStar
            onClick={() => setstar(i)}
            className={`cursor-pointer ${i <= star ? "text-yellow-400" : "text-gray-400"}`}
            width="20"
            height="20"
          />
        </div>,
      );
    }
    return stars;
  };

  const isInCart = cart.some((item) => item.id === product.id);
  const isInLove = love.some((item) => item.id === product.id);
  return (
    <div className="w-[272px] h-[410px] rounded-2xl bg-white dark:bg-zinc-700 shadow-lg">
      <Link to="./shop">
        <div className="w-[224px] mr-[22px] mt-[6px]">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="font-YekanBakhRegular text-[20px] mr-[26px] mt-[14px] dark:text-white">
          <span>
            {product.name}
            <br /> {product.nameLine2}
          </span>
        </div>
      </Link>

      <div className="flex items-center font-DanaBold gap-x-[5px] text-emerald-600 mr-[26px] mt-[10px]">
        <span className="text-[22px]">{product.price.toLocaleString()}</span>
        <span className="text-[14px]">{product.priceCurrency}</span>
      </div>

      <div className="flex items-center gap-x-[64px] mt-[12px]">
        <div className="flex items-center mr-[17px] gap-x-[15px]">
          <div>
            <div
              className=" cursor-pointer"
              onClick={() => addtocart(product.id)}
            >
              <HiOutlineShoppingCart
                className={`w-[22px] h-[22px] ${
                  isInCart ? "text-red-500" : "text-gray-400"
                }`}
              />
            </div>
          </div>

          <div onClick={() => addtoLove(product.id)} className="cursor-pointer">
            <FaRegHeart
              className={`w-[22px] h-[22px] ${isInLove ? "text-red-500" : " text-gray-400"}`}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 w-[120px] h-[24px]">
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default Popularthings;
