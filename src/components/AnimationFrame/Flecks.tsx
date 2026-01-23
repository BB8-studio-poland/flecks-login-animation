import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { useCallback } from 'react'

import fleckL1 from './assets/fleck-l1.svg'
import fleckL2 from './assets/fleck-l2.svg'
import fleckL21 from './assets/fleck-l2-1.svg'
import fleckL3 from './assets/fleck-l3.svg'
import fleckL31 from './assets/fleck-l3-1.svg'
import fleckL4 from './assets/fleck-l4.svg'
import fleckL5 from './assets/fleck-l5.svg'
import fleck00 from './assets/fleck-00.svg'
import fleckR4 from './assets/fleck-r4.svg'
import fleckR3 from './assets/fleck-r3.svg'
import fleckR2 from './assets/fleck-r2.svg'
import fleckR1 from './assets/fleck-r1.svg'
import fleckVector from './assets/fleck-vector.svg'

// Data from Figma component 10298-31646 (Default variant - first frame)
// Component size: 5748 x 1506
// Animation: 4 variants, 10s each, 40s total loop, easeInOut
// Instance is rotated 30 degrees

// Center point of container (elements' centers will converge here on frames 2 and 4)
const CENTER_X = 5748 / 2  // 2874
const CENTER_Y = 1506 / 2  // 753

// Helper to calculate center position (offset by half width/height so element's center aligns)
const center = (w: number, h: number) => ({ x: CENTER_X - w / 2, y: CENTER_Y - h / 2 })

// Helper to calculate true mirrored position (equal distance from center, opposite side)
const mirror = (frame1X: number, w: number) => 2 * CENTER_X - frame1X - w

