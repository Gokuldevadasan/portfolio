'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { certifications } from '@/data/certifications'

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="certifications" className="section-padding" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / CERTIFICATIONS
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Verified{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Credentials
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.4)] transition-all duration-500"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <FaCertificate className="text-[#FF0000]" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#FF0000] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-[#888888] mt-0.5">{cert.issuer}</div>
                  </div>
                </div>
                <p className="text-xs text-[#888888] leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#888888]">{cert.date}</span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#FF0000] hover:text-[#FF3B3B] transition-colors"
                    >
                      Verify <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
