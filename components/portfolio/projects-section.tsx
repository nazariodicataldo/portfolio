'use client'

import { ProjectCategory, projects } from "@/lib/portfolio-data"
import React from "react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

export default function Projects() {
  const [category, setCategory] = React.useState<ProjectCategory>("full-stack")
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const visibleProjects = projects.filter(
    (project) => project.category === category
  )
  const scrollByCard = (direction: number) =>
    scrollRef.current?.scrollBy({
      left: direction * (scrollRef.current.clientWidth * 0.85),
      behavior: "smooth",
    })
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-border py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Progetti
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Progetti costruiti per casi d’uso concreti.
              </h2>
            </div>
            <div className="flex gap-2" aria-label="Filtra progetti">
              {(
                [
                  ["full-stack", "Full Stack"],
                  ["web-design", "Web Design"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setCategory(value)}
                  aria-pressed={category === value}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium",
                    category === value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:bg-muted"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <div
        ref={scrollRef}
        className="mt-12 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto px-5 pb-5 lg:px-8"
        aria-live="polite"
      >
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="w-[86vw] shrink-0 snap-start lg:w-[min(54rem,72vw)]"
          >
            <div className="grid aspect-[16/9] place-items-center rounded-lg border border-border bg-muted">
              <p className="text-sm text-muted-foreground">
                Screenshot di {project.title} in arrivo
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`Tecnologie: ${project.technologies.join(", ")}`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border px-2 py-1 text-xs"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex shrink-0 flex-wrap content-start gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-sm hover:bg-muted"
                  >
                    {link.label}
                    <ExternalLink className="size-3" />
                    <span className="sr-only">
                      {" "}
                      (si apre in una nuova scheda)
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-3 flex max-w-7xl justify-end gap-2 px-5 lg:px-8">
        <Button
          variant="outline"
          size="icon-lg"
          onClick={() => scrollByCard(-1)}
          aria-label="Progetto precedente"
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="outline"
          size="icon-lg"
          onClick={() => scrollByCard(1)}
          aria-label="Progetto successivo"
        >
          <ArrowRight />
        </Button>
      </div>
    </section>
  )
}