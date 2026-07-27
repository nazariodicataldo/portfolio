"use client"

import { ProjectCategory, projects } from "@/lib/portfolio-data"
import React from "react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"
import { type CarouselApi } from "@/components/ui/carousel"
import { ExternalLink } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const [category, setCategory] = React.useState<ProjectCategory>("full-stack")

  const visibleProjects = projects.filter(
    (project) => project.category === category
  )

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
      setCount(api.scrollSnapList().length)
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api) return
    api.reInit()
    api.scrollTo(0, true)
  }, [api, category])

  return (
    <section
      id="projects"
      className="w-full scroll-mt-16 overflow-x-clip border-b border-border py-24"
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
      {/* new carousel */}
      <Carousel
        className="mt-12 max-w-full cursor-grab"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {visibleProjects.map((project) => (
            <CarouselItem
              key={project.title}
              className="basis-full pl-8 md:basis-[75%] md:pl-10 lg:pl-22"
            >
              <article>
                <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={project.img}
                    alt={`Screenshot del progetto ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 86vw, 100vw"
                    className="object-cover"
                  />
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
                      <Button
                        key={link.href}
                        variant={"secondary"}
                        size={"lg"}
                        nativeButton={false}
                        render={
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <ExternalLink className="size-3" />
                            <span className="sr-only">
                              {" "}
                              (si apre in una nuova scheda)
                            </span>
                          </a>
                        }
                      ></Button>
                    ))}
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dot indicators */}
        <div
          role="tablist"
          aria-label="Slide dell'elemento carosello"
          className="mt-6 flex items-center justify-center gap-2"
        >
          {Array.from({ length: count }).map((_, index) => {
            const isActive = index === current

            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`carousel-slide-${index + 1}`}
                aria-label={`Vai alla slide ${index + 1} di ${count}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => api?.scrollTo(index)}
                className={[
                  "h-4 rounded-full transition-all duration-300 ease-out",
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "w-8 bg-primary"
                    : "w-4 bg-secondary hover:bg-muted-foreground/50",
                ].join(" ")}
              />
            )
          })}
        </div>

        {/* Testo nascosto visivamente ma letto dagli screen reader: annuncia il cambio slide */}
        <p role="status" aria-live="polite" className="sr-only">
          Slide {current + 1} di {count}
        </p>
      </Carousel>
    </section>
  )
}
