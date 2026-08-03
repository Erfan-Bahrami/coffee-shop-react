// components/Navigation/MobileMenu.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlinePhone,
  HiOutlineArrowLeft,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";
import logo from "../../../public/images/svgs/app-logo.svg";
import logoType from "../../../public/images/svgs/app-logo-type.svg";

const MobileMenu = ({
  theme,
  toggleTheme,
  cartItems = [],
  totalPrice = 0,
  onCartClick,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navRef = useRef(null);
  const cartRef = useRef(null);

  // بستن منو با کلیک خارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // بستن با ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsNavOpen(false);
        setIsCartOpen(false);
        setIsSubmenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // قفل کردن اسکرول وقتی منو بازه
  useEffect(() => {
    if (isNavOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavOpen, isCartOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isNavOpen) setIsNavOpen(false);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const closeAll = () => {
    setIsNavOpen(false);
    setIsCartOpen(false);
    setIsSubmenuOpen(false);
  };

  const submenuItems = [
    { name: "قهوه ویژه", link: "/coffee/special" },
    { name: "ویژه در سطح جهانی", link: "/coffee/world-class" },
    { name: "قهوه درجه یک", link: "/coffee/premium" },
    { name: "ترکیبات تجاری", link: "/coffee/commercial" },
    { name: "کپسول قهوه", link: "/coffee/capsule" },
    { name: "قهوه زینو برزیلی", link: "/coffee/brazilian" },
  ];

  return (
    <>
      {/* هدر موبایل - ثابت در بالا */}
      <div className="fixed top-0 left-0 right-0 flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-800 shadow-sm z-30">
        {/* دکمه باز کردن منو */}
        <button
          onClick={toggleNav}
          className="nav-icon p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
          aria-label="باز کردن منو"
        >
          <HiOutlineBars3 className="w-6 h-6 dark:text-white text-zinc-700" />
        </button>

        {/* لوگو */}
        <Link to="/" className="flex items-center">
          <img
            className="w-[100px] h-10 object-contain"
            src={logoType}
            alt="لوگو فروشگاه"
          />
        </Link>

        {/* آیکن سبد خرید */}
        <button
          onClick={toggleCart}
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
          aria-label="سبد خرید"
        >
          <HiOutlineShoppingCart className="w-6 h-6 dark:text-white text-zinc-700" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.reduce(
                (total, item) => total + (item.quantity || 1),
                0,
              )}
            </span>
          )}
        </button>
      </div>

      {/* اوورلی (پس‌زمینه تیره) */}
      {(isNavOpen || isCartOpen) && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeAll} />
      )}

      {/* ==================== منوی اصلی ==================== */}
      <div
        ref={navRef}
        className={`fixed top-0 bottom-0 w-64 h-full md:hidden min-h-screen bg-white dark:bg-zinc-700 z-50 transition-all duration-300 ease-in-out ${
          isNavOpen ? "right-0" : "-right-64"
        }`}
      >
        {/* هدر منو */}
        <div className="flex justify-between items-center pb-5 p-5 border-b border-b-gray-100 dark:border-b-white/10">
          <div className="flex items-center gap-x-3.5">
            <img
              className="w-[41px] h-10 object-contain"
              src={logo}
              alt="لوگو"
            />
            <img
              className="w-[100px] h-10 object-contain"
              src={logoType}
              alt="لوگو فروشگاه"
            />
          </div>
          <button
            onClick={toggleNav}
            className="nav-close-btn p-2 hover:bg-gray-100 dark:hover:bg-zinc-600 rounded-lg transition-colors"
            aria-label="بستن منو"
          >
            <HiOutlineXMark className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        {/* آیتم‌های منو */}
        <nav className="p-4">
          {/* صفحه اصلی */}
          <Link
            to="/"
            onClick={closeAll}
            className="flex items-center gap-x-3 p-3 rounded-lg bg-orange-200/20 text-orange-300 hover:bg-orange-200/30 transition-colors"
          >
            <HiOutlineHome className="w-5 h-5" />
            <span className="text-[16px]">صفحه اصلی</span>
          </Link>

          {/* فروشگاه با ساب‌منو */}
          <div className="mt-4">
            <button
              onClick={toggleSubmenu}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
            >
              <div className="flex items-center gap-x-3">
                <HiOutlineShoppingBag className="w-5 h-5 text-orange-300" />
                <span className="text-[16px] text-orange-300">فروشگاه</span>
              </div>
              <HiChevronDown
                className={`w-4 h-4 text-orange-300 transition-transform duration-300 ${
                  isSubmenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ساب‌منو */}
            <div
              className={`flex flex-col pr-[45px] mt-2 leading-[40px] dark:text-white text-sm transition-all duration-300 overflow-hidden ${
                isSubmenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {submenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={closeAll}
                  className="hover:text-orange-300 transition-colors dark:text-gray-300 dark:hover:text-orange-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* دیکشنری */}
          <Link
            to="/dictionary"
            onClick={closeAll}
            className="flex items-center gap-x-3 p-3 mt-4 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
          >
            <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-zinc-700 dark:text-white" />
            <span className="text-[16px] text-zinc-700 dark:text-white">
              دیکشنری
            </span>
          </Link>

          {/* درباره ما */}
          <Link
            to="/about"
            onClick={closeAll}
            className="flex items-center gap-x-3 p-3 mt-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
          >
            <HiOutlineBriefcase className="w-5 h-5 text-zinc-700 dark:text-white" />
            <span className="text-[16px] text-zinc-700 dark:text-white">
              درباره ما
            </span>
          </Link>

          {/* بلاگ */}
          <Link
            to="/blog"
            onClick={closeAll}
            className="flex items-center gap-x-3 p-3 mt-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
          >
            <HiOutlineDocumentText className="w-5 h-5 text-zinc-700 dark:text-white" />
            <span className="text-[16px] text-zinc-700 dark:text-white">
              بلاگ
            </span>
          </Link>

          {/* تماس با ما */}
          <Link
            to="/contact"
            onClick={closeAll}
            className="flex items-center gap-x-3 p-3 mt-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
          >
            <HiOutlinePhone className="w-5 h-5 text-zinc-700 dark:text-white" />
            <span className="text-[16px] text-zinc-700 dark:text-white">
              تماس با ما
            </span>
          </Link>
        </nav>

        {/* فوتر منو */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 border-t border-b-gray-100 dark:border-b-white/10">
          {/* ورود/ثبت‌نام */}
          <Link
            to="/login"
            onClick={closeAll}
            className="flex items-center text-orange-300 dark:text-orange-300 gap-x-2.5 hover:opacity-80 transition-opacity"
          >
            <HiOutlineArrowLeft className="w-5 h-5" />
            <span className="text-[16px]">ورود | ثبت نام</span>
          </Link>

          {/* دکمه تغییر تم */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-x-2 mt-4 text-orange-300 dark:text-orange-300 hover:opacity-80 transition-opacity"
          >
            {theme === "dark" ? (
              <>
                <HiOutlineSun className="w-5 h-5" />
                <span className="text-[16px]">تم روشن</span>
              </>
            ) : (
              <>
                <HiOutlineMoon className="w-5 h-5" />
                <span className="text-[16px]">تم خاموش</span>
              </>
            )}
          </button>

          {/* سبد خرید */}
          <button
            onClick={() => {
              closeAll();
              if (onCartClick) onCartClick();
            }}
            className="flex items-center gap-x-2 mt-2 text-orange-300 dark:text-orange-300 hover:opacity-80 transition-opacity"
          >
            <HiOutlineShoppingCart className="w-5 h-5" />
            <span className="text-[16px]">سبد خرید</span>
          </button>
        </div>
      </div>

      {/* ==================== سبد خرید ==================== */}
      <div
        ref={cartRef}
        className={`fixed top-0 bottom-0 w-64 h-full md:hidden min-h-screen bg-white dark:bg-zinc-700 z-50 transition-all duration-300 ease-in-out ${
          isCartOpen ? "left-0" : "-left-64"
        }`}
      >
        {/* هدر سبد خرید */}
        <div className="flex justify-between items-center border-b border-b-gray-100 dark:border-b-white/10">
          <button
            onClick={toggleCart}
            className="p-5 hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
            aria-label="بستن سبد خرید"
          >
            <HiOutlineXMark className="w-5 h-5 dark:text-white" />
          </button>
          <span className="p-5 dark:text-white font-DanaMedium">سبد خرید</span>
        </div>

        {/* لیست محصولات سبد خرید */}
        <div className="overflow-y-auto h-[calc(100%-180px)]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex pb-5 items-center gap-x-1 border-b border-b-gray-100 dark:border-b-white/10 p-4"
              >
                <div className="flex size-[100px] h-[100px] flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[14px] text-zinc-700 dark:text-white font-Dana line-clamp-2">
                    {item.name}
                  </span>

                  {item.discount && (
                    <div className="mt-1">
                      <span className="text-[12px] text-teal-600 font-Dana">
                        {item.discount.toLocaleString()} تومان تخفیف
                      </span>
                    </div>
                  )}

                  <div className="mt-1">
                    <span className="text-[15px] font-DanaBold text-zinc-700 dark:text-white">
                      {item.price.toLocaleString()} تومان
                    </span>
                    {item.quantity > 1 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">
                        × {item.quantity}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 p-8">
              <HiOutlineShoppingCart className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-center">سبد خرید شما خالی است</p>
            </div>
          )}
        </div>

        {/* فوتر سبد خرید - دکمه ثبت سفارش */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-white dark:bg-zinc-700 border-t border-t-gray-100 dark:border-t-white/10">
            <div className="flex items-center justify-between">
              <button
                onClick={onCartClick}
                className="bg-emerald-500 hover:bg-emerald-600 transition-colors w-[150px] h-[44px] rounded-xl text-white font-Dana text-[14px]"
              >
                ثبت سفارش
              </button>

              <div className="text-left">
                <span className="text-xs text-gray-500 dark:text-gray-400 block">
                  مبلغ قابل پرداخت
                </span>
                <span className="text-[16px] font-DanaBold text-zinc-700 dark:text-white">
                  {totalPrice.toLocaleString()}{" "}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    تومان
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
