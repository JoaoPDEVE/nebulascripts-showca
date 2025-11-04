import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { Showcase } from '@/components/Showcase'
import { DiscordCTA } from '@/components/DiscordCTA'
import { Team } from '@/components/Team'
import { FAQ } from '@/components/FAQ'

export function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Showcase />
      <DiscordCTA />
      <Team />
      <FAQ />
    </>
  )
}
