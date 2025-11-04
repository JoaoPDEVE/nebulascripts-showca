import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Heart } from '@phosphor-icons/react'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <p>{t('footer.legal', { year: currentYear })}</p>
            <span className="hidden md:inline">•</span>
            <p className="flex items-center gap-1">
              Feito com <Heart size={14} weight="fill" className="text-primary inline" aria-label="amor" /> pela equipe Kaelix
            </p>
          </div>
          <nav className="flex items-center gap-6" aria-label="Links do rodapé">
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:text-primary"
            >
              {t('footer.links.terms')}
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:text-primary"
            >
              {t('footer.links.privacy')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
