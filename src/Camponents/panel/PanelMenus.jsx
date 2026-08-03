import React from "react";
import { NavLink } from "react-router";
import PanelmenuData from "../../Data/PanelmenuData";
import clsx from "clsx";
import { Link } from "react-router";
import { BiCommentDetail } from "react-icons/bi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";
const PanelMenus = ({ panelmenus }) => {
  const iconMap = {
    HiOutlineHome: HiOutlineHome,
    HiOutlineUsers: HiOutlineUsers,
    HiOutlineShoppingCart: HiOutlineShoppingCart,
    HiOutlineChatBubbleLeftRight: HiOutlineChatBubbleLeftRight,
    BiCommentDetail: BiCommentDetail,
  };
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };
  return (
    <div className="space-y-3 mt-6">
      {panelmenus?.map((menu) => (
        <div key={menu.id}>
          <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-100 space-y-1  *:px-3 *:rounded-md text-gray-700">
            <NavLink
              to={menu.path}
              end
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "relative before:absolute before:w-1 before:h-full before:rounded-l-full before:primary-bg before:-right-6 *:[svg]:text-teal-600! before:border-none bg-zinc-300/60"
                    : "border-transparent!",
                )
              }
            >
              {getIcon(menu.icon)}
              <span>{menu.title}</span>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PanelMenus;
