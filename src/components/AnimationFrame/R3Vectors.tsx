import r3Large from './assets/r3-large.svg'
import r3Medium from './assets/r3-medium.svg'
import r3Small from './assets/r3-small.svg'

const vectors = [
  {
    src: r3Large,
    width: 645,
    height: 625,
    x: 544,
    y: -268,
    rotation: 30,
    opacity: 0.6,
  },
  {
    src: r3Medium,
    width: 1046,
    height: 1014,
    x: -290,
    y: 801,
    rotation: 30,
    opacity: 0.4,
  },
  {
    src: r3Small,
    width: 483,
    height: 468,
    x: -290,
    y: 620,
    rotation: 30,
    opacity: 0.4,
  },
]

export function R3Vectors() {
  return (
    <>
      {vectors.map((vector, index) => (
        <img
          key={index}
          src={vector.src}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: vector.width,
            height: vector.height,
            left: vector.x,
            top: vector.y,
            opacity: vector.opacity,
            transform: `rotate(${vector.rotation}deg)`,
            transformOrigin: 'center center',
          }}
        />
      ))}
    </>
  )
}
