import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import api from "./../../../api/api";
import {
  QueryClient,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

const Editmodal = ({ open, onclose, products, selectedProduct }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (selectedProduct) {
      reset({
        name: selectedProduct.name,
        name2: selectedProduct.nameLine2,
        price: selectedProduct.price,
        image: selectedProduct.image,
      });
    }
  }, [selectedProduct, reset]);

  const updateMutation = useMutation({
    mutationFn: (updateproducts) =>
      api.put(`/products/${updateproducts.id}`, updateproducts),

    onSuccess: () => {
      toast.success("Success");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      setOpen(false);
    },
  });

  const onSubmit = (data) => {
    updateMutation.mutate({
      ...selectedProduct,
      ...data,
    });
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[300px] p-6">
        <h2 className="text-2xl mb-5 mr-[90px] pb-5">
          تغیرات
          {products?.name}
        </h2>

        <form className="h-[250px] " onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              className="w-[250px] border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="نام :"
              {...register("name")}
            />
            <br />
            <input
              className="w-[250px] mt-4 border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="نام 2:"
              {...register("name2")}
            />
            <input
              className="w-[250px] mt-4 border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="قیمت"
              {...register("price")}
            />
          </div>

          <div className="flex items-center justify-center mt-10 gap-10">
            <button
              className="border-[1px] border-green-600 bg-green-600 w-[100px] p-1 rounded-[3px] mt-4 "
              type="submit"
            >
              <span className="text-white"> ثبت </span>
            </button>
            <button
              className="border-[1px] border-red-600 bg-red-600 w-[100px] p-1 rounded-[3px] mt-4 "
              type="button"
              onClick={onclose}
            >
              <span className="text-white"> خروج </span>
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Editmodal;
