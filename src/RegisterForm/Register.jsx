import React from "react";
import useinpute from "../hooks/useinpute";
import RegisterForm from "./RegisterForm";
import api from "./../api/api";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = crypto.randomUUID();

      const newUser = {
        ...data,
        token,
      };

      const res = await api.post("/users", newUser);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Successfully toasted!");

      reset();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <RegisterForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default Register;
