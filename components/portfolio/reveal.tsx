"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

const revealTransition = { duration: 0.45, ease: "easeOut" as const }

export function Reveal({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  )
}
