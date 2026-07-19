'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa'
import TypingAnimation from './TypingAnimation'
import { personal } from '@/data/personal'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const pulse = Math.sin(time * 2 + p.x * 0.01) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 0, 0, ${p.opacity * pulse})`
        ctx.fill()
        ctx.shadowColor = '#FF0000'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(199, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(199, 0, 0, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-width-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
            >
              <div className="inline-block mb-4">
                <span
                  className="text-xs font-mono tracking-[0.3em] px-4 py-2 border border-[rgba(199,0,0,0.2)]"
                  style={{ color: '#FF0000', backgroundColor: 'rgba(255,0,0,0.03)' }}
                >
                  ELECTRONICS & COMMUNICATION ENGINEER
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
              className="text-display-xl mb-2"
              style={{ color: '#FFFFFF' }}
            >
              HELLO,
              <br />
              I&apos;M{' '}
              <span
                className="text-gradient-red"
                style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {personal.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.7 }}
              className="mb-6"
            >
              <span className="text-display-sm font-mono" style={{ color: '#888888' }}>
                {'> '}
              </span>
              <TypingAnimation
                words={personal.typingWords}
                className="text-display-sm font-mono text-[#FF0000]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.9 }}
              className="text-body-lg mb-8 max-w-lg"
              style={{ color: '#CFCFCF' }}
            >
              Embedded Systems Engineer crafting intelligent hardware-software solutions.
              Building the future at the intersection of electronics, AI, and IoT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[#FF0000] bg-[#FF0000] text-[#050505] font-semibold text-sm hover:bg-transparent hover:text-[#FF0000] transition-all duration-300"
              >
                <FaDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download Resume
              </a>

              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[rgba(199,0,0,0.3)] text-[#FFFFFF] font-semibold text-sm hover:border-[#FF0000] hover:bg-[rgba(255,0,0,0.05)] transition-all duration-300"
              >
                View Projects
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex items-center gap-6 mt-8"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#FF0000] transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#FF0000] transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
              className="relative"
            >
              <div
                className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative overflow-hidden"
                style={{
                  border: '1px solid rgba(199, 0, 0, 0.3)',
                  boxShadow: '0 0 40px rgba(255, 0, 0, 0.15), 0 0 80px rgba(255, 0, 0, 0.05), inset 0 0 40px rgba(255, 0, 0, 0.05)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, transparent 40%, rgba(255, 0, 0, 0.1) 100%)',
                  }}
                />
                <div
                  className="w-full h-full flex items-center justify-center text-6xl font-bold tracking-[0.2em]"
                  style={{ color: 'rgba(255, 0, 0, 0.1)' }}
                >
                  GD
                </div>
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 left-0 w-[1px]"
                  style={{
                    background: 'linear-gradient(180deg, transparent, #FF0000, transparent)',
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 right-0 w-[1px]"
                  style={{
                    background: 'linear-gradient(180deg, transparent, #FF0000, transparent)',
                    opacity: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-[0.2em]" style={{ color: '#888888' }}>
          SCROLL
        </span>
        <div className="w-[1px] h-8" style={{ backgroundColor: 'rgba(199, 0, 0, 0.3)' }}>
          <motion.div
            className="w-[1px] h-4"
            style={{ backgroundColor: '#FF0000' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
