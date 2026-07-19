'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaExternalLinkAlt } from 'react-icons/fa'
import { personal } from '@/data/personal'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  useEffect(() => {
    async function fetchRepos() {
      try {
        const username = personal.github.split('/').pop()
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        )
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRepos(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <section id="github" className="section-padding" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / GITHUB
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Open{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Source
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-32 border border-[rgba(199,0,0,0.1)] animate-pulse"
                style={{ backgroundColor: '#111111' }}
              />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <FaGithub className="mx-auto text-4xl text-[#888888] mb-4" />
            <p className="text-sm text-[#888888]">
              Unable to fetch repositories. Please visit{' '}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:underline"
              >
                GitHub profile
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group border border-[rgba(199,0,0,0.12)] hover:border-[rgba(199,0,0,0.4)] transition-all duration-500 block"
                style={{ backgroundColor: '#111111' }}
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FaGithub className="text-[#888888] group-hover:text-[#FF0000] transition-colors" size={14} />
                    <h3 className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#FF0000] transition-colors truncate">
                      {repo.name}
                    </h3>
                    <FaExternalLinkAlt className="text-[#888888] opacity-0 group-hover:opacity-100 transition-all ml-auto" size={10} />
                  </div>

                  {repo.description && (
                    <p className="text-xs text-[#888888] mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF0000' }} />
                        <span className="text-[10px] text-[#888888]">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-[10px] text-[#888888]">
                      <FaStar className="text-[#888888]" size={10} />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#888888]">
                      <FaCodeBranch className="text-[#888888]" size={10} />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(199,0,0,0.3)] text-sm text-[#FFFFFF] hover:border-[#FF0000] hover:bg-[rgba(255,0,0,0.05)] transition-all"
          >
            <FaGithub size={16} />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
