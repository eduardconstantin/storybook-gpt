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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#131215] border border-zinc-700 rounded-2xl p-12 flex flex-row"
    >
      <div>
        <div className="flex flex-col">
          <label className="color-zinc-300">OPENAI API KEY</label>
          <input type="text" {...register("apiKey", { required: "This is required." })} />
          <ErrorMessage errors={errors} name="apiKey" as="p" />
        </div>
        <div className="flex flex-col">
          <label className="color-zinc-300">OPENAI API KEY</label>
          <textarea {...register("component", { required: "This is required." })} />
          <ErrorMessage errors={errors} name="component" as="p" />
        </div>
        <button type="submit">Create story</button>
      </div>
      <div className="flex flex-col">
        <label className="color-zinc-300">STORYBOOK STORY</label>
        <textarea disabled {...register("story", { required: false })} />
      </div>
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
