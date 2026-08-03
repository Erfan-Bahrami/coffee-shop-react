import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import api from "../../api/api";
import Items from "../Main/Items";
import useLocalStorage from "./../../hooks/useLocalStorage";
import MainHeader from "../Main/MainHeader";
import Itemcard from "../Main/Itemcard";
import { useOutletContext } from "react-router";
const Shop = () => {
  const {
    cart,
    setcart,
    addtocart,
    removecart,
    removecartLove,
    addtoLove,
    love,
    star,
    setstar,
  } = useOutletContext();

  const fetchitem = async () => {
    const res = await api.get("/products");
    return res.data;
  };
  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: fetchitem,
  });

  return (
    <div className="">
      <div className="relative dark:bg-zinc-800 md:bg-productbg md:w-full md:h-[818px] bg-no-repeat">
        <MainHeader
          cart={cart}
          addtocart={addtocart}
          love={love}
          addtoLove={addtoLove}
          star={star}
          setstar={setstar}
        />

        <div className="absolute flex flex-wrap gap-x-[22px] gap-y-12 w-[1210px] h-[400px] mr-[227px] mt-[304px]">
          {product?.map((product) => (
            <Itemcard
              key={product.id}
              product={product}
              cart={cart}
              addtocart={addtocart}
              love={love}
              addtoLove={addtoLove}
              star={star}
              setstar={setstar}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Shop;
