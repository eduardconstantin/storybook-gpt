import { Configuration, OpenAIApi } from "openai";
import { template } from "./data/story-template";

export async function ComponentConverter({ component, apiKey }: { component: string; apiKey: string }) {
  const prompt = `Write a Storybook component for a React component, without any comments added. Here's the code for the input component:\n ${component}\n This is the template you should use for the storybook story, keep the provided format, add component variants if possible:\n ${template}`;

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

  return response.data.choices[0].text?.trim();
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
