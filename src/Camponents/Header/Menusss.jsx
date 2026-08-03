import React from "react";
// import { menusitems } from "../../Data/MenuData";
import { Link } from "react-router";
import Logo from "./Logo";
import usefetch from "./../../hooks/usefetch";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { useQuery } from "@tanstack/react-query";
const Menusss = () => {
  const fetchmenus = async () => {
    const res = await api.get("/menus");
    return res.data;
  };

  const { data: menus } = useQuery({
    queryKey: ["menus"],
    queryFn: fetchmenus,
  });

  return (
    <>
      <Logo />
      {menus?.map((item) => (
        <li className="flex items-center relative group" key={item.id}>
          <Link to={item.path} className="text-white hover:text-orange-300">
            {item.title}
          </Link>
          {item.submenus && (
            <ul
              className=" dark:text-white dark:bg-zinc-800 mt-[336px] mr-[-32] duration-300 absolute opacity-0 invisible group-hover:opacity-100  group-hover:visible bg-white
                 text-zinc-700 border-t-[3px] border-t-orange-300 w-52 h-68 p-6  space-y-4  rounded-2xl child:transition-colors  child-hover:text-orange-300"
            >
              {item.submenus.map((sub) => (
                <li key={sub.id}>
                  <Link to={sub.path}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Menusss;
