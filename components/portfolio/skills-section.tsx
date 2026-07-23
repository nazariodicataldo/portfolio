import { Accordion } from "@base-ui/react/accordion"
import { Reveal } from "./reveal"
import { skillAreas } from "@/lib/portfolio-data"
import { ChevronDown } from "lucide-react"

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-border bg-muted/35 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="text-sm font-medium text-muted-foreground">
            Competenze
          </p>
        </Reveal>
        <Reveal className="lg:col-span-8">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Dal layout all’API: lavoro su prodotti web completi e curati.
          </h2>
        </Reveal>
        <div className="lg:col-span-12">
          <Accordion.Root
            defaultValue={["frontend"]}
            className="border-y border-border"
          >
            {skillAreas.map((area) => (
              <Accordion.Item
                key={area.value}
                value={area.value}
                className="border-b border-border last:border-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-6 text-left text-xl font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <span>{area.title}</span>
                    <ChevronDown className="size-5 transition-transform [[data-panel-open]_&]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="pb-7">
                  <p className="max-w-3xl leading-7 text-muted-foreground">
                    {area.text}
                  </p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
