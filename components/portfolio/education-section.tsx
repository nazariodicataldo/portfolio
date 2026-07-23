import { useReducedMotion } from "@/hooks/use-reduced-motion"
import React from "react"
import { Reveal } from "./reveal"
import { education } from "@/lib/portfolio-data"

export default function Education() {
  const containerRef = React.useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    const update = () => {
      const element = containerRef.current
      if (!element || reduceMotion) return setProgress(1)
      const rect = element.getBoundingClientRect()
      const total = rect.height + window.innerHeight * 0.2
      setProgress(
        Math.min(1, Math.max(0, (window.innerHeight * 0.75 - rect.top) / total))
      )
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [reduceMotion])
  return (
    <section
      ref={containerRef}
      id="education"
      className="scroll-mt-16 border-b border-border bg-muted/35 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">
            Formazione
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Un percorso costruito passo dopo passo.
          </h2>
        </Reveal>
        <div className="relative pl-8">
          <div className="absolute top-4 bottom-4 left-1.5 w-px bg-border" />
          <div
            className="absolute top-4 bottom-4 left-1.5 w-px origin-top bg-primary transition-transform duration-100 motion-reduce:transition-none"
            style={{ transform: `scaleY(${progress})` }}
          />
          {education.map((entry) => (
            <Reveal key={entry.title} className="relative pb-14 last:pb-0">
              <span className="absolute top-1 -left-[1.94rem] ml-1 size-3 rounded-full border-2 border-background bg-primary" />
              <p className="text-sm text-muted-foreground">{entry.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{entry.title}</h3>
              <p className="mt-1 text-muted-foreground">{entry.institution}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}