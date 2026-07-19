'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personal } from '@/data/personal'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(199, 0, 0, 0.1)' }}>
      <div
        className="h-[1px] w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #FF0000, #FF3B3B, #FF0000, transparent)',
          opacity: 0.3,
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
        }}
      />

      <div className="max-width-container px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={scrollToTop}
            className="text-lg font-bold tracking-[0.3em] text-[#FF0000] font-mono hover:text-[#FF3B3B] transition-colors"
          >
            {'{ GD }'}
          </button>

          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#FF0000] transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#FF0000] transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-[#888888] hover:text-[#FF0000] transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          <div className="text-xs text-[#888888] flex items-center gap-1">
            &copy; {new Date().getFullYear()} {personal.name}. Built with
            <FaHeart className="text-[#FF0000] mx-0.5" size={10} />
            and a lot of embedded C
          </div>
        </div>
      </div>
    </footer>
  )
}
