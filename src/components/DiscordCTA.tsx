import { useTranslation } from 'react-i18next'
import { DiscordLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Button } from '@/components/ui/button'

const discordUrl = 'https://discord.gg/UTw6ATqCjG'

export function DiscordCTA() {
  const { t } = useTranslation()

  return (
    <Section className="bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 rounded-2xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
            <DiscordLogo weight="fill" size={32} className="text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('discord.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('discord.desc')}
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-purple-hover transition-all"
            onClick={() => window.open(discordUrl, '_blank')}
          >
            <DiscordLogo className="mr-2" weight="fill" />
            {t('discord.cta')}
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
