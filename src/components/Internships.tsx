'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaCertificate } from 'react-icons/fa'
import { internships } from '@/data/internships'

export default function Internships() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="internships" className="section-padding" style={{ backgroundColor: '#050505' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / INTERNSHIPS
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Industry{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Experience
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-[1px]" style={{ backgroundColor: 'rgba(199,0,0,0.15)' }} />

          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="w-[48px] h-[48px] flex items-center justify-center border border-[rgba(199,0,0,0.3)]" style={{ backgroundColor: '#111111' }}>
                  <FaBriefcase className="text-[#FF0000]" size={18} />
                </div>
              </div>

              <div className="flex-1">
                <div className="p-6 border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.3)] transition-all duration-500" style={{ backgroundColor: '#111111' }}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#FFFFFF]">{internship.company}</h3>
                      <div className="text-sm text-[#FF0000] mt-1">{internship.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-[#888888]">{internship.duration}</div>
                      <div className="text-xs font-mono text-[#888888]">{internship.location}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-mono tracking-[0.2em] text-[#888888] mb-2">RESPONSIBILITIES</div>
                    <ul className="space-y-1.5">
                      {internship.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2 text-sm text-[#CFCFCF]">
                          <span className="mt-2 w-1 h-1 flex-shrink-0" style={{ backgroundColor: '#FF0000' }} />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {internship.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] border border-[rgba(199,0,0,0.1)] text-[#888888]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {internship.certificate && (
                      <a
                        href={internship.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#FF0000] hover:text-[#FF3B3B] transition-colors"
                      >
                        <FaCertificate size={12} />
                        Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
