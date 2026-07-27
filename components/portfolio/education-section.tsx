"use client"

import React from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"
import { Reveal } from "./reveal"
import { education } from "@/lib/portfolio-data"

export default function Education() {
  const containerRef = React.useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 75%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30 })
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
          <motion.div
            className="absolute top-4 bottom-4 left-1.5 w-px origin-top bg-primary transition-transform duration-100 motion-reduce:transition-none"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />
          {education.map((entry) => (
            <Reveal key={entry.title} className="relative pb-14 last:pb-0">
              <span className="absolute top-1 -left-[1.94rem] ml-1 size-3 rounded-full border-2 border-background bg-primary" />
              <p className="text-sm text-muted-foreground">{entry.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{entry.title}</h3>
              <p className="mt-1 text-muted-foreground">{entry.institution}</p>
              <p className="mt-2 text-secondary-foreground dark:text-secondary text-sm">{entry.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
