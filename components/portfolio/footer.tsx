import { contactLinks } from "@/lib/portfolio-data"
import { Code2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground px-5 pb-8 text-background lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-background/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-background/65">
          © {new Date().getFullYear()} Nazario Di Cataldo
        </p>
        <div className="flex gap-3">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-background/10"
            aria-label="GitHub di Nazario Di Cataldo (si apre in una nuova scheda)"
          >
            <Code2 />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-background/10"
            aria-label="LinkedIn placeholder (si apre in una nuova scheda)"
          >
            in
          </a>
        </div>
      </div>
    </footer>
  )
}
