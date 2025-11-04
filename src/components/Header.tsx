import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { List, X, DiscordLogo, Check, Users, Copy, ArrowSquareOut } from '@phosphor-icons/react'
import { LanguageToggle } from './LanguageToggle'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [copied, setCopied] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  
  const discordLink = 'https://discord.gg/UTw6ATqCjG'

  const navItems = [
    { label: t('nav.howItWorks'), id: 'how-it-works' },
    { label: t('nav.features'), id: 'features' },
    { label: t('nav.showcase'), id: 'showcase' },
    { label: t('nav.faq'), id: 'faq' },
    { label: t('nav.team'), id: 'team' },
  ]

  useEffect(() => {
    if (location.pathname !== '/') return

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

    const sections = ['hero', 'how-it-works', 'features', 'showcase', 'faq', 'team']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      setMobileMenuOpen(false)
    }
  }

  const copyDiscordLink = async () => {
    try {
      await navigator.clipboard.writeText(discordLink)
      setCopied(true)
      toast.success(t('discord.copied') || 'Link do Discord copiado!', {
        description: discordLink,
        duration: 3000,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error(t('discord.error') || 'Erro ao copiar link')
    }
  }

  const openDiscord = () => {
    window.open(discordLink, '_blank', 'noopener,noreferrer')
    setCommunityOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => scrollToSection('hero')}>
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-accent to-primary animate-pulse opacity-60 blur-sm" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple-hover transition-all shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" fillOpacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.7"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.7"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold text-gradient">Kaelix Hub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'relative px-3 py-2 text-sm transition-all rounded-md hover:bg-white/5',
                  activeSection === item.id
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Popover open={communityOpen} onOpenChange={setCommunityOpen}>
              <PopoverTrigger asChild>
                <Button
                  className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground glow-purple-hover transition-all"
                  size="sm"
                  aria-label={t('nav.community') || 'Comunidade'}
                >
                  <Users weight="fill" />
                  <span>{t('nav.community') || 'Comunidade'}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-3 glass-card border-white/20" align="end">
                <div className="space-y-1">
                  <p className="text-sm font-medium mb-3">{t('discord.title') || 'Junte-se à nossa comunidade'}</p>
                  <Button
                    onClick={openDiscord}
                    className="w-full justify-start gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white"
                    size="sm"
                  >
                    <ArrowSquareOut size={18} weight="bold" />
                    <span>{t('discord.open') || 'Abrir Discord'}</span>
                  </Button>
                  <Button
                    onClick={copyDiscordLink}
                    variant="outline"
                    className="w-full justify-start gap-3"
                    size="sm"
                  >
                    {copied ? <Check size={18} weight="bold" className="text-primary" /> : <Copy size={18} />}
                    <span>{copied ? (t('discord.copied') || 'Copiado!') : (t('discord.copy') || 'Copiar Link')}</span>
                  </Button>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-xs text-muted-foreground">{discordLink}</p>
                </div>
              </PopoverContent>
            </Popover>
            <LanguageToggle />
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X /> : <List />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'px-4 py-2 text-left rounded-md transition-colors',
                    activeSection === item.id
                      ? 'text-foreground bg-white/5 font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                <Button
                  onClick={openDiscord}
                  className="w-full flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white"
                  size="sm"
                >
                  <DiscordLogo weight="fill" />
                  <span>{t('discord.open') || 'Abrir Discord'}</span>
                </Button>
                <Button
                  onClick={copyDiscordLink}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  size="sm"
                >
                  {copied ? <Check weight="bold" /> : <Copy />}
                  <span>{copied ? (t('discord.copied') || 'Copiado!') : (t('discord.copy') || 'Copiar Link')}</span>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
