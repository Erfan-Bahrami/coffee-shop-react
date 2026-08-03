import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
const Modal = ({ open, onclose, products }) => {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment) => api.post("/comments", newComment),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
      reset();
      onclose();
      // alert("Succses");
    },

    // onError: (error) => {
    //   alert("Faild");
    // },
  });

  const onSubmit = (data) => {
    mutation.mutate({
      productId: products.id,

      name: data.name,

      email: data.email,

      comment: data.comment,

      createdAt: new Date(),
    });
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[500px] p-6">
        <h2 className="text-2xl mb-5 mr-[180px] pb-2">
          ثبت نظر
          {products.name}
        </h2>

        <form className="h-[200px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-around ">
            <input
              className="w-[180px] border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="نام :"
              {...register("name")}
            />
            <input
              className="w-[180px] border-[1px] rounded-[5px] pr-3 p-1"
              placeholder="ایمیل"
              {...register("email")}
            />
          </div>
          <textarea
            className="border-[1px] p-6 rounded-[5px] mt-8 mr-6 w-[400px] h-[80px]"
            placeholder="نظر شما..."
            {...register("comment")}
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

export default Modal;
