import { CV_URL } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"
import { TechIcon } from "@/tech-icon"
import {
  SiLaravel,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons"
import Image from "next/image"
import { Button } from "../ui/button"

const heroTechnologies = [
  { name: "Next.js", icon: <SiNextdotjs size={48} /> },
  { name: "TypeScript", icon: <SiTypescript size={48} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
  { name: "Laravel", icon: <SiLaravel size={48} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
  { name: "React Native", icon: <SiReact size={48} /> },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100svh-4rem)] scroll-mt-16 border-b border-border lg:grid-cols-2"
    >
      <Reveal className="order-1 flex flex-col justify-center px-5 py-20 lg:order-0 lg:px-8 xl:px-18">
        <p className="mb-5 pl-1 text-sm font-medium text-muted-foreground">
          Full Stack Developer
        </p>
        <h1 className="max-w-3xl md:max-w-none text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          Nazario
          <br className="md:hidden lg:block" />
          <span className="text-primary md:ml-4 lg:ml-0">Di Cataldo</span>
        </h1>
        <p className="mt-8 max-w-xl md:max-w-none md:w-full text-lg leading-8 text-muted-foreground">
          Sviluppo applicazioni web e interfacce responsive, dall’idea alla
          logica backend. Mi muovo tra Next.js, Laravel, database relazionali e
          web design.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            size={"lg"}
            className={"grow md:grow-0"}
            nativeButton={false}
            render={<a href="#contact">Parliamo di un progetto</a>}
          />
          <Button
            variant={"secondary"}
            size={"lg"}
            className={"grow md:grow-0"}
            nativeButton={false}
            render={
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                Scarica CV
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            }
          />
        </div>
        <div className="mt-12 grid max-w-sm md:max-w-none md:w-full grid-cols-3 gap-6">
          {heroTechnologies.map((technology) => (
            <TechIcon
              key={technology.name}
              label={technology.name}
              icon={technology.icon}
            />
          ))}
        </div>
      </Reveal>
      <Reveal className="relative order-0 grid min-h-96 place-items-center border-t border-border bg-muted lg:order-1 lg:min-h-0 lg:border-t-0 lg:border-l">
        <div className="relative w-full">
          <Image
            src={
              "https://b9ast4t68evq7rlw.public.blob.vercel-storage.com/nazario-dicataldo.webp"
            }
            alt="Foto profilo di Nazario Di Cataldo"
            width={768}
            height={768}
            className="w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}
