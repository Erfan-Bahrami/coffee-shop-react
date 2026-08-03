import React from "react";
import Outicon from "./Outicon";
import Basket from "./Basket";
import Loveitems from "./Loveitems";
import SearchBox from "./SearchBox";
import Usericon from "./../../Camponents/Header/Usericon";
import Panelsearch from "./../panel/panelcomponent/Panelsearch";
const LeftHeader = ({
  cart,
  love,
  theme,
  toggletheme,
  addtocart,
  Clearbasket,
  removecart,
  removecartLove,
  addtoLove,
  searchValue,
  setsearchvalue,
  searchproduct,
  setsearchproduct,
}) => {
  return (
    <div className="flex gap-x-5 text-orange-200 ">
      <Panelsearch
        searchValue={searchValue}
        setsearchvalue={setsearchvalue}
        setsearchproduct={setsearchproduct}
        searchproduct={searchproduct}
      />
      <span className="block  w-px h-14 bg-white/20"></span>
      <Loveitems
        cart={cart}
        love={love}
        theme={theme}
        toggletheme={toggletheme}
        addtocart={addtocart}
        removecart={removecart}
        removecartLove={removecartLove}
        addtoLove={addtoLove}
      />
      <Basket
        cart={cart}
        addtocart={addtocart}
        removecart={removecart}
        theme={theme}
        toggletheme={toggletheme}
      />
      <span className="block  w-px h-14 bg-white/20"></span>
      {/* <Outicon /> */}
      <Usericon />
    </div>
  );
};

export default LeftHeader;
