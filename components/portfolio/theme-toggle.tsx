"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(() => () => undefined, () => true, () => false)
  if (!mounted) return <span className="size-10" aria-hidden="true" />
  const isDark = resolvedTheme === "dark"
  return <Button variant="ghost" size="icon-lg" aria-label={isDark ? "Attiva tema chiaro" : "Attiva tema scuro"} onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <Sun /> : <Moon />}</Button>
}
