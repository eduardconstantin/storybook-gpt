import React from "react";
import { Configuration, OpenAIApi } from "openai";
import Form from "./form";
import Header from "./header";
import { template } from "./data/story-template";

export async function ComponentConverter({ component, apiKey }: ConvertType) {
  "use server";
  const prompt = `Write a Storybook component from a React component, without any comments added. Here's the input code for the react component:\n${component}\nThis is the template I want you to use to create the storybook component, keep the provided format, add component variants if possible:\n${template}\n`;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY || apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1024,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 1,
    presence_penalty: 0.5,
    stop: ["\n\n"],
  });

  return response.data.choices[0].text;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center px-24 font-mono max-w-6xl m-auto">
      <Header />
      <Form convertComponent={ComponentConverter} />
    </main>
  );
}

export type ConvertType = {
  component: string;
  apiKey: string;
};
