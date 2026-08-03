import { BiCommentDetail } from "react-icons/bi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";

export default [
  {
    id: crypto.randomUUID(),
    title: "منو اصلی",
    items: [
      {
        id: crypto.randomUUID(),
        href: "/panel",  // ✅ اضافه کردن panel
        title: "داشبورد",
        icon: HiOutlineHome,
      },
      {
        id: crypto.randomUUID(),
        href: "/panel/products",  // ✅ اضافه کردن panel
        title: "محصولات",
        icon: HiOutlineShoppingCart,
      },
      {
        id: crypto.randomUUID(),
        href: "/panel/users",  // ✅ اضافه کردن panel
        title: "کاربران",
        icon: HiOutlineUsers,
      },
      {
        id: crypto.randomUUID(),
        href: "/panel/tickets",  // ✅ اضافه کردن panel
        title: "تیکت ها",
        icon: HiOutlineChatBubbleLeftRight,
      },
      {
        id: crypto.randomUUID(),
        href: "/panel/comments",  // ✅ اضافه کردن panel
        title: "کامنت ها",
        icon: BiCommentDetail,
      },
    ],
  },
];