import { useEffect, useRef } from 'react'

interface CodeParticle {
  x: number
  y: number
  speed: number
  text: string
  opacity: number
  size: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    const codeSnippets = [
      'function',
      'const',
      'return',
      'if',
      'else',
      'for',
      'while',
      'class',
      'import',
      'export',
      'async',
      'await',
      'let',
      'var',
      '{}',
      '[]',
      '()',
      '=>',
      '==',
      '!=',
      '&&',
      '||',
      'true',
      'false',
      'null',
      'void',
      'new',
      'this',
      'self',
      'game',
      'script',
      'local',
      'end',
      'then',
      'do',
      'print',
      'warn',
      'error',
      'spawn',
      'wait',
      'tick',
      'typeof',
      'instanceof',
    ]

    const particles: CodeParticle[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.7,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: 0.1 + Math.random() * 0.2,
        size: 12 + Math.random() * 8,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.font = `${particle.size}px 'JetBrains Mono', monospace`
        ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`
        ctx.fillText(particle.text, particle.x, particle.y)

        particle.y += particle.speed

        if (particle.y > canvas.height + 20) {
          particle.y = -20
          particle.x = Math.random() * canvas.width
          particle.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
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
