/**
 * GSAP dynamic import helper.
 * Usage: const { gsap, ScrollTrigger } = await loadGSAP()
 * Always called inside useEffect to avoid SSR issues.
 */
export async function loadGSAP() {
  const gsapModule = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  const gsap = gsapModule.default
  gsap.registerPlugin(ScrollTrigger)
  return { gsap, ScrollTrigger }
}
