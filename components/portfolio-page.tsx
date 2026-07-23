"use client"

import Header from "./portfolio/header"
import Hero from "./portfolio/hero-section"
import Skills from "./portfolio/skills-section"
import BackToTop from "./back-to-top"
import Projects from "./portfolio/projects-section"
import Education from "./portfolio/education-section"
import Experience from "./portfolio/experience-section"
import Contact from "./portfolio/contact-section"
import Footer from "./portfolio/footer"

export function PortfolioPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Vai al contenuto principale
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
