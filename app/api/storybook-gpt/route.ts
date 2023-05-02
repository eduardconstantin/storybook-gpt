import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined in .env file. Please add it there (see README.md for more details).");
}

export async function GET(request: Request) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const prompt = `Write a Storybook component for a React component, without any comments added. Here's the code for the input component:${"import React, { useState } from 'react';const CounterButton = ({handleClick}) => {  const [count, setCount] = useState(0);  return (    <button onClick={handleClick}>      {`Clicked ${count} time${count === 1 ? '' : 's'}`}    </button>  );};export default CounterButton;"}This is the template you should use for the storybook story, keep the format provided, add component variants if needed:${"import type { Meta, StoryObj } from '@storybook/react';//import componentconst meta: Meta<//type of component> = {  title: //title of component,  component: //component ,};export default meta;type Story = StoryObj<//type of component>;const StoryTemplate: Story = {  render: (args) => //render component,};export Primary = {  ...StoryTemplate,  args: {      //component's props  }}"}`;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 1,
    presence_penalty: 0.5,
  });

  return NextResponse.json({ result: completion.data.choices[0].text });
}
