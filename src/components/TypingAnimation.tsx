'use client'

import { useState, useEffect, useCallback } from 'react'

interface TypingAnimationProps {
  words: string[]
  className?: string
  style?: React.CSSProperties
}

export default function TypingAnimation({ words, className = '', style }: TypingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const type = useCallback(() => {
    const currentWord = words[currentIndex]
    if (!isDeleting) {
      setCurrentText(currentWord.slice(0, currentText.length + 1))
      if (currentText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }
    } else {
      setCurrentText(currentWord.slice(0, currentText.length - 1))
      if (currentText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % words.length)
        return
      }
    }
  }, [currentIndex, currentText, isDeleting, words])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(type, speed)
    return () => clearTimeout(timer)
  }, [type, isDeleting])

  return (
    <span className={className} style={style}>
      {currentText}
      <span className="inline-block w-[3px] h-[1em] bg-[#FF0000] ml-1 align-middle animate-pulse" />
    </span>
  )
}
