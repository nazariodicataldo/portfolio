"use client"

import React from "react"
import { useReducedMotion } from "motion/react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = React.useState(false)
  const reduceMotion = useReducedMotion()
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
      }
      className="fixed right-5 bottom-5 z-30 inline-flex size-11 items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-muted"
      aria-label="Torna all’inizio"
    >
      <ArrowUp />
    </button>
  )
}
