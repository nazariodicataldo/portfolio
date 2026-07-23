"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function Reveal({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const [visible, setVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  React.useEffect(() => {
    if (reduceMotion || !ref.current) return setVisible(true)
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reduceMotion])
  return (
    <div
      ref={ref}
      className={cn(
        className,
        "transition-[opacity,transform] duration-500 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      )}
    >
      {children}
    </div>
  )
}
