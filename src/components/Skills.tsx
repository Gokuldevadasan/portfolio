'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '@/data/skills'

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: '#050505' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / SKILLS
          </span>
          <h2
            className="text-display-lg font-bold"
            style={{ color: '#FFFFFF' }}
          >
            Technical{' '}
            <span
              className="text-gradient-red"
              style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Arsenal
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="group border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.4)] transition-all duration-500"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="p-5 border-b border-[rgba(199,0,0,0.08)]">
                <h3 className="text-sm font-semibold tracking-wide" style={{ color: '#FF0000' }}>
                  {category.title}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-xs flex-shrink-0" style={{ color: skill.color }} size={14} />
                        <span className="text-xs" style={{ color: '#CFCFCF' }}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono" style={{ color: '#888888' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full" style={{ backgroundColor: 'rgba(199,0,0,0.1)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05, ease: [0.19, 1, 0.22, 1] }}
                        className="h-full transition-all"
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: `0 0 8px ${skill.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
