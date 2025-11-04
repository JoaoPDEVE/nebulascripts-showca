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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute top-1/4 left-10 opacity-20">
        <Code size={80} weight="duotone" className="text-primary animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-10 opacity-20">
        <ShieldCheck size={80} weight="duotone" className="text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-20">
        <Lightning size={60} weight="duotone" className="text-primary animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge variant="glow" className="mb-6">
            {t('hero.badge')}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-purple-hover transition-all"
              onClick={() => window.open(discordUrl, '_blank')}
            >
              {t('hero.primaryCta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5"
              onClick={scrollToHowItWorks}
            >
              {t('hero.secondaryCta')}
              <ArrowDown className="ml-2" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
          >
            {(t('hero.highlights', { returnObjects: true }) as string[]).map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <Check className="text-primary flex-shrink-0" weight="bold" size={20} />
                <span className="font-medium">{highlight}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  )
}
