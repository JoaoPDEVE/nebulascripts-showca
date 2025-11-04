import { useEffect, RefObject } from 'react'

export function useHorizontalScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        element.scrollBy({
          left: e.deltaY,
          behavior: 'auto'
        })
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const width = element.offsetWidth
      
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          element.scrollBy({ left: width, behavior: 'smooth' })
          break
        case 'ArrowLeft':
          e.preventDefault()
          element.scrollBy({ left: -width, behavior: 'smooth' })
          break
        case 'Home':
          e.preventDefault()
          element.scrollTo({ left: 0, behavior: 'smooth' })
          break
        case 'End':
          e.preventDefault()
          element.scrollTo({ left: element.scrollWidth, behavior: 'smooth' })
          break
      }
    }

    element.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      element.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref])
}
