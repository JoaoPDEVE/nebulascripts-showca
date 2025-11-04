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
  { id: 'discord', labelKey: 'nav.discord' },
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
    <nav 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      aria-label="Navegação por seções"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
          aria-label={t(section.labelKey)}
          aria-current={activeSection === section.id ? 'true' : 'false'}
        >
          <div
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              activeSection === section.id
                ? 'bg-primary scale-150 glow-purple'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-125'
            )}
          />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 glass-card text-xs text-foreground rounded-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t(section.labelKey)}
          </span>
        </button>
      ))}
    </nav>
  )
}
