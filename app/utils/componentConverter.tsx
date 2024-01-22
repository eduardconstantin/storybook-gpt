import OpenAI from 'openai'
import { template } from '@storybook-gpt/app/data/story-template'

export type ConvertType = {
  component: string
  apiKey: string
}

export async function ComponentConverter({ component, apiKey }: ConvertType) {
  const prompt = `Write a Storybook component from a React component, without any comments added.\nThis is the template I want you to use to create the storybook component, keep the provided format, add component variants if possible:\n${template}\n`

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || apiKey,
  })
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      {
        role: 'user',
        content: component,
      },
    ],
    max_tokens: 2048,
    temperature: 0.5,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.1,
    stop: ['\n\n'],
  })

  return response.choices[0].message.content
}
