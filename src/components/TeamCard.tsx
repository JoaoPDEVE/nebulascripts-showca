import { DiscordLogo } from '@phosphor-icons/react'

interface TeamCardProps {
  name: string
  role: string
  discord: string
  bio: string
}

export function TeamCard({ name, role, discord, bio }: TeamCardProps) {
  return (
    <div className="glass-card p-5 md:p-6 rounded-xl hover:border-primary/30 transition-all group">
      <div className="flex items-start gap-3 md:gap-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 glow-purple-hover transition-all">
          <span className="text-xl md:text-2xl font-bold text-white">
            {name.charAt(0)}
          </span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold mb-1">{name}</h3>
          <p className="text-xs md:text-sm text-primary mb-2">{role}</p>
          <p className="text-xs md:text-sm text-muted-foreground mb-3">{bio}</p>
          
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <DiscordLogo weight="fill" className="text-primary flex-shrink-0" size={16} />
            <span className="mono text-muted-foreground truncate">{discord}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
