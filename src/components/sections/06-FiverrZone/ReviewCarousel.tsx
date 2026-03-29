'use client'
import { useState } from 'react'
import StarRating from '@/components/ui/StarRating'
import { FIVERR_REVIEWS } from '@/lib/constants'

export default function ReviewCarousel() {
  const [paused, setPaused] = useState(false)

  // Duplicate for seamless loop
  const doubled = [...FIVERR_REVIEWS, ...FIVERR_REVIEWS]

  return (
    <div className="relative overflow-hidden">
      {/* Left / right fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #030F08, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #030F08, transparent)' }}
      />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: paused ? 'none' : 'scrollX 38s linear infinite',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {doubled.map((review, i) => (
          <div
            key={`${review.id}-${i}`}
            className="flex-shrink-0 w-72 px-5 py-4 rounded-xl"
            style={{
              background: 'rgba(14, 61, 44, 0.38)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                {/* Avatar */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: review.color }}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">{review.author}</p>
                  <p className="text-[10px] text-muted font-mono">{review.location}</p>
                </div>
              </div>
              <StarRating rating={review.rating} size="sm" />
            </div>

            {/* Text */}
            <p className="text-xs text-muted leading-relaxed mb-3 line-clamp-3">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Service tag */}
            <span
              className="text-[9px] font-mono px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(100,190,146,0.08)',
                border: '1px solid rgba(100,190,146,0.15)',
                color: 'rgba(100,190,146,0.6)',
              }}
            >
              {review.service}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
