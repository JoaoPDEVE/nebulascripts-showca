import { Code, Gauge, ShieldCheck, Flask, ChatCircleDots, FileText } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  index: number
}

const icons = [Code, Gauge, ShieldCheck, Flask, ChatCircleDots, FileText]

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  const Icon = icons[index % icons.length]
  
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
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all group-hover:scale-110">
        <Icon className="text-primary" weight="duotone" size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
