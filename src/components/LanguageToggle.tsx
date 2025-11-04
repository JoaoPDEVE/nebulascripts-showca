import { useTranslation } from 'react-i18next'
import { Globe } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 hover:bg-white/10"
      aria-label="Toggle language"
    >
      <Globe className="text-muted-foreground" />
      <span className="font-medium text-sm">
        {i18n.language === 'en' ? 'PT' : 'EN'}
      </span>
    </Button>
  )
}
