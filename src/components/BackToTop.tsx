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
      setShow(container.scrollLeft > 100)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
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
          className="fixed bottom-6 left-6 z-40 lg:bottom-8 lg:left-8"
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
