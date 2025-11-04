import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Play } from '@phosphor-icons/react'
import { Section } from './Section'

export function Showcase() {
  const { t } = useTranslation()

  const placeholderImages = [
    'https://placehold.co/600x400/1a1a2e/7c3aed?text=Demo+1',
    'https://placehold.co/600x400/1a1a2e/7c3aed?text=Demo+2',
    'https://placehold.co/600x400/1a1a2e/7c3aed?text=Demo+3',
    'https://placehold.co/600x400/1a1a2e/7c3aed?text=Demo+4',
  ]

  return (
    <Section id="showcase" className="bg-gradient-to-b from-primary/5 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('showcase.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('showcase.caption')}
        </p>

        <div className="mb-8">
          <div className="relative aspect-video glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-colors">
                  <Play weight="fill" size={32} className="text-primary ml-1" />
                </div>
                <p className="text-lg font-medium">{t('showcase.videoLabel')}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  (YouTube embed placeholder)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {placeholderImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-lg overflow-hidden hover:border-primary/30 transition-all hover:scale-105"
            >
              <img
                src={src}
                alt={`${t('showcase.imagesAlt')} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
