import React from "react";
import MainHeader from "./MainHeader";
import Items from "./Items";
import { menusitems } from "./../../Data/MenuData";
import Pagination from "../pagination/Pagination";
import { useOutletContext } from "react-router";
import Mainfori from "./Mainfori";
import MainPictures from "./MainPictures";
import PopularitemsHeader from "./PopularitemsHeader";
import Popularitems from "./Popularitems";
import Club from "./Club";
import Contact from "./Contact";
import Reding from "./Reding";
import Icons from "./Icons";
import Footer from "./Footer";

const MainItems = () => {
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

  return (
    <div>
      <div>
        <div className="relative dark:bg-zinc-800 md:bg-productbg md:w-full md:h-[818px] bg-no-repeat    ">
          <MainHeader
            cart={cart}
            addtocart={addtocart}
            love={love}
            addtoLove={addtoLove}
            star={star}
            setstar={setstar}
          />

          <div className="absolute flex gap-x-[22px] w-[1210px] h-[400px] mr-[227px] mt-[304px]">
            <Items
              cart={cart}
              addtocart={addtocart}
              love={love}
              addtoLove={addtoLove}
              star={star}
              setstar={setstar}
            />
          </div>
        </div>
        <div className="pt-[64px]">
          <Mainfori />
        </div>
        <div>
          <MainPictures />
        </div>
        <div>
          <PopularitemsHeader />
        </div>
        <div className="absolute  gap-x-[22px] w-[1210px] h-[400px] mr-[227px] mt-[304px]">
          <Popularitems
            cart={cart}
            addtocart={addtocart}
            love={love}
            addtoLove={addtoLove}
            star={star}
            setstar={setstar}
          />
        </div>
        <div>
          <Club />
        </div>
        <div className="absolute flex gap-x-[22px] w-[1210px] h-[400px] mr-[227px] ">
          <Reding />
        </div>
        <div className="mt-[700px]">
          <Contact />
        </div>
        <div>
          <Icons />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainItems;
