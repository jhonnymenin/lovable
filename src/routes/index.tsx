import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { WhyExists } from '@/components/sections/WhyExists'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="bg-white w-full overflow-x-hidden">
      <Header />
      <Hero />
      <WhyExists />
    </main>
  )
}
