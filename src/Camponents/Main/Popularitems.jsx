import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Popularthings from "./popularthings";
import usePagination from "../../hooks/usePagination";
import PaginationHook from "../pagination/PaginationHook";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
const Popularitems = ({
  cart,
  addtocart,
  love,
  addtoLove,
  star,
  setstar,
  setcart,
}) => {
  const fetchitem = async () => {
    const res = await api.get("/PopularItems");
    return res.data;
  };
  const { data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: fetchitem,
  });
  return (
    <div className="flex flex-wrap gap-[20.8px] pr-0 justify-center p-8">
      <Swiper
        className="w-full"
        modules={[Navigation]}
        navigation={{
          prevEl: ".popular-prev",
          nextEl: ".popular-next",
        }}
        slidesPerView={4}
        spaceBetween={20}
      >
        {popular?.map((product) => (
          <SwiperSlide key={product.id}>
            <Popularthings
              product={product}
              cart={cart}
              addtocart={addtocart}
              love={love}
              addtoLove={addtoLove}
              star={star}
              setstar={setstar}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popularitems;
