import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  color?: 'green' | 'gold' | 'red' | 'muted'
  className?: string
}

export default function SectionLabel({ children, color = 'green', className }: SectionLabelProps) {
  const colors = {
    green: 'text-brand-light border-brand-light/30 bg-brand-light/8',
    gold: 'text-brand-gold border-brand-gold/30 bg-brand-gold/8',
    red: 'text-red-400 border-red-400/30 bg-red-400/8',
    muted: 'text-white/50 border-white/15 bg-white/5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-sans font-medium tracking-widest uppercase',
        'text-[10px] px-3 py-1 rounded-full border',
        colors[color],
        className
      )}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full',
          color === 'green' && 'bg-brand-light',
          color === 'gold' && 'bg-brand-gold',
          color === 'red' && 'bg-red-400',
          color === 'muted' && 'bg-white/40'
        )}
      />
      {children}
    </span>
  )
}
