import React from "react";
import Homecart from "./../../panel/panelcomponent/Homecart";
import { generateSummaries } from "./../../../Data/home";
import api from "../../../api/api";
import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
const Panelmain = () => {
  const summarise = generateSummaries({
    productsLength: 4,
    usersLength: 80,
    ticketsLength: 3,
    adminsLength: 200,
  });
  const fechitem = async () => {
    const res = await api.get("/products");
    return res.data;
  };

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fechitem,
  });

  const chartData = products?.map((item) => ({
    name: item.name,
    price: item.price,
  }));
  return (
    <div className="grid p-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
      {summarise.map((summary) => (
        <Homecart key={summary.id} {...summary} />
      ))}

      <div className="  absolute mt-[220px] bg-white pt-12 shadow-sm  pb-4 rounded-lg hover:shadow-md">
        <LineChart
          className="p-5 relative  "
          width={1300}
          height={450}
          data={chartData}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis tickMargin={10} dataKey="name" />

          <YAxis tickMargin={50} />

          <Tooltip />

          <Line type="monotone" dataKey="price" stroke="#0ea5e9" />
        </LineChart>
      </div>
    </div>
  );
};

export default Panelmain;
