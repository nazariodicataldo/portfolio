import { contactLinks } from "@/lib/portfolio-data"

export default function Footer() {
  return (
    <footer className="bg-primary px-5 pb-8 text-primary-foreground lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-background/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-primary-foreground/80">
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
            <svg
              role="img"
              className="size-8 text-primary-foreground"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-background/10"
            aria-label="LinkedIn placeholder (si apre in una nuova scheda)"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-8 text-primary-foreground"
              viewBox="0 0 16 16"
            >
              <title>LinkedIn</title>
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.2１６ .66２ １．２１６１．６３４ｖ３．８６５ｈ２．４０１Ｖ９．２５ｃ０－２．２２－１．１８４－３．２５２－２．７６４－３．２５２－１．２７４０－１．８４５．７－２．１６５１．１９３ｖ．０２５ｈ－．０１６ｌ．０１６－．０２５Ｖ６．１６９ｈ－２．４ｃ．０３．６７８０７．２２５０７．２２５z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
