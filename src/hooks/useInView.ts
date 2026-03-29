'use client'
import { useState, useEffect, type RefObject } from 'react'

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '-60px' }
): boolean {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return inView
}
