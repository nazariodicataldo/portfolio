export const CV_URL = "https://example.com/nazario-di-cataldo-cv.pdf"

export const contactLinks = {
  whatsapp: "https://wa.me/390000000000",
  phone: "tel:+390000000000",
  email: "mailto:ciao@example.com",
  github: "https://github.com/nazariodicataldo",
  linkedin: "https://www.linkedin.com/in/placeholder-nazario-di-cataldo",
}

export const navigationItems = [
  { href: "#skills", label: "Competenze" },
  { href: "#projects", label: "Progetti" },
  { href: "#education", label: "Formazione" },
  { href: "#experience", label: "Esperienza" },
  { href: "#contact", label: "Contatti" },
] as const

export const skillAreas = [
  {
    value: "frontend",
    title: "Frontend",
    text: "Progetto interfacce responsive con HTML, CSS, JavaScript e TypeScript. Lavoro soprattutto con React, Next.js, Tailwind CSS, Bootstrap e Shadcn UI, cercando componenti chiari e facili da mantenere.",
  },
  {
    value: "backend",
    title: "Backend",
    text: "Costruisco endpoint REST e logiche CRUD con PHP, Laravel, Node.js e Hono. Mi occupo di autenticazione JWT o Sanctum, architettura MVC e database relazionali con PostgreSQL, MySQL e Drizzle ORM.",
  },
  {
    value: "web-design",
    title: "Web Design",
    text: "Parto dalla progettazione responsive in Figma e porto il progetto sul web con WordPress, Elementor e WooCommerce. Mi interessa unire identità visiva, UX e una struttura dei contenuti che funzioni davvero.",
  },
] as const

export type ProjectCategory = "full-stack" | "web-design"

export type Project = {
  title: string
  category: ProjectCategory
  description: string
  technologies: readonly string[]
  links: readonly { label: string; href: string }[]
}

export const projects: readonly Project[] = [
  {
    title: "Travelex",
    category: "full-stack",
    description:
      "Piattaforma per condividere esperienze di viaggio: autenticazione, post, commenti, like, filtri e profilo personale.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/nazariodicataldo/travelex_frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/nazariodicataldo/travelex_backend",
      },
    ],
  },
  {
    title: "Cinescope",
    category: "full-stack",
    description:
      "Interfaccia per film, attori e sale con filtri dinamici, navigazione avanzata e filtri persistenti nell’URL.",
    technologies: [
      "React",
      "TypeScript",
      "PHP",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/nazariodicataldo/cinescope_front_end",
      },
      {
        label: "Backend",
        href: "https://github.com/nazariodicataldo/cinescope_back_end",
      },
    ],
  },
  {
    title: "Car Configurator",
    category: "full-stack",
    description:
      "Configuratore di automobili con modelli e optional, API REST Laravel, autenticazione Sanctum e interfaccia responsive riutilizzabile.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "Sito live",
        href: "https://car-configurator-frontend-gray.vercel.app/",
      },
      {
        label: "Frontend",
        href: "https://github.com/nazariodicataldo/car-configurator-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/nazariodicataldo/car-configurator-backend",
      },
      {
        label: "App",
        href: "https://github.com/nazariodicataldo/car-configurator-app",
      },
    ],
  },
  {
    title: "Tournament Manager",
    category: "full-stack",
    description:
      "Applicazione per squadre, giocatori, partite e classifiche con CRUD via API REST, dashboard amministrativa e autenticazione.",
    technologies: ["React", "TypeScript", "PHP", "PostgreSQL", "Tailwind CSS"],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/nazariodicataldo/tournament_manager_front_end",
      },
      {
        label: "Backend",
        href: "https://github.com/nazariodicataldo/tournament_manager_back_end",
      },
    ],
  },
  {
    title: "Natale ad Aosta",
    category: "web-design",
    description:
      "Sito per una pro loco che promuove il turismo natalizio, i mercatini e il coinvolgimento degli espositori.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Sito live",
        href: "https://nazarioprojects.netsons.org/nataleadaosta/",
      },
    ],
  },
  {
    title: "Tanduri",
    category: "web-design",
    description:
      "Sito per un ristorante indiano, dal logo all’identità visiva, con wishlist in Local Storage e flusso verso il checkout.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: [
      {
        label: "Sito live",
        href: "https://nazarioprojects.netsons.org/tanduri/index.html",
      },
    ],
  },
  {
    title: "Aurealis Domus",
    category: "web-design",
    description:
      "Sito per resort, terme e spa con camere, trattamenti, eventi, contatti e richiesta di prenotazione.",
    technologies: ["WordPress", "Elementor"],
    links: [
      {
        label: "Sito live",
        href: "https://nazariodicataldo.netsons.org/aurelisdomus",
      },
    ],
  },
  {
    title: "Cworks",
    category: "web-design",
    description:
      "Sito vetrina per componenti industriali usati e funzionanti, con catalogo e contatto diretto con l’azienda.",
    technologies: ["WordPress", "Elementor", "WooCommerce"],
    links: [{ label: "Sito live", href: "https://www.cworks.it/" }],
  },
]

export const education = [
  {
    period: "Settembre 2018 – Giugno 2023",
    institution: "Istituto Tecnico L. Di Maggio",
    title: "Informatica",
  },
  {
    period: "Ottobre 2023 – Luglio 2025",
    institution: "Istituto Infobasic",
    title: "Web & Multimedia Design",
  },
  {
    period: "Ottobre 2025 – Giugno 2026",
    institution: "Istituto Infobasic",
    title: "Full Stack Developer",
  },
] as const

export const experiences = [
  {
    period: "Giugno 2025 – Luglio 2025",
    company: "MSE Automation",
    role: "Stage Web Developer",
    responsibilities:
      "Collaborazione al redesign di Cworks.it, ottimizzazione SEO, riorganizzazione del catalogo e miglioramento dell’esperienza utente.",
  },
  {
    period: "Maggio 2026 – Giugno 2026",
    company: "Ud’Anet",
    role: "Stage Full Stack Developer",
    responsibilities:
      "Manutenzione e miglioramento del gestionale Il Piccolo Ascolto, gestione di esami XML e utenti Moodle, uso di Git per il lavoro sul codice.",
  },
] as const
