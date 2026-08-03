import React from "react";
import RedingHeader from "./RedingHeader";
import api from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import RedingForm from "./RedingForm";

const Reding = () => {
  const getreading = async () => {
    const res = await api.get("/reading");
    return res.data;
  };

  const {
    data: reading = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reading"],
    queryFn: getreading,
  });

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در دریافت داده‌ها</div>;

  return (
    <div className="">
      {/* هدر */}
      <RedingHeader />

      {/* آیتم‌ها */}
      <div className="pt-[64px] pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reading?.map((item) => (
            <RedingForm key={item.id} reading={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reding;
