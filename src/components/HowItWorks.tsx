import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from './Section'

export function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-transparent to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('how.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-6 rounded-xl border-accent/30 bg-gradient-to-r from-primary/5 to-accent/5">
          <p className="text-center text-sm leading-relaxed">
            {t('how.note')}
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
