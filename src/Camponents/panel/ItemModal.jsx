import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
const ItemModal = ({ open, onclose, products }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const mutation = useMutation({
    mutationFn: async (newproduct) => {
      if (imageFile) {
        const reader = new FileReader();
        const imageBase64 = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(imageFile);
        });
        newProduct.image = imageBase64;
      }

      const res = api.post("/products", newproduct);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      reset();
      onclose();
    },
  });
  const onSubmit = (data) => {
    mutation.mutate({
      productId: products.id,
      name: data.name,
      image: "",
      price: data.price,
      image: data.image,
    });
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[500px] p-6">
        <h2 className="text-2xl mb-5 mr-[180px] pb-2">
          ثبت نظر
          {products?.name}
        </h2>

        <form className="h-[300px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              عکس محصول
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
              />
            </div>
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="پیش‌نمایش"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-around ">
            <input
              className="w-[180px] border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="نام :"
              {...register("name")}
            />
            <input
              className="w-[180px] border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="قیمت"
              {...register("price")}
            />
          </div>
          <textarea
            className="border-[1px] p-6 rounded-[5px] mt-8 mr-6 w-[400px] h-[80px]"
            placeholder="توضیحات..."
            {...register("عکس")}
          />

          <div className="flex items-center justify-center gap-10">
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

export default ItemModal;
