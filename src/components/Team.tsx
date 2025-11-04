import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { TeamCard } from './TeamCard'

interface TeamMember {
  name: string
  role: string
  discord: string
  bio: string
}

export function Team() {
  const { t } = useTranslation()
  const members = t('team.members', { returnObjects: true }) as TeamMember[]

  return (
    <Section id="team">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 px-4">
          {t('team.title')}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
