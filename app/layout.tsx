import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Storybook GPT',
  description: 'Generate Storybook stories from React components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#151317]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
