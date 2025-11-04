import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'how-it-works', labelKey: 'nav.howItWorks' },
  { id: 'features', labelKey: 'nav.features' },
  { id: 'showcase', labelKey: 'nav.showcase' },
  { id: 'faq', labelKey: 'nav.faq' },
  { id: 'team', labelKey: 'nav.team' },
  { id: 'discord', labelKey: 'nav.contact' },
]

export function SectionDots() {
  const [activeSection, setActiveSection] = useState('hero')
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          aria-label={t(section.labelKey)}
        >
          <div
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              activeSection === section.id
                ? 'bg-primary scale-150 glow-purple'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-125'
            )}
          />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 glass-card text-xs text-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t(section.labelKey)}
          </span>
        </button>
      ))}
    </div>
  )
}
