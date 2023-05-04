"use client";
import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ convertComponent }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const story = await convertComponent(data.component);
    setValue("story", story);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("apiKey", { required: true })} />
      <textarea {...register("component", { required: true })} />
      <button type="submit">Create story</button>
      <textarea disabled {...register("story")} />
    </form>
  );
};
