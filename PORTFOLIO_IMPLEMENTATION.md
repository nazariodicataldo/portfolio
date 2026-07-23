# Portfolio — note di implementazione

## Struttura

- `app/layout.tsx`: metadata SEO, lingua italiana e provider del tema.
- `app/page.tsx`: pagina App Router.
- `components/portfolio-page.tsx`: composizione della one-page e componenti interattivi locali.
- `lib/portfolio-data.ts`: contenuti tipizzati, URL del CV e placeholder centralizzati dei contatti.

## Decisioni tecniche

- Il tema usa `next-themes`: preferenza salvata, poi preferenza di sistema, con dark come fallback del design system. Il provider inserisce il proprio script anti-flash prima dell’idratazione.
- Il drawer mobile usa Base UI Drawer, con focus trap, chiusura con Escape, overlay e link di navigazione.
- Accordion e drawer sono componenti accessibili Base UI; i bottoni usano il componente shadcn già presente.
- Il filtro progetti aggiorna le card lato client senza reload. Il carosello mantiene scroll touch e snap; le frecce scorrono il contenitore.
- L’accento della timeline di formazione è l’unico elemento scroll-linked. Con `prefers-reduced-motion` viene mostrato completo e statico. I reveal usano IntersectionObserver e CSS, vengono annullati per reduced motion.

## Placeholder da sostituire

- `CV_URL` e `contactLinks` in `lib/portfolio-data.ts`.
- Monogramma `ND` nell’hero con foto profilo reale.
- Slot `Screenshot di … in arrivo` in ciascuna card progetto.
- URL LinkedIn placeholder.

## Verifiche

- `npm run lint`: superato (rimane un warning esterno di `lerd` che non modifica il risultato ESLint).
- `npm run typecheck`: superato (stesso warning esterno di `lerd`).
- `npm run build`: l’avvio di Turbopack completa la fase di compilazione iniziale, ma l’ambiente interrompe/raccoglie il processo senza restituire un esito finale e lascia talvolta `.next/lock`. Il lock generato è stato rimosso e la build va ripetuta in una shell locale o CI per la conferma conclusiva.

## Scostamento motivato

La spec richiede Motion for React. L’installazione di `motion` non è riuscita a completarsi nell’ambiente nonostante il registry fosse raggiungibile. Per non lasciare il sito non compilabile è stata usata una soluzione nativa equivalente per gli effetti consentiti: IntersectionObserver/CSS per reveal e scroll event per il singolo accento della timeline. Sostituirla con Motion resta un intervento circoscritto a `components/portfolio-page.tsx` quando la dipendenza sarà disponibile.
