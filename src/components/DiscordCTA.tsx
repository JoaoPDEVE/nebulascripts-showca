import { useTranslation } from 'react-i18next'
import { DiscordLogo, Copy, Check } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useState } from 'react'

const discordInvite = 'UTw6ATqCjG'
const discordUrl = `https://discord.gg/${discordInvite}`

export function DiscordCTA() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleCopyInvite = async () => {
    try {
      await navigator.clipboard.writeText(discordUrl)
      setCopied(true)
      toast.success(t('discord.copied', { defaultValue: 'Link do Discord copiado! Cole no seu navegador.' }))
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error(t('discord.copyError', { defaultValue: 'Erro ao copiar. Link: discord.gg/UTw6ATqCjG' }))
    }
  }

  return (
    <Section className="bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
            <DiscordLogo weight="fill" size={32} className="text-primary" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
            {t('discord.title')}
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto px-4">
            {t('discord.desc')}
          </p>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card mono text-xs sm:text-sm text-primary">
              <span>discord.gg/{discordInvite}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-purple-hover transition-all"
            onClick={handleCopyInvite}
          >
            {copied ? (
              <>
                <Check className="mr-2" weight="bold" />
                {t('discord.ctaCopied', { defaultValue: 'Link Copiado!' })}
              </>
            ) : (
              <>
                <Copy className="mr-2" weight="bold" />
                {t('discord.cta')}
              </>
            )}
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
