import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import api from "../../api/api";
import toast from "react-hot-toast";

const TicketUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (ticket) => api.post("/ticket", ticket),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ticket"],
      });
      toast.success("Success");
      reset();
    },
  });

  const onSubmit = (data) => {
    swal({
      title: "ثبت شود ؟",
      text: "اگر ثبت شود نمیتوانید برگردانید!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        mutation.mutate({
          name: data.name,
          email: data.email,
          subject: data.subject,
          ticket: data.ticket,
        });
        swal("با موفقیت ثبت شد", {
          icon: "success",
        });
      } else {
        swal("قبت نشد" , {
           icon: "warning",
        });
        
      }
    });
  };
  return (
    <div className="bg-slate-700 min-h-screen  pt-[150px] pr-[385px]">
      <div className="space-y-8 w-[800px] bg-white h-[400px] rounded-[10px] relative  p-8">
        <div className="flex items-center gap-x-[100px]">
          <div>
            <label htmlFor="name" className="font-YekanBakhMedium text-[14px]">
              نام و نام خانوادگی*
            </label>
            <input
              className="w-[300px] pr-5 h-[30px] rounded-[5px]  border-[1px]"
              type="text"
              placeholder="وارد کنید ..."
              {...register("name") , {
                required: "type somthing",
                minLength: {
                  value:3,
                  message: "atleast 3"
                } 
               
              }}
            />
            {errors.name && errors.name.message}
          </div>

          <div>
            <label htmlFor="name" className="font-YekanBakhMedium text-[14px]">
              آدرس ایمیل*
            </label>
            <input
              className="w-[300px] pr-5 h-[30px] rounded-[5px]  border-[1px]"
              type="text"
              placeholder="وارد کنید ..."
              {...register("email") , {
                required:" neecery",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل معتبر وارد کنید",
                  },
              }}
            />
            {errors.email && errors.email.message}
          </div>
        </div>
        <div className=" ">
          <div>
            <label htmlFor="name" className="font-YekanBakhMedium text-[14px]">
              موضوع*
            </label>
          </div>

          <input
            className="w-[300px] pr-5 h-[30px] rounded-[5px]  border-[1px]"
            type="text"
            placeholder="وارد کنید ..."
            {...register("subject") ,  {
                required: "type somthing",
                minLength: {
                  value:3,
                  message: "atleast 3"
                } 
               
              }}
          />
           {errors.subject && errors.subject.message}
        </div>
        <div className="">
          <textarea className="w-[736px] p-8 pr-[20px] h-[100px] border-slate-600 border-[1px] ruonded-[5px]" placeholder="Enter ...." {...register("ticket")}></textarea>
        </div>

        <div className="flex items-center gap-x-[100px] pr-[200px]">
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-[100px] h-8 rounded-[5px] text-white  bg-green-600"
          >
            تایید
          </button>
          <Link to="/">
            <button className="w-[100px] h-8 rounded-[5px] text-white  bg-red-600">
              بازگشت
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketUs;
