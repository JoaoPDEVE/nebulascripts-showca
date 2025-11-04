import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, ArrowDown, Code, ShieldCheck, Lightning } from '@phosphor-icons/react'
import { Badge } from './Badge'
import { Button } from '@/components/ui/button'

const discordUrl = 'https://discord.gg/UTw6ATqCjG'

export function Hero() {
  const { t } = useTranslation()

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        className="absolute top-1/4 left-4 md:left-10 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        aria-hidden="true"
      >
        <Code size={48} weight="duotone" className="md:w-20 md:h-20 text-primary animate-pulse" />
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-4 md:right-10 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        aria-hidden="true"
      >
        <ShieldCheck size={48} weight="duotone" className="md:w-20 md:h-20 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-1/4 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        aria-hidden="true"
      >
        <Lightning size={40} weight="duotone" className="md:w-15 md:h-15 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge variant="glow" className="mb-6">
            {t('hero.badge')}
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight px-4">
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-purple-hover transition-all transform hover:scale-105"
              onClick={scrollToHowItWorks}
              aria-label={t('hero.secondaryCta')}
            >
              {t('hero.secondaryCta')}
              <ArrowDown className="ml-2" aria-hidden="true" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm px-4"
          >
            {(t('hero.highlights', { returnObjects: true }) as string[]).map((highlight, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              >
                <Check className="text-primary flex-shrink-0" weight="bold" size={20} aria-hidden="true" />
                <span className="font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-hidden="true"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  )
}
