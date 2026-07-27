export function TechIcon({ label, index, icon }: { label: string; index: number; icon: React.ReactNode }) {
  return (
    <div className="group relative grid aspect-square place-items-center rounded-md border border-border bg-card">
      {icon}
      <span className="sr-only">{label}</span>
      <span
        role="tooltip"
        className="pointer-events-none absolute -bottom-9 left-1/2 z-10 hidden -translate-x-1/2 rounded bg-foreground px-2 py-1 text-xs whitespace-nowrap text-background group-focus-within:block group-hover:block"
      >
        {label}
      </span>
    </div>
  )
}
