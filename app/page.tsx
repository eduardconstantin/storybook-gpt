import Header from './components/header'
import { MainContent } from './components/main-content'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center px-20 font-mono max-w-6xl mx-auto my-5">
      <Header />
      <MainContent />
    </main>
  )
}
