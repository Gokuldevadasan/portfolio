'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'
import { researchPapers } from '@/data/research'

export default function Research() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="research" className="section-padding" style={{ backgroundColor: '#050505' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / RESEARCH
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Academic{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Publications
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="space-y-4">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.3)] transition-all duration-500"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[rgba(199,0,0,0.2)]" style={{ backgroundColor: 'rgba(255,0,0,0.03)' }}>
                    <FaBook className="text-[#FF0000]" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">{paper.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[#888888] mb-4">
                      <span>{paper.authors}</span>
                      <span className="text-[#FF0000]">|</span>
                      <span>{paper.journal}</span>
                      <span className="text-[#FF0000]">|</span>
                      <span>{paper.year}</span>
                    </div>
                    <p className="text-sm text-[#CFCFCF] leading-relaxed mb-4">{paper.abstract}</p>
                    <div className="flex items-center gap-4">
                      {paper.doi && (
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-[#FF0000] hover:text-[#FF3B3B] transition-colors"
                        >
                          <FaExternalLinkAlt size={10} />
                          DOI: {paper.doi}
                        </a>
                      )}
                      {paper.fullText && (
                        <span className="text-xs text-[#888888]">{paper.fullText}</span>
                      )}
                    </div>
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
