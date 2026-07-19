'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaMicrochip, FaTasks, FaLightbulb } from 'react-icons/fa'
import { leadershipPoints } from '@/data/achievements'

const leadershipIcons = [FaUsers, FaMicrochip, FaTasks, FaLightbulb]

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="leadership" className="section-padding" style={{ backgroundColor: '#050505' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / LEADERSHIP
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Leadership &{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Management
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadershipPoints.map((point, index) => {
            const Icon = leadershipIcons[index]
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.4)] transition-all duration-500"
                style={{ backgroundColor: '#111111' }}
              >
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center mb-4 border border-[rgba(199,0,0,0.15)]" style={{ backgroundColor: 'rgba(255,0,0,0.03)' }}>
                    <Icon className="text-[#FF0000]" size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-2 group-hover:text-[#FF0000] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
