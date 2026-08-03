import React, { useEffect, useState } from "react";
import Searchinpute from "./Searchinpute";
import Notification from "./Notification";
import Profiler from "./Profile";
import api from "../../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
const Headerpanel = () => {
  const fetchitems = async () => {
    const res = await api.get("/products");
    return res.data;
  };
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchitems,
  });

  const [Search, setsearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products?.filter((product) =>
      product.name.toLowerCase().includes(Search.toLowerCase()),
    );
  }, [products, Search]);

  return (
    <div className="w-full p-8 h-20 relative z-10 border-b primary-border-color flex items-center justify-between *:flex *:items-center *:gap-3">
      <div>
        <Searchinpute
          Search={Search}
          setsearch={setsearch}
          filteredProducts={filteredProducts}
        />
      </div>
      <div>
        <Notification />
        <span className="block  w-px h-14 bg-white/20"></span>
        <Profiler />
      </div>
    </div>
  );
};

export default Headerpanel;
