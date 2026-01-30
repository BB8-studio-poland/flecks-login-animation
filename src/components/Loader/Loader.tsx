import { motion } from 'framer-motion'

import loaderL2 from './assets/loader-l2.svg'
import loaderL1 from './assets/loader-l1.svg'
import loader00 from './assets/loader-00.svg'
import loaderR1 from './assets/loader-r1.svg'
import loaderR2 from './assets/loader-r2.svg'

// Loader animation from Figma component 10860-23278
// Container: 200 x 52
// 4 variants cycling with Smart Animate, 1s each, ease-in-out
// Total loop: 4 seconds

// Container dimensions
const CONTAINER_WIDTH = 200
const CONTAINER_HEIGHT = 52

// Center point of container
const CENTER_X = CONTAINER_WIDTH / 2 // 100
const CENTER_Y = CONTAINER_HEIGHT / 2 // 26

// Element dimensions from Figma (rounded to full pixels)
const elements = {
  L2: { width: 37, height: 33 },
  L1: { width: 13, height: 11 },
  '00': { width: 5, height: 5 },
  R1: { width: 21, height: 19 },
  R2: { width: 29, height: 26 },
}

// Helper: convert top-left position to center-based position
// All positions will be relative to element centers for proper centering
const centerPos = (leftX: number, topY: number, width: number, height: number) => ({
  x: leftX + width / 2 - CENTER_X,  // offset from container center
  y: topY + height / 2 - CENTER_Y,
})

// Position keyframes - converted to center-based coordinates
// Original Figma positions are top-left, we convert to center offsets
const getKeyframes = () => {
  const L2 = elements.L2
  const L1 = elements.L1
  const R1 = elements.R1
  const R2 = elements.R2

  return {
    L2: [
      centerPos(21, 9.6, L2.width, L2.height),      // Default: left
      centerPos(81, 9.6, L2.width, L2.height),      // Variant2: center
      centerPos(141, 9.6, L2.width, L2.height),     // Variant3: right
      centerPos(81, 9.6, L2.width, L2.height),      // Variant4: center
    ],
    L1: [
      centerPos(70.1, 20.3, L1.width, L1.height),   // Default
      centerPos(93.1, 20.3, L1.width, L1.height),   // Variant2
      centerPos(116.1, 20.3, L1.width, L1.height),  // Variant3
      centerPos(93.1, 20.3, L1.width, L1.height),   // Variant4
    ],
    R1: [
      centerPos(112, 16.7, R1.width, R1.height),    // Default
      centerPos(89, 16.7, R1.width, R1.height),     // Variant2
      centerPos(66, 16.7, R1.width, R1.height),     // Variant3
      centerPos(89, 16.7, R1.width, R1.height),     // Variant4
    ],
    R2: [
      centerPos(145, 13.2, R2.width, R2.height),    // Default
      centerPos(85, 13.2, R2.width, R2.height),     // Variant2
      centerPos(25, 13.2, R2.width, R2.height),     // Variant3
      centerPos(85, 13.2, R2.width, R2.height),     // Variant4
    ],
  }
}

const positionKeyframes = getKeyframes()

// Center dot: scales 10x and fades, stays centered
const centerDotKeyframes = {
  scale: [1, 10, 1, 10],
  opacity: [1, 0.2, 1, 0.2],
}

// Color animation: dark -> light -> dark -> light
// Dark: #A1A1A1 (original), Light: #D1D1D1
const colorKeyframes = {
  filter: [
    'brightness(1)',      // Default: dark
    'brightness(1.3)',    // Variant2: light
    'brightness(1)',      // Variant3: dark
    'brightness(1.3)',    // Variant4: light
  ],
}

// Easing: Figma uses EASE_IN_AND_OUT for each segment
const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1]

// Duration per transition
const TRANSITION_DURATION = 1 // 1 second per step

// Easing array for 4 segments (between 5 keyframes)
const segmentEasings: [number, number, number, number][] = [easeInOut, easeInOut, easeInOut, easeInOut]

interface LoaderProps {
  className?: string
}

export function Loader({ className = '' }: LoaderProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      }}
    >
      {/* L2 - Large left fleck */}
      <motion.img
        src={loaderL2}
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: elements.L2.width,
          height: elements.L2.height,
          left: '50%',
          top: '50%',
          marginLeft: -elements.L2.width / 2,
          marginTop: -elements.L2.height / 2,
        }}
        animate={{
          x: [...positionKeyframes.L2.map(p => p.x), positionKeyframes.L2[0].x],
          y: [...positionKeyframes.L2.map(p => p.y), positionKeyframes.L2[0].y],
          filter: [...colorKeyframes.filter, colorKeyframes.filter[0]],
        }}
        transition={{
          duration: TRANSITION_DURATION * 4,
          ease: segmentEasings,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* L1 - Small left fleck */}
      <motion.img
        src={loaderL1}
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: elements.L1.width,
          height: elements.L1.height,
          left: '50%',
          top: '50%',
          marginLeft: -elements.L1.width / 2,
          marginTop: -elements.L1.height / 2,
        }}
        animate={{
          x: [...positionKeyframes.L1.map(p => p.x), positionKeyframes.L1[0].x],
          y: [...positionKeyframes.L1.map(p => p.y), positionKeyframes.L1[0].y],
          filter: [...colorKeyframes.filter, colorKeyframes.filter[0]],
        }}
        transition={{
          duration: TRANSITION_DURATION * 4,
          ease: segmentEasings,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* 00 - Center dot (scales and fades) */}
      <motion.img
        src={loader00}
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: elements['00'].width,
          height: elements['00'].height,
          left: '50%',
          top: '50%',
          marginLeft: -elements['00'].width / 2,
          marginTop: -elements['00'].height / 2,
          transformOrigin: 'center center',
        }}
        animate={{
          scale: [...centerDotKeyframes.scale, centerDotKeyframes.scale[0]],
          opacity: [...centerDotKeyframes.opacity, centerDotKeyframes.opacity[0]],
          filter: [...colorKeyframes.filter, colorKeyframes.filter[0]],
        }}
        transition={{
          duration: TRANSITION_DURATION * 4,
          ease: segmentEasings,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* R1 - Small right fleck */}
      <motion.img
        src={loaderR1}
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: elements.R1.width,
          height: elements.R1.height,
          left: '50%',
          top: '50%',
          marginLeft: -elements.R1.width / 2,
          marginTop: -elements.R1.height / 2,
        }}
        animate={{
          x: [...positionKeyframes.R1.map(p => p.x), positionKeyframes.R1[0].x],
          y: [...positionKeyframes.R1.map(p => p.y), positionKeyframes.R1[0].y],
          filter: [...colorKeyframes.filter, colorKeyframes.filter[0]],
        }}
        transition={{
          duration: TRANSITION_DURATION * 4,
          ease: segmentEasings,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* R2 - Medium right fleck */}
      <motion.img
        src={loaderR2}
        alt=""
        className="absolute pointer-events-none"
        style={{
          width: elements.R2.width,
          height: elements.R2.height,
          left: '50%',
          top: '50%',
          marginLeft: -elements.R2.width / 2,
          marginTop: -elements.R2.height / 2,
        }}
        animate={{
          x: [...positionKeyframes.R2.map(p => p.x), positionKeyframes.R2[0].x],
          y: [...positionKeyframes.R2.map(p => p.y), positionKeyframes.R2[0].y],
          filter: [...colorKeyframes.filter, colorKeyframes.filter[0]],
        }}
        transition={{
          duration: TRANSITION_DURATION * 4,
          ease: segmentEasings,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </div>
  )
}
