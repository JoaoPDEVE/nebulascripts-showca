import { useEffect, useState } from 'react'

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)

  useEffect(() => {
    let lastScrollX = 0
    let lastTime = Date.now()
    let ticking = false

    const container = document.querySelector('[data-horizontal-scroll]') as HTMLElement
    if (!container) return

    const updateVelocity = () => {
      const currentScrollX = container.scrollLeft
      const currentTime = Date.now()
      
      const distance = currentScrollX - lastScrollX
      const time = currentTime - lastTime
      
      const currentVelocity = Math.abs(distance / time)
      setVelocity(currentVelocity)
      setDirection(distance > 0 ? 'right' : distance < 0 ? 'left' : null)
      
      lastScrollX = currentScrollX
      lastTime = currentTime
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVelocity)
        ticking = true
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return { velocity, direction }
}
