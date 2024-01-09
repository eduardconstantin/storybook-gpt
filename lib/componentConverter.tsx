import { Configuration, OpenAIApi } from 'openai'
import { template } from '@storybook-gpt/app/data/story-template'

export type ConvertType = {
  component: string
  apiKey: string
}

export async function ComponentConverter({ component, apiKey }: ConvertType) {
  const prompt = `Write a Storybook component from a React component, without any comments added. Here's the input code for the react component:\n${component}\nThis is the template I want you to use to create the storybook component, keep the provided format, add component variants if possible:\n${template}\n`

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY || apiKey,
  })
  const openai = new OpenAIApi(configuration)
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: prompt,
    max_tokens: 2048,
    temperature: 0.7,
    top_p: 1.0,
    n: 1,
    frequency_penalty: 1,
    presence_penalty: 0.5,
    stop: ['\n\n'],
  })

  return response.data.choices[0].text
}
