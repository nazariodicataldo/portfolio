import { CV_URL } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"
import { TechIcon } from "@/tech-icon"

const heroTechnologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "PostgreSQL",
  "React Native",
]

export default function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100svh-4rem)] scroll-mt-16 border-b border-border lg:grid-cols-2"
    >
      <Reveal className="flex flex-col justify-center px-5 py-20 lg:px-8 xl:pl-[max(2rem,calc((100vw-80rem)/2))]">
        <p className="mb-5 text-sm font-medium text-muted-foreground">
          Full Stack Developer
        </p>
        <h1 className="max-w-3xl text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          Nazario
          <br />
          <span className="text-primary">Di Cataldo</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Sviluppo applicazioni web e interfacce responsive, dall’idea alla
          logica backend. Mi muovo tra React, Laravel, database relazionali e
          web design.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/85"
          >
            Parliamo di un progetto
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium hover:bg-muted"
          >
            Scarica CV
            <span className="sr-only"> (si apre in una nuova scheda)</span>
          </a>
        </div>
        <div className="mt-12 grid max-w-sm grid-cols-3 gap-3">
          {heroTechnologies.map((technology, index) => (
            <TechIcon key={technology} label={technology} index={index} />
          ))}
        </div>
      </Reveal>
      <Reveal className="relative grid min-h-96 place-items-center border-t border-border bg-muted lg:min-h-0 lg:border-t-0 lg:border-l">
        <div
          className="grid size-52 place-items-center rounded-full border border-border bg-background text-center text-5xl font-semibold tracking-[-0.08em] sm:size-64 sm:text-6xl"
          aria-label="Placeholder della foto profilo di Nazario Di Cataldo"
        >
          ND
        </div>
        <p className="absolute bottom-7 text-xs text-muted-foreground">
          Foto profilo in arrivo
        </p>
      </Reveal>
    </section>
  )
}