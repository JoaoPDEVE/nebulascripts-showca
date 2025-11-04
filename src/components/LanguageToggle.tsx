import { useTranslation } from 'react-i18next'
import { Globe, Check } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (e) {
      console.warn('Não foi possível salvar preferência de idioma')
    }
    toast.success(lang === 'pt' ? 'Idioma alterado para Português' : 'Language changed to English', {
      duration: 2000,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Selecionar idioma"
        >
          <Globe className="text-muted-foreground" weight="bold" />
          <span className="font-medium text-sm uppercase">
            {i18n.language}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-card border-white/20 min-w-[160px]">
        <DropdownMenuItem
          onClick={() => changeLanguage('pt')}
          className="flex items-center justify-between cursor-pointer"
        >
          <span>Português</span>
          {i18n.language === 'pt' && <Check size={16} weight="bold" className="text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage('en')}
          className="flex items-center justify-between cursor-pointer"
        >
          <span>English</span>
          {i18n.language === 'en' && <Check size={16} weight="bold" className="text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
