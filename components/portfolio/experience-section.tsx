import { experiences } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-border py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground">
            Esperienza
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Esperienze sul campo.
          </h2>
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-2 md:before:absolute md:before:top-7 md:before:right-0 md:before:left-0 md:before:h-px md:before:bg-border">
          {experiences.map((experience) => (
            <Reveal
              key={experience.company}
              className="relative rounded-lg border border-border bg-card p-6"
            >
              <span className="mb-7 hidden size-3 rounded-full border-2 border-background bg-primary md:block" />
              <p className="text-sm text-muted-foreground">
                {experience.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{experience.role}</h3>
              <p className="mt-1 font-medium">{experience.company}</p>
              <p className="mt-5 leading-7 text-muted-foreground">
                {experience.responsibilities}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}