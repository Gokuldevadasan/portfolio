'use client'

import { useEffect, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (typeof window === 'undefined') return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          left: x - 4,
          top: y - 4,
          width: 8,
          height: 8,
          background: '#FF0000',
          borderRadius: 0,
          opacity: isVisible ? 1 : 0,
          transform: isHovering ? 'scale(2.5)' : 'scale(1)',
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.4)',
          transition: 'transform 0.15s ease-out',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          left: x - 20,
          top: y - 20,
          width: 40,
          height: 40,
          border: '1px solid rgba(199, 0, 0, 0.3)',
          borderRadius: 0,
          opacity: isVisible ? 0.5 : 0,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
      />
    </>
  )
}
