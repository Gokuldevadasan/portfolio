'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[2px] bg-transparent">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #C70000, #FF0000, #FF3B3B)',
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.2)',
        }}
      />
    </div>
  )
}
