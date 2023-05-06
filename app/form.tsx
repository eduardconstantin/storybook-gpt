"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ConvertType } from "./page";

const Form = ({ convertComponent }: Prop) => {
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
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" {...register("apiKey", { required: "This is required." })} />
      <ErrorMessage errors={errors} name="apiKey" as="p" />
      <textarea {...register("component", { required: "This is required." })} />
      <ErrorMessage errors={errors} name="component" as="p" />
      <button type="submit">Create story</button>
      <textarea disabled {...register("story", { required: false })} />
    </form>
  );
};

export default Form;

type FormValues = {
  component: string;
  apiKey: string;
  story?: string;
};

type Prop = {
  convertComponent: ({ component, apiKey }: ConvertType) => Promise<string | undefined>;
};
