'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('')
  const fullText = 'INITIALIZING SYSTEM...'
  const textRef = useRef(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 20)

    const textInterval = setInterval(() => {
      textRef.current += 1
      if (textRef.current <= fullText.length) {
        setText(fullText.slice(0, textRef.current))
      } else {
        clearInterval(textInterval)
      }
    }, 50)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#050505' }}
        >
          <div className="relative mb-16">
            <div className="text-2xl font-bold text-[#FF0000] font-mono tracking-[0.3em]">
              {'{ GD }'}
            </div>
            <div
              className="absolute -bottom-2 left-0 right-0 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
                opacity: 0.5,
              }}
            />
          </div>

          <div className="w-64 relative">
            <div
              className="h-[2px] w-full"
              style={{ backgroundColor: 'rgba(199, 0, 0, 0.15)' }}
            />
            <motion.div
              className="absolute top-0 left-0 h-[2px]"
              style={{
                background: 'linear-gradient(90deg, #C70000, #FF0000, #FF3B3B)',
                boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          <div className="mt-4 text-xs font-mono tracking-[0.2em] text-[#888888]">
            {text}
            <span className="animate-pulse text-[#FF0000]">_</span>
          </div>

          <div className="mt-2 text-xs font-mono text-[#888888]">
            {progress}%
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1"
                  style={{ backgroundColor: '#FF0000' }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
