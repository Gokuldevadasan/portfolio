'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '@/data/personal'
import {
  FaGraduationCap,
  FaMicrochip,
  FaTrophy,
  FaBrain,
  FaFlask,
  FaRobot,
  FaLaptopCode,
  FaIndustry,
  FaBook,
  FaMedal,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa'

const timelineIcons = [
  FaGraduationCap,
  FaMicrochip,
  FaRobot,
  FaBook,
  FaIndustry,
  FaLaptopCode,
  FaBrain,
  FaFlask,
  FaTrophy,
  FaMedal,
  FaLightbulb,
  FaRocket,
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span
            className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4"
          >
            / ABOUT
          </span>
          <h2
            className="text-display-lg font-bold"
            style={{ color: '#FFFFFF' }}
          >
            Engineering the{' '}
            <span
              className="text-gradient-red"
              style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Future
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          >
            <p className="text-body-lg mb-6" style={{ color: '#CFCFCF' }}>
              {personal.about.story}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4" style={{ backgroundColor: '#111111', borderLeft: '2px solid #C70000' }}>
                <div>
                  <div className="text-sm font-semibold text-[#FFFFFF]">Mission</div>
                  <div className="text-sm text-[#888888] mt-1">{personal.about.mission}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4" style={{ backgroundColor: '#111111', borderLeft: '2px solid #C70000' }}>
                <div>
                  <div className="text-sm font-semibold text-[#FFFFFF]">Vision</div>
                  <div className="text-sm text-[#888888] mt-1">{personal.about.vision}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
            className="space-y-4"
          >
            <div
              className="p-6 border border-[rgba(199,0,0,0.15)]"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-mono tracking-[0.1em] text-[#888888] mb-1">EDUCATION</div>
                  <div className="text-sm text-[#FFFFFF]">{personal.education.degree}</div>
                  <div className="text-xs text-[#888888] mt-1">{personal.education.college}</div>
                </div>
                <div>
                  <div className="text-xs font-mono tracking-[0.1em] text-[#888888] mb-1">UNIVERSITY</div>
                  <div className="text-sm text-[#FFFFFF]">{personal.education.university}</div>
                  <div className="text-xs text-[#888888] mt-1">{personal.education.batch}</div>
                </div>
                <div>
                  <div className="text-xs font-mono tracking-[0.1em] text-[#888888] mb-1">CGPA</div>
                  <div className="text-lg font-bold text-[#FF0000]">{personal.education.cgpa}</div>
                </div>
                <div>
                  <div className="text-xs font-mono tracking-[0.1em] text-[#888888] mb-1">LOCATION</div>
                  <div className="text-sm text-[#FFFFFF]">{personal.location}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-sm font-mono tracking-[0.2em] text-[#888888] mb-8">JOURNEY TIMELINE</div>
          <div className="relative">
            <div
              className="absolute left-[19px] top-0 bottom-0 w-[1px]"
              style={{ backgroundColor: 'rgba(199, 0, 0, 0.2)' }}
            />
            {personal.about.journey.map((item, index) => {
              const Icon = timelineIcons[index]
              return (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-[40px] h-[40px] flex items-center justify-center border border-[rgba(199,0,0,0.3)]"
                      style={{ backgroundColor: '#0B0B0B' }}
                    >
                      <Icon className="text-[#FF0000]" size={16} />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-xs font-mono text-[#FF0000] mb-1">{item.year}</div>
                    <div className="text-base font-semibold text-[#FFFFFF] mb-1">{item.title}</div>
                    <div className="text-sm text-[#888888]">{item.description}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
