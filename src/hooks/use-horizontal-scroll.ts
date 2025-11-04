import { useEffect, RefObject } from 'react'

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let previous = 0

  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now()
    const remaining = wait - (now - previous)

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(this, args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now()
        timeout = null
        func.apply(this, args)
      }, remaining)
    }
  }
}

export function useHorizontalScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const isMobile = window.innerWidth < 768

    if (isMobile) {
      return
    }

    const handleWheel = throttle((e: WheelEvent) => {
      if (e.deltaY !== 0 && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        element.scrollBy({
          left: e.deltaY,
          behavior: 'auto'
        })
      }
    }, 16)

    const handleKeyDown = (e: KeyboardEvent) => {
      const width = element.offsetWidth
      
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault()
          element.scrollBy({ left: width, behavior: 'smooth' })
          break
        case 'ArrowLeft':
        case 'PageUp':
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

    element.addEventListener('wheel', handleWheel as EventListener, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      element.removeEventListener('wheel', handleWheel as EventListener)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref])
}
