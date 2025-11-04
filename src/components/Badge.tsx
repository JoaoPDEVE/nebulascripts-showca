import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glow'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
        variant === 'glow' && 'bg-primary/20 text-primary border border-primary/30 glow-purple',
        variant === 'default' && 'bg-white/10 text-foreground border border-white/20',
        className
      )}
    >
      {children}
    </span>
  )
}
