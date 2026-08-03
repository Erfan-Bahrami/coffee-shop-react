import React from "react";
import { useParams } from "react-router";

const categoryTitle = () => {
  const catrgoryTitle = {
    pro: "قهوه ویژه",
    glob: "ویژه در سطح جهانی",
    profetional: "قهوه درجه یک",
    tegar: "ترکیب تجاری",
    pils: "کپسول قهوه",
    brezil: "قهوه زینو برزیلی",
  };
};

const Cofeecategory = () => {
  const { category } = useParams();
  const title = categoryTitle[category] || "دسته‌بندی نامشخص";

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-4">محتوای مربوط به {title} اینجا قرار می‌گیرد.</p>
    </div>
  );
};

export default Cofeecategory;
