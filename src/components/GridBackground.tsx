'use client'

import { useEffect, useRef } from 'react'

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 60
      const width = canvas.width
      const height = canvas.height

      ctx.strokeStyle = 'rgba(199, 0, 0, 0.04)'
      ctx.lineWidth = 0.5

      const offsetX = (time * 10) % gridSize
      const offsetY = (time * 10) % gridSize

      for (let x = -gridSize + offsetX; x < width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      for (let y = -gridSize + offsetY; y < height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      const nodes = [
        { x: width * 0.2, y: height * 0.3 },
        { x: width * 0.8, y: height * 0.4 },
        { x: width * 0.5, y: height * 0.7 },
        { x: width * 0.3, y: height * 0.6 },
        { x: width * 0.7, y: height * 0.2 },
        { x: width * 0.9, y: height * 0.8 },
        { x: width * 0.1, y: height * 0.9 },
        { x: width * 0.6, y: height * 0.5 },
      ]

      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2 + pulse * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 0, 0, ${0.1 + pulse * 0.3})`
        ctx.fill()
        ctx.shadowColor = '#FF0000'
        ctx.shadowBlur = 10 + pulse * 10
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x
          const dy = nodes[j].y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 300) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(199, 0, 0, ${0.03 * (1 - dist / 300)})`
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