// Depth values for parallax effect (0-1 range)
// Lower = background (moves less), Higher = foreground (moves more)
const flecksConfig = [
  {
    id: 'L1',
    src: fleckL1,
    width: 1691,
    height: 1506,
    opacity: 0.4,
    blur: 200,
    depth: 0.15, // Largest, most blur = far background
    positions: [
      { x: 292, y: 0 },                // Frame 1: spread
      center(1691, 1506),              // Frame 2: center
      { x: mirror(292, 1691), y: 0 },  // Frame 3: spread (true mirror)
      center(1691, 1506),              // Frame 4: center
    ],
  },
  {
    id: 'L2',
    src: fleckL2,
    width: 1038,
    height: 924,
    opacity: 0.6,
    blur: 30,
    depth: 0.25, // Large, medium blur
    positions: [
      { x: 1064, y: 291 },             // Frame 1: spread
      center(1038, 924),               // Frame 2: center
      { x: mirror(1064, 1038), y: 291 }, // Frame 3: spread (true mirror)
      center(1038, 924),               // Frame 4: center
    ],
  },
  {
    id: 'L2.1',
    src: fleckL21,
    width: 492,
    height: 438,
    opacity: 0.6,
    blur: 67,
    depth: 0.5, // Medium size
    positions: [
      { x: 1446, y: 534 },             // Frame 1: spread
      center(492, 438),                // Frame 2: center
      { x: mirror(1446, 492), y: 534 }, // Frame 3: spread (true mirror)
      center(492, 438),                // Frame 4: center
    ],
  },
  {
    id: 'L3',
    src: fleckL3,
    width: 845,
    height: 752,
    opacity: 0.4,
    blur: 60,
    depth: 0.3, // Medium-large
    positions: [
      { x: 1606, y: 377 },             // Frame 1: spread
      center(845, 752),                // Frame 2: center
      { x: mirror(1606, 845), y: 377 }, // Frame 3: spread (true mirror)
      center(845, 752),                // Frame 4: center
    ],
  },
  {
    id: 'L3.1',
    src: fleckL31,
    width: 96,
    height: 86,
    opacity: 0.6,
    blur: 67,
    depth: 0.7, // Small
    positions: [
      { x: 2102, y: 710 },             // Frame 1: spread
      center(96, 86),                  // Frame 2: center
      { x: mirror(2102, 96), y: 710 }, // Frame 3: spread (true mirror)
      center(96, 86),                  // Frame 4: center
    ],
  },
  {
    id: 'L4',
    src: fleckL4,
    width: 444,
    height: 396,
    opacity: 0.6,
    blur: 30,
    depth: 0.45, // Medium
    positions: [
      { x: 2237, y: 555 },             // Frame 1: spread
      center(444, 396),                // Frame 2: center
      { x: mirror(2237, 444), y: 555 }, // Frame 3: spread (true mirror)
      center(444, 396),                // Frame 4: center
    ],
  },
  {
    id: 'L5',
    src: fleckL5,
    width: 258,
    height: 230,
    opacity: 0.6,
    blur: 20,
    depth: 0.6, // Smaller, less blur
    positions: [
      { x: 2525, y: 638 },             // Frame 1: spread
      center(258, 230),                // Frame 2: center
      { x: mirror(2525, 258), y: 638 }, // Frame 3: spread (true mirror)
      center(258, 230),                // Frame 4: center
    ],
  },
  {
    id: '00',
    src: fleck00,
    width: 96,
    height: 86,
    opacity: 0.6,
    blur: 67,
    depth: 0.65, // Small center element
    positions: [
      { x: 2826, y: 710 },             // Frame 1: spread
      center(96, 86),                  // Frame 2: center
      { x: mirror(2826, 96), y: 710 }, // Frame 3: spread (true mirror)
      center(96, 86),                  // Frame 4: center
    ],
  },
  {
    id: 'R4',
    src: fleckR4,
    width: 258,
    height: 230,
    opacity: 0.6,
    blur: 30,
    depth: 0.55, // Small
    positions: [
      { x: 2965, y: 638 },             // Frame 1: spread
      center(258, 230),                // Frame 2: center
      { x: mirror(2965, 258), y: 638 }, // Frame 3: spread (true mirror)
      center(258, 230),                // Frame 4: center
    ],
  },
  {
    id: 'R3',
    src: fleckR3,
    width: 492,
    height: 438,
    opacity: 0.6,
    blur: 20,
    depth: 0.5, // Medium, less blur = more foreground
    positions: [
      { x: 3135, y: 534 },             // Frame 1: spread
      center(492, 438),                // Frame 2: center
      { x: mirror(3135, 492), y: 534 }, // Frame 3: spread (true mirror)
      center(492, 438),                // Frame 4: center
    ],
  },
  {
    id: 'R2',
    src: fleckR2,
    width: 444,
    height: 396,
    opacity: 0.6,
    blur: 30,
    depth: 0.4, // Medium
    positions: [
      { x: 3522, y: 555 },             // Frame 1: spread
      center(444, 396),                // Frame 2: center
      { x: mirror(3522, 444), y: 555 }, // Frame 3: spread (true mirror)
      center(444, 396),                // Frame 4: center
    ],
  },
  {
    id: 'R1',
    src: fleckR1,
    width: 681,
    height: 606,
    opacity: 0.6,
    blur: 40,
    depth: 0.35, // Medium-large
    positions: [
      { x: 3788, y: 450 },             // Frame 1: spread
      center(681, 606),                // Frame 2: center
      { x: mirror(3788, 681), y: 450 }, // Frame 3: spread (true mirror)
      center(681, 606),                // Frame 4: center
    ],
  },
  {
    id: 'Vector',
    src: fleckVector,
    width: 2510,
    height: 86,
    opacity: 0.3,
    blur: 67,
    depth: 0.2, // Large element, background
    positions: [
      { x: 1619, y: 710 },             // Frame 1: spread
      center(2510, 86),                // Frame 2: center
      { x: mirror(1619, 2510), y: 710 }, // Frame 3: spread (true mirror)
      center(2510, 86),                // Frame 4: center
    ],
    opacityKeyframes: [0.3, 0.3, 0.1, 0.3],
  },
]

// Component dimensions from Figma Default variant
const COMPONENT_WIDTH = 5748
const COMPONENT_HEIGHT = 1506

