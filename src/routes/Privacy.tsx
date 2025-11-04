import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from '@/components/Section'

export function Privacy() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = `${t('privacy.title')} - NebulaScripts`
    window.scrollTo(0, 0)
  }, [t])

  return (
    <div className="pt-24 pb-12">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            {t('privacy.title')}
          </h1>
          
          <div className="glass-card p-8 rounded-xl">
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.content')}
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
