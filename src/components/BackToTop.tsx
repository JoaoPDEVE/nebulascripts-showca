import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const container = document.querySelector('[data-horizontal-scroll]') as HTMLElement
    if (!container) return

    const handleScroll = () => {
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        setShow(container.scrollTop > 100)
      } else {
        setShow(container.scrollLeft > 100)
      }
    }

    handleScroll()
    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    
    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const hero = document.getElementById('hero')
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40 md:bottom-6 md:left-6 md:right-auto"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg glow-purple-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Voltar ao início"
          >
            <ArrowUp size={24} weight="bold" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
