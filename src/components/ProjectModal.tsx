'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa'
import type { Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto border border-[rgba(199,0,0,0.2)]"
          style={{ backgroundColor: '#111111' }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-[rgba(199,0,0,0.1)]" style={{ backgroundColor: '#111111' }}>
            <div>
              <h3 className="text-xl font-bold text-[#FFFFFF]">{project.title}</h3>
              <span className="text-xs font-mono text-[#FF0000]">{project.category}</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center border border-[rgba(199,0,0,0.2)] hover:border-[#FF0000] text-[#888888] hover:text-[#FF0000] transition-all"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-[#FFFFFF] mb-2">{project.tagline}</h4>
              <p className="text-sm text-[#CFCFCF] leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-[#888888] mb-3">TECH STACK</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs border border-[rgba(199,0,0,0.15)] text-[#CFCFCF]"
                    style={{ backgroundColor: 'rgba(255,0,0,0.03)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-mono tracking-[0.2em] text-[#888888] mb-3">FEATURES</div>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#CFCFCF]">
                      <FaCheck className="mt-0.5 flex-shrink-0 text-[#FF0000]" size={12} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-mono tracking-[0.2em] text-[#888888] mb-3">CHALLENGES</div>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-sm text-[#CFCFCF]">
                      <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5" style={{ backgroundColor: '#FF0000' }} />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-[#888888] mb-3">ACHIEVEMENTS</div>
              <ul className="space-y-2">
                {project.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm text-[#CFCFCF]">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5" style={{ backgroundColor: '#FF0000', boxShadow: '0 0 6px rgba(255,0,0,0.5)' }} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[rgba(199,0,0,0.1)]">
              <div className="text-sm text-[#888888]">
                <span className="text-[#FF0000]">Role:</span> {project.role}
                <span className="mx-3">|</span>
                <span className="text-[#FF0000]">Timeline:</span> {project.timeline}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs border border-[rgba(199,0,0,0.2)] text-[#FFFFFF] hover:border-[#FF0000] transition-all"
                >
                  <FaGithub />
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs border border-[#FF0000] text-[#FF0000] hover:bg-[rgba(255,0,0,0.05)] transition-all"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
