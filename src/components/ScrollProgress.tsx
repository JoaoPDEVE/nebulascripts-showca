import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = document.querySelector('[data-horizontal-scroll]') as HTMLElement
    if (!container) return

    const updateProgress = () => {
      const isMobile = window.innerWidth < 768
      
      if (isMobile) {
        const { scrollTop, scrollHeight, clientHeight } = container
        const scrollableHeight = scrollHeight - clientHeight
        const currentProgress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
        setProgress(currentProgress)
      } else {
        const { scrollLeft, scrollWidth, clientWidth } = container
        const scrollableWidth = scrollWidth - clientWidth
        const currentProgress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0
        setProgress(currentProgress)
      }
    }

    updateProgress()
    container.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    
    return () => {
      container.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary glow-purple"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}
