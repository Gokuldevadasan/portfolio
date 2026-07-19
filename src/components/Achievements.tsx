'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements } from '@/data/achievements'

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="achievements" className="section-padding" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / ACHIEVEMENTS
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Key{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Milestones
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.4)] transition-all duration-500"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[rgba(199,0,0,0.15)] text-2xl" style={{ backgroundColor: 'rgba(255,0,0,0.03)' }}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#FF0000] transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#888888] flex-shrink-0 ml-2">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#888888] leading-relaxed">
                      {achievement.description}
                    </p>
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
