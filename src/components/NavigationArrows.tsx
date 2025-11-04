import { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export function NavigationArrows() {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const container = document.querySelector('[data-horizontal-scroll]') as HTMLElement
    if (!container) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setShowLeft(scrollLeft > 50)
      setShowRight(scrollLeft < scrollWidth - clientWidth - 50)
    }

    handleScroll()
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const scroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('[data-horizontal-scroll]') as HTMLElement
    if (!container) return

    const scrollAmount = direction === 'left' ? -container.clientWidth : container.clientWidth
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  if (isMobile) return null

  return (
    <>
      <button
        onClick={() => scroll('left')}
        className={cn(
          'fixed left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 hover:glow-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          showLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-label="Seção anterior"
        disabled={!showLeft}
      >
        <CaretLeft size={24} className="text-foreground" weight="bold" aria-hidden="true" />
      </button>

      <button
        onClick={() => scroll('right')}
        className={cn(
          'fixed right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 hover:glow-purple lg:right-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          showRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-label="Próxima seção"
        disabled={!showRight}
      >
        <CaretRight size={24} className="text-foreground" weight="bold" aria-hidden="true" />
      </button>
    </>
  )
}
