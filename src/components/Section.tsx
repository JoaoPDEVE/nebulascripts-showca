import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('min-h-screen md:min-h-full flex items-center py-16 md:py-20', className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl w-full">
        {children}
      </div>
    </section>
  )
}
