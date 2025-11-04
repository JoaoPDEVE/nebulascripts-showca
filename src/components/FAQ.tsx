import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from './Section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  q: string
  a: string
}

export function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as FAQItem[]

  return (
    <Section id="faq" className="bg-gradient-to-b from-primary/5 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('faq.title')}
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card px-6 rounded-xl border-white/10"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </Section>
  )
}
