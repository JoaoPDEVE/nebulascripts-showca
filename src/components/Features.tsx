import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { FeatureCard } from './FeatureCard'

export function Features() {
  const { t } = useTranslation()
  const features = t('features.list', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <Section id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('features.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.desc}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
