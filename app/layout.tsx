import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Nazario Di Cataldo | Full Stack Developer",
  description:
    "Portfolio di Nazario Di Cataldo: progetti full stack, web design, formazione ed esperienze come developer.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning className="font-sans antialiased">
      <body className="min-w-0">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
