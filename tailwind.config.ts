import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#0E3D2C',
          medium: '#297A57',
          light: '#64BE92',
          gold: '#F2C94C',
          'gold-dim': '#C9A52E',
        },
        bg: {
          void: '#030F08',
          dark: '#0E3D2C',
          surface: '#0D2A1D',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem,5.5vw,5.5rem)', { lineHeight: '1.0' }],
        'display-lg': ['clamp(2.25rem,4vw,3.75rem)', { lineHeight: '1.05' }],
        'display-md': ['clamp(1.75rem,2.8vw,2.5rem)', { lineHeight: '1.1' }],
      },
      boxShadow: {
        glass: '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'gold-glow': '0 0 30px rgba(242,201,76,0.35)',
        'green-glow': '0 0 40px rgba(100,190,146,0.25)',
        card: '0 20px 60px rgba(0,0,0,0.5)',
        'card-hover': '0 32px 80px rgba(0,0,0,0.65)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #F2C94C 0%, #C9A52E 100%)',
        'gradient-green': 'linear-gradient(135deg, #64BE92 0%, #297A57 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'scroll-x': 'scrollX 35s linear infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'count-up': 'countUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(242,201,76,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(242,201,76,0.5)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
