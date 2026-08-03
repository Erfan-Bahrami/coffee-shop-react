import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Headerlayout from "./../Camponents/Headerlayout";
import Menusss from "../Camponents/Header/Menusss";
import LeftHeader from "../Camponents/Header/LeftHeader";
import Caption from "../Camponents/Header/Caption";
// import { menusitems } from "../Data/MenuData";
import products from "../Data/ItemsData";
import useLocalStorage from "../hooks/useLocalStorage";
import usefetch from "./../hooks/usefetch";
import MobileMenu from "../Camponents/Main/MobileMenu";
const Layout = () => {
  const { data: products } = usefetch("http://localhost:3000/products");
  const [cart, setcart] = useLocalStorage("cart", []);
  const [love, setlove] = useLocalStorage("love", []);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const [searchValue, setsearchvalue] = useState("");
  const [searchproduct, setsearchproduct] = useState([]);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setsearchproduct([]);
      return;
    }

    const foundedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setsearchproduct(foundedProducts);
  }, [searchValue]);

  const [theme, sertheme] = useLocalStorage("theme", "dark");
  const toggletheme = () => {
    const layout = theme === "dark" ? "light" : "dark";
    sertheme(layout);
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.removeItem("layout");
  }, [theme]);

  const addtocart = (id) => {
    const mainproduct = products.find((product) => product.id === id);
    if (mainproduct) {
      setcart([...cart, mainproduct]);
    }
  };

  const removecart = (id) => {
    setcart((carditem) => carditem.filter((item) => item.id !== id));
  };

  const addtoLove = (id) => {
    const mainproduct = products.find((product) => product.id === id);
    if (mainproduct) {
      setlove([...love, mainproduct]);
    }
  };

  const removecartLove = (id) => {
    setlove((carditem) => carditem.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="h-[797px]  dark:bg-zinc-800 relative bg-cover bg-no-repeat  bg-homemobile md:bg-homedekstop bg[center_top]  ">
        <div className="  justify-between w-full flex items-center font-Dana  hidden absolute  md:flex fixed top-9 right-0 left-0  items-center w-[98%] lg:w-[90%] pl-4 pr-10 py-5 h-24 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]  ">
          <Headerlayout>
            <Menusss />
          </Headerlayout>
          <LeftHeader
            cart={cart}
            love={love}
            theme={theme}
            searchValue={searchValue}
            searchproduct={searchproduct}
            toggletheme={toggletheme}
            addtocart={addtocart}
            removecart={removecart}
            addtoLove={addtoLove}
            removecartLove={removecartLove}
            setsearchvalue={setsearchvalue}
            setsearchproduct={setsearchproduct}
          />
        </div>
        <Caption />
        <MobileMenu
          theme={theme}
          toggleTheme={toggletheme}
          cartItems={cart}
          totalPrice={totalPrice}
          onCartClick={() => console.log("رفتن به صفحه سبد خرید")}
        />
      </div>

      <Outlet
        context={{
          cart,
          love,
          theme,
          toggletheme,
          addtocart,
          removecart,
          addtoLove,
          removecartLove,
        }}
      />
    </>
  );
};

export default Layout;
