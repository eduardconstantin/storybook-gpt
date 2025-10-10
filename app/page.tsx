import Header from './components/header'
import { MainContent } from './components/main-content'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 font-mono sm:px-6 lg:px-8 lg:py-12 max-w-7xl mx-auto">
      <Header />
      <MainContent />
    </main>
  )
}