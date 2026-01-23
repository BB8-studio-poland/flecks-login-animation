import { Flecks } from './Flecks'
import { Logo } from './Logo'
import { R3Vectors } from './R3Vectors'

interface AnimationFrameProps {
  width?: number | string
  height?: number | string
  className?: string
}

export function AnimationFrame({
  width = 960,
  height = '100vh',
  className = '',
}: AnimationFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        background: 'linear-gradient(180deg, #0F0F0F 0%, #000000 100%)',
      }}
    >
      {/* Layer 1: R3 Vectors (bottom) */}
      <R3Vectors />

      {/* Layer 2: Animated Flecks */}
      <Flecks />

      {/* Layer 3: Logo (top) */}
      <Logo />
    </div>
  )
}
