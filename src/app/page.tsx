'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Internships from '@/components/Internships'
import Certifications from '@/components/Certifications'
import Research from '@/components/Research'
import Achievements from '@/components/Achievements'
import Leadership from '@/components/Leadership'
import GithubSection from '@/components/GithubSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import GridBackground from '@/components/GridBackground'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Certifications />
        <Research />
        <Achievements />
        <Leadership />
        <GithubSection />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
