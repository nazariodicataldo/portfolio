"use client"

import React from "react"
import { Drawer } from "@base-ui/react/drawer"
import { ThemeToggle } from "@/components/portfolio/theme-toggle"
import { Menu, X } from "lucide-react"
import { navigationItems } from "@/lib/portfolio-data"

export default function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"
        aria-label="Navigazione principale"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Nazario Di Cataldo
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <Drawer.Root open={open} onOpenChange={setOpen} swipeDirection="right">
          <Drawer.Trigger
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-muted lg:hidden"
            aria-label="Apri menu"
          >
            <Menu />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Backdrop className="fixed inset-0 z-50 bg-foreground/25" />
            <Drawer.Viewport>
              <Drawer.Popup className="fixed inset-y-0 right-0 z-50 flex w-[min(22rem,88vw)] flex-col border-l border-border bg-background p-6 shadow-xl outline-none">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Navigazione</p>
                  <Drawer.Close
                    className="inline-flex size-10 items-center justify-center rounded-md hover:bg-muted"
                    aria-label="Chiudi menu"
                  >
                    <X />
                  </Drawer.Close>
                </div>
                <div className="mt-10 flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-3 text-lg font-medium hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-auto border-t border-border pt-5">
                  <ThemeToggle />
                </div>
              </Drawer.Popup>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      </nav>
    </header>
  )
}
