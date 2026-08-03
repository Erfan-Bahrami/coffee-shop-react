import React from "react";
import LoginForm from "./Loginform";
import { useNavigate } from "react-router";
import usefetch from "../hooks/usefetch";
import useinpute from "../hooks/useinpute";
import api from "../api/api";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.get("/users");

      const user = res.data.find(
        (item) => item.name === data.name && item.password === data.password,
      );

      if (!user) {
        toast.error("This didn't work.");
        return;
      }

      localStorage.setItem("token", user.token);

      localStorage.setItem("user", JSON.stringify(user));
      toast.success("ورود با موفقیت !");
      reset();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
};
export default Login;
