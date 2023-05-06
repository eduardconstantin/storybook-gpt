import React from "react";
import { useForm } from "react-hook-form";
import { ConvertType } from "./page";

export const Form = ({ convertComponent }: Prop) => {
  "use client";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const { component, apiKey } = data;
    const story = await convertComponent({ component, apiKey });
    setValue("story", story);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("apiKey", { required: true })} />
      <textarea {...register("component", { required: true })} />
      <button type="submit">Create story</button>
      <textarea disabled {...register("story", { required: false })} />
    </form>
  );
};

type FormValues = {
  component: string;
  apiKey: string;
  story?: string;
};

type Prop = {
  convertComponent: ({ component, apiKey }: ConvertType) => Promise<string | undefined>;
};