// Maximum pixel offset for parallax effect
const MAX_PARALLAX_OFFSET = 150

// Maximum rotation offset in degrees
// X-axis: right = clockwise, left = counter-clockwise
// Y-axis: top amplifies rotation, bottom reduces it
const MAX_ROTATION_OFFSET = 15

// Base rotation from Figma design
const BASE_ROTATION = 30

// Individual fleck with parallax wrapper
interface ParallaxFleckProps {
  fleck: typeof flecksConfig[number]
  smoothMouseX: ReturnType<typeof useSpring>
  smoothMouseY: ReturnType<typeof useSpring>
}

function ParallaxFleck({ fleck, smoothMouseX, smoothMouseY }: ParallaxFleckProps) {
  // Create parallax transforms based on depth
  const parallaxX = useTransform(
    smoothMouseX,
    (value) => value * fleck.depth * MAX_PARALLAX_OFFSET
  )
  const parallaxY = useTransform(
    smoothMouseY,
    (value) => value * fleck.depth * MAX_PARALLAX_OFFSET
  )

  const xKeyframes = [...fleck.positions.map((p) => p.x), fleck.positions[0].x]
  const yKeyframes = [...fleck.positions.map((p) => p.y), fleck.positions[0].y]
  const opacityKeyframes = fleck.opacityKeyframes
    ? [...fleck.opacityKeyframes, fleck.opacityKeyframes[0]]
    : fleck.opacity

  return (
    // Outer div handles parallax translation
    <motion.div
      className="absolute pointer-events-none"
      style={{
        x: parallaxX,
        y: parallaxY,
        left: 0,
        top: 0,
        width: fleck.width,
        height: fleck.height,
      }}
    >
      {/* Inner img handles keyframe animation */}
      <motion.img
        src={fleck.src}
        alt=""
        className="absolute pointer-events-none will-change-transform"
        style={{
          width: fleck.width,
          height: fleck.height,
          left: 0,
          top: 0,
        }}
        animate={{
          x: xKeyframes,
          y: yKeyframes,
          opacity: opacityKeyframes,
        }}
        transition={{
          duration: 20,
          ease: [
            [0.7, 0, 1, 1],    // spread → center: slow start, fast end
            [0, 0, 0.3, 1],    // center → spread: fast start, slow end (reversed)
            [0.7, 0, 1, 1],    // spread → center: slow start, fast end
            [0, 0, 0.3, 1],    // center → spread: fast start, slow end (reversed)
          ],
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </motion.div>
  )
}

export function Flecks() {
  // Track mouse position relative to container center (-1 to 1 range)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth the values with springs for natural movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Calculate rotation based on cursor position in all corners
  // X-axis controls main rotation direction (left/right)
  // Y-axis amplifies when at top (negative Y), reduces when at bottom (positive Y)
  const rotation = useTransform(
    [smoothMouseX, smoothMouseY],
    ([x, y]: number[]) => {
      const xRotation = x * MAX_ROTATION_OFFSET
      // Y contribution: negative Y (top) adds to rotation magnitude, positive Y (bottom) reduces it
      const yMultiplier = 1 - y * 0.5 // Top (y=-1) = 1.5x, Bottom (y=1) = 0.5x
      return BASE_ROTATION + xRotation * yMultiplier
    }
  )

  // Create dynamic transform string combining translate and rotation
  const transform = useMotionTemplate`translate(-50%, -50%) rotate(${rotation}deg)`

  // Handle mouse movement on the container
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    // Normalize to -1 to 1 range based on distance from center
    mouseX.set((e.clientX - rect.left - centerX) / centerX)
    mouseY.set((e.clientY - rect.top - centerY) / centerY)
  }, [mouseX, mouseY])

  // Reset position when mouse leaves
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        width: COMPONENT_WIDTH,
        height: COMPONENT_HEIGHT,
        left: '50%',
        top: '50%',
        transform,
        transformOrigin: 'center center',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {flecksConfig.map((fleck) => (
        <ParallaxFleck
          key={fleck.id}
          fleck={fleck}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
    </motion.div>
  )
}
