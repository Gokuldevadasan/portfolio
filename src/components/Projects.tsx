'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / PROJECTS
          </span>
          <h2
            className="text-display-lg font-bold"
            style={{ color: '#FFFFFF' }}
          >
            Featured{' '}
            <span
              className="text-gradient-red"
              style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Work
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.4)] transition-all duration-500"
              style={{ backgroundColor: '#111111' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden" style={{ backgroundColor: '#0B0B0B' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold tracking-[0.2em] text-[rgba(255,0,0,0.08)]">
                    {project.title}
                  </span>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(180deg, transparent, rgba(199,0,0,0.1))',
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono tracking-[0.15em] px-2 py-1 border border-[rgba(199,0,0,0.2)] text-[#FF0000]">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-[#FFFFFF] mb-2 group-hover:text-[#FF0000] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#888888] mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] border border-[rgba(199,0,0,0.1)] text-[#888888]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] text-[#888888]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[rgba(199,0,0,0.08)]">
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#888888] hover:text-[#FF0000] transition-colors"
                    >
                      <FaGithub size={16} />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#888888] hover:text-[#FF0000] transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-[#888888] group-hover:text-[#FF0000] transition-colors flex items-center gap-1">
                    Details <FaArrowRight size={10} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
