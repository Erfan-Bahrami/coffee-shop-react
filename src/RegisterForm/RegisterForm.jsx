import React from "react";
// import facebookIcon from "../Images/facebook.png";
// import googleIcon from "../Images/google.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import usefetch from "../hooks/usefetch";
import useinpute from "../hooks/useinpute";
import { Link } from "react-router";
const RegisterForm = ({
  handleSubmit,
  handlechange,
  formData,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <div
      className="bg-slate-300 min-h-screen flex justify-center items-start pt-20"
      dir="rtl"
    >
      <div className="w-[594px] h-[685px] rounded-[16px] p-[64px] bg-white">
        <h1 className="font-YekanBakhHeavy text-Darkblue mr-[15px] -mt-[16px] mb-[25px] text-[32px] w-[474px]">
          با ما همراه شوید؛ درخشش در مدیریت
        </h1>

        <p className="font-YekanBakhMedium text-[18px] text-Darkfade mb-[32px] mr-[96px] mt-[-16]">
          از هم اکنون به راحتی افراد را مدیریت کنید
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[474px] h-[391px]">
            <div className="w-[474px] h-[89px]">
              <label htmlFor="name" className="font-YekanBakhBold text-[14px]">
                نام و نام خانوادگی*
              </label>

              <input
                id="name"
                // name="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                className="rounded-[4px] border-[0.5px] border-fade w-[474px] h-[40px] pr-4 mt-4"
                // value={formData.name}
                // onChange={handlechange}
                {...register("name", {
                  required: "نام و نام خانوادگی اجباری است",
                  minLength: {
                    value: 3,
                    message: "حداقل ۳ کاراکتر وارد کنید",
                  },
                  maxLength: {
                    value: 10,
                    message: "حداکثر ۱۰ کاراکتر مجاز است",
                  },
                })}
              />
              {errors.name && errors.name.message}
            </div>

            <div className="w-[474px] h-[89px]">
              <label htmlFor="email" className="font-YekanBakhBold text-[14px]">
                ایمیل*
              </label>

              <input
                id="email"
                type="email"
                // name="email"
                placeholder="ایمیل"
                className="rounded-[4px] border-[0.5px] border-fade w-[474px] h-[40px] pr-4 mt-4"
                // value={formData.email}
                // onChange={handlechange}
                {...register("email", {
                  required: "ایمیل اجباری است",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل معتبر وارد کنید",
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>

            <div className="w-[474px] h-[89px]">
              <label
                htmlFor="password"
                className="font-YekanBakhBold text-[14px]"
              >
                پسورد*
              </label>

              <input
                id="password"
                type="password"
                // name="password"
                placeholder="****"
                className="rounded-[4px] border-[0.5px] border-fade w-[474px] h-[40px] pr-4 mt-4"
                // value={formData.password}
                // onChange={handlechange}
                {...register("password", {
                  required: "رمز عبور اجباری است",
                  minLength: {
                    value: 6,
                    message: "حداقل ۶ کاراکتر وارد کنید",
                  },
                })}
              />
              {errors.password && errors.password.message}
            </div>

            <button
              type="submit"
              className="w-[474px] h-[52px] mt-4 rounded-[4px] text-white font-YekanBakhMedium text-4 bg-Darkblue"
            >
              ثبت نام
            </button>

            <div className="text-[12px] flex items-center gap-x-[8px] mt-[5px]">
              <span>حساب دارید؟</span>
              <Link
                to="/Login"
                className="text-[13px] border-b-[2px] border-blue-900"
              >
                ورود
              </Link>
            </div>

            <div className="flex items-center  mr-6">
              <div className="w-[175px] h-[1px] bg-black"></div>

              <p className="flex-shrink-0 m-[20px] text-[18px] font-YekanBakhMedium text-gray">
                ورود با
              </p>

              <div className="w-[175px] h-[1px] bg-black"></div>
            </div>
          </div>
        </form>

        <div className="flex items-center mt-[30px] m-[16px] gap-x-[15px]">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-[230px] h-[52px] rounded border border-fade hover:bg-gray-50 transition"
          >
            <FaFacebookF className="text-xl text-[#1877F2]" />
            <span className="font-YekanBakhMedium">Facebook</span>
          </button>

          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-[230px] h-[52px] rounded border border-fade hover:bg-gray-50 transition"
          >
            <FcGoogle className="text-2xl" />
            <span className="font-YekanBakhMedium">Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
