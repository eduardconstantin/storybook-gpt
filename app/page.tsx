import React from 'react'

import Form from './form'
import Header from './header'
import { ComponentConverter } from '@storybook-gpt/lib/componentConverter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center px-24 font-mono max-w-6xl m-auto ">
      <Header />
      <Form convertComponent={ComponentConverter} />
    </main>
  )
}
