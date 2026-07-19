'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { personal } from '@/data/personal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:${personal.email}?subject=Portfolio Contact - ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name} (${formData.email})`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#050505' }}>
      <div className="max-width-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#FF0000] block mb-4">
            / CONTACT
          </span>
          <h2 className="text-display-lg font-bold text-[#FFFFFF]">
            Get In{' '}
            <span className="text-gradient-red" style={{ background: 'linear-gradient(135deg, #FF0000, #FF3B3B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Touch
            </span>
          </h2>
          <div className="w-16 h-[1px] mt-6" style={{ backgroundColor: '#C70000' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 md:p-8 border border-[rgba(199,0,0,0.15)]" style={{
              backgroundColor: 'rgba(17, 17, 17, 0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}>
              <h3 className="text-lg font-bold text-[#FFFFFF] mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-[rgba(199,0,0,0.15)] bg-transparent text-[#FFFFFF] placeholder:text-[#888888] focus:outline-none focus:border-[#FF0000] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-[rgba(199,0,0,0.15)] bg-transparent text-[#FFFFFF] placeholder:text-[#888888] focus:outline-none focus:border-[#FF0000] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-[rgba(199,0,0,0.15)] bg-transparent text-[#FFFFFF] placeholder:text-[#888888] focus:outline-none focus:border-[#FF0000] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-6 py-3 border border-[#FF0000] text-[#FF0000] text-sm font-semibold hover:bg-[rgba(255,0,0,0.05)] transition-all"
                >
                  {sent ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 p-5 border border-[rgba(199,0,0,0.12)]" style={{ backgroundColor: '#111111' }}>
              <FaEnvelope className="text-[#FF0000] flex-shrink-0" size={18} />
              <div>
                <div className="text-xs text-[#888888] mb-0.5">EMAIL</div>
                <a href={`mailto:${personal.email}`} className="text-sm text-[#FFFFFF] hover:text-[#FF0000] transition-colors">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 border border-[rgba(199,0,0,0.12)]" style={{ backgroundColor: '#111111' }}>
              <FaPhone className="text-[#FF0000] flex-shrink-0" size={18} />
              <div>
                <div className="text-xs text-[#888888] mb-0.5">PHONE</div>
                <a href={`tel:${personal.phone}`} className="text-sm text-[#FFFFFF] hover:text-[#FF0000] transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 border border-[rgba(199,0,0,0.12)]" style={{ backgroundColor: '#111111' }}>
              <FaMapMarkerAlt className="text-[#FF0000] flex-shrink-0" size={18} />
              <div>
                <div className="text-xs text-[#888888] mb-0.5">LOCATION</div>
                <span className="text-sm text-[#FFFFFF]">{personal.location}</span>
              </div>
            </div>

            <div className="flex gap-4 p-5 border border-[rgba(199,0,0,0.12)]" style={{ backgroundColor: '#111111' }}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#FF0000] transition-colors"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#FF0000] transition-colors"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </div>

            <div className="h-48 border border-[rgba(199,0,0,0.12)] overflow-hidden" style={{ backgroundColor: '#111111' }}>
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62679.4012345679!2d76.955831!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
