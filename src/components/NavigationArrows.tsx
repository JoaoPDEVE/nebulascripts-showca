import { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export function NavigationArrows() {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  useEffect(() => {
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
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('[data-horizontal-scroll]') as HTMLElement
    if (!container) return

    const scrollAmount = direction === 'left' ? -container.clientWidth : container.clientWidth
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <>
      <button
        onClick={() => scroll('left')}
        className={cn(
          'fixed left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center transition-opacity duration-300 hover:bg-card/90',
          showLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-label="Previous section"
      >
        <CaretLeft size={24} className="text-foreground" weight="bold" />
      </button>

      <button
        onClick={() => scroll('right')}
        className={cn(
          'fixed right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center transition-opacity duration-300 hover:bg-card/90',
          showRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-label="Next section"
      >
        <CaretRight size={24} className="text-foreground" weight="bold" />
      </button>
    </>
  )
}
