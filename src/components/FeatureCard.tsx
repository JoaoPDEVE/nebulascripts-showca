import { Check } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  index: number
}

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 rounded-xl hover:border-primary/30 transition-all group',
        'hover:scale-105 hover:glow-purple'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        <Check className="text-primary" weight="bold" size={20} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
