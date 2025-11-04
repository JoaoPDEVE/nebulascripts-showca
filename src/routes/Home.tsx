import { useRef } from 'react'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { Showcase } from '@/components/Showcase'
import { DiscordCTA } from '@/components/DiscordCTA'
import { Team } from '@/components/Team'
import { FAQ } from '@/components/FAQ'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Footer } from '@/components/Footer'
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
        className="md:flex md:overflow-x-auto md:overflow-y-hidden md:snap-x md:snap-mandatory overflow-y-auto overflow-x-hidden h-full scroll-smooth"
      >
        <div id="hero" className="md:min-w-full md:snap-start md:flex-shrink-0">
          <Hero />
        </div>
        <div id="how-it-works" className="md:min-w-full md:snap-start md:flex-shrink-0 md:overflow-y-auto">
          <HowItWorks />
        </div>
        <div id="features" className="md:min-w-full md:snap-start md:flex-shrink-0 md:overflow-y-auto">
          <Features />
        </div>
        <div id="showcase" className="md:min-w-full md:snap-start md:flex-shrink-0 md:overflow-y-auto">
          <Showcase />
        </div>
        <div id="faq" className="md:min-w-full md:snap-start md:flex-shrink-0 md:overflow-y-auto">
          <FAQ />
        </div>
        <div id="team" className="md:min-w-full md:snap-start md:flex-shrink-0 md:overflow-y-auto">
          <Team />
        </div>
        <div id="discord" className="md:min-w-full md:snap-start md:flex-shrink-0 md:overflow-y-auto">
          <DiscordCTA />
        </div>
        <div className="md:hidden">
          <Footer />
        </div>
      </div>
    </>
  )
}
