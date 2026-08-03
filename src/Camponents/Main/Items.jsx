import React, { useEffect, useState } from "react";
import products from "./../../Data/ItemsData";
import Itemcard from "./Itemcard";
import Pagination from "./../pagination/Pagination";
import usefetch from "./../../hooks/usefetch";
import api from "../../api/api";
import { useQuery } from "@tanstack/react-query";
const Items = ({
  cart,
  addtocart,
  love,
  addtoLove,
  star,
  setstar,
  setcart,
}) => {
  const [paginateitems, setpaginateitems] = useState([]);
  const fetchitem = async () => {
    const res = await api.get("/products");
    return res.data;
  };
  const { data: product = [] } = useQuery({
    queryKey: [products],
    queryFn: fetchitem,
  });
  return (
    <div className="flex flex-wrap gap-[20.8px] pr-0 justify-center p-8">
      {paginateitems?.map((product) => (
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

      <Pagination
        items={product}
        setitems={setpaginateitems}
        itemsperpage={4}
      />
    </div>
  );
};

export default Items;
