import { useRef } from 'react'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { Showcase } from '@/components/Showcase'
import { DiscordCTA } from '@/components/DiscordCTA'
import { Team } from '@/components/Team'
import { FAQ } from '@/components/FAQ'
import { ScrollProgress } from '@/components/ScrollProgress'
import { useHorizontalScroll } from '@/hooks/use-horizontal-scroll'

export function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  useHorizontalScroll(scrollContainerRef)

  return (
    <>
      <ScrollProgress />
      <div 
        ref={scrollContainerRef}
        data-horizontal-scroll
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory h-full scroll-smooth"
      >
        <div id="hero" className="min-w-full snap-start flex-shrink-0">
          <Hero />
        </div>
        <div id="how-it-works" className="min-w-full snap-start flex-shrink-0 overflow-y-auto">
          <HowItWorks />
        </div>
        <div id="features" className="min-w-full snap-start flex-shrink-0 overflow-y-auto">
          <Features />
        </div>
        <div id="showcase" className="min-w-full snap-start flex-shrink-0 overflow-y-auto">
          <Showcase />
        </div>
        <div id="faq" className="min-w-full snap-start flex-shrink-0 overflow-y-auto">
          <FAQ />
        </div>
        <div id="team" className="min-w-full snap-start flex-shrink-0 overflow-y-auto">
          <Team />
        </div>
        <div id="discord" className="min-w-full snap-start flex-shrink-0 overflow-y-auto">
          <DiscordCTA />
        </div>
      </div>
    </>
  )
}
