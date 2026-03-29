import Image from 'next/image'

interface BrandLogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZES = {
  sm: { width: 148, height: 48, icon: 30 },
  md: { width: 186, height: 61, icon: 38 },
  lg: { width: 244, height: 80, icon: 46 },
}

export default function BrandLogo({ variant = 'full', size = 'md', className = '' }: BrandLogoProps) {
  const s = SIZES[size]

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path d="M22 4 39 15.5 22 27 5 15.5 22 4Z" fill="#7AD39F" />
          <path
            d="M6 20.5 22 31 38 20.5"
            stroke="#7AD39F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 29 22 39.5 38 29"
            stroke="#7AD39F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src="/assets/logo/bookkeeping-logo-real.png"
        alt="BookkeepingAlDia"
        width={s.width}
        height={s.height}
        className="h-auto w-full object-contain"
      />
    </div>
  )
}
