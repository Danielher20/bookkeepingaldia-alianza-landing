import { cn } from '@/lib/utils'

interface GoldBadgeProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md'
}

export default function GoldBadge({ children, className, size = 'md' }: GoldBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-sans font-semibold tracking-wide uppercase',
        'border rounded-full',
        size === 'sm'
          ? 'text-[10px] px-2.5 py-0.5'
          : 'text-xs px-3 py-1',
        className
      )}
      style={{
        background: 'rgba(242, 201, 76, 0.12)',
        borderColor: 'rgba(242, 201, 76, 0.35)',
        color: '#F2C94C',
      }}
    >
      {children}
    </span>
  )
}
