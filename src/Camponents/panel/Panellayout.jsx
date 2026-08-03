import React, { useState } from "react";
import PaneLHeadermenu from "./PaneLHeadermenu";
import PanelmenuData from "../../Data/PanelmenuData";
import PanelMenus from "./PanelMenus";
import { Outlet } from "react-router";
import Headerpanel from "./hederpanel/Headerpanel";
import Panelitems from "./panelcomponent/Panelitems";
import api from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import Background from "./Background";

const Panellayout = () => {
  const fetchmenus = async () => {
    const res = await api.get("/panelmenus");
    return res.data;
  };
  const { data: panelmenus = [] } = useQuery({
    queryKey: ["panelmenus"],
    queryFn: fetchmenus,
  });

  return (
    <div className="  relative min-h-screen">
      <Background />
      <div className="relative z-10 flex">
        <aside
          className=" bg-slate-500  w-[272px] relative z-10 bg-white h-screen 
    sticky top-0 border-l p-6"
        >
          <PaneLHeadermenu />
          <PanelMenus panelmenus={panelmenus} />
        </aside>
        <div className="flex-1 flex flex-col min-w-0">
          <Headerpanel />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Panellayout;
