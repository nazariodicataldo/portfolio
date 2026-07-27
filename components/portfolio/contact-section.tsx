import { contactLinks } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-primary py-24 text-background"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium text-background/65">Contatti</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Hai un progetto in mente? Parliamone.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a
            href={contactLinks.whatsapp}
            className="rounded-lg border border-background/20 p-6 hover:bg-background/10"
          >
            <Send className="size-6" />
            <p className="mt-8 font-medium">WhatsApp</p>
            <p className="mt-1 text-sm text-background/65">
              Numero placeholder
            </p>
          </a>
          <a
            href={contactLinks.phone}
            className="rounded-lg border border-background/20 p-6 hover:bg-background/10"
          >
            <Phone className="size-6" />
            <p className="mt-8 font-medium">Telefono</p>
            <p className="mt-1 text-sm text-background/65">
              Numero placeholder
            </p>
          </a>
          <a
            href={contactLinks.email}
            className="rounded-lg border border-background/20 p-6 hover:bg-background/10"
          >
            <Mail className="size-6" />
            <p className="mt-8 font-medium">Email</p>
            <p className="mt-1 text-sm text-background/65">
              Indirizzo placeholder
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}