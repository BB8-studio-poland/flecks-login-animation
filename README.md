# Flecks Login Animation

Animated login page background component for the Flecks security client.

## Live Demos

- **[Login Animation](https://bb8-studio-poland.github.io/flecks-login-animation/)** - Full-screen flecks animation with parallax
- **[Loader Animation](https://bb8-studio-poland.github.io/flecks-login-animation/?loader)** - Compact loader with pulsing flecks

## Features

### Login Animation
- **40-second looping animation** - Flecks move between spread and centered positions
- **Parallax cursor interaction** - Elements shift based on mouse position with depth layers
- **Rotation effect** - Container rotates subtly based on cursor corner position
- **Spring physics** - Smooth, natural movement using Framer Motion springs

### Loader Animation
- **4-second looping animation** - 5 flecks converge and spread with breathing effect
- **Center dot pulse** - Scales 10x with opacity fade
- **Color transitions** - Dark to light color cycling
- **Compact size** - 200x52px, perfect for loading states

## Tech Stack

- React 19
- TypeScript
- Framer Motion
- TailwindCSS 4
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Component Usage

### AnimationFrame (Login Background)

The `AnimationFrame` component accepts `width` and `height` props to control its size.

```tsx
import { AnimationFrame } from './components/AnimationFrame'

function LoginPage() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Login form on the left side */}
      <div className="w-1/2 flex items-center justify-center">
        {/* Your login form here */}
      </div>

      {/* Animation on the right side */}
      <div className="relative w-1/2 h-screen overflow-hidden">
        <AnimationFrame width="50vw" height="100vh" />
      </div>
    </div>
  )
}
```

> **Note:** The live demo uses `width="100vw"` for preview purposes. For the actual login page implementation, use `width="50vw"` to display the animation on half of the screen.

### Loader

The `Loader` component is a compact 200x52px animation for loading states.

```tsx
import { Loader } from './components/Loader'

// Basic usage
<Loader />

// With custom className
<Loader className="my-4" />

// Centered in a container
<div className="flex items-center justify-center min-h-screen">
  <Loader />
</div>
```

**Figma design reference:** [KFC-WEB-v0.1](https://www.figma.com/design/st9TTT5sd3gGQkOKIS4i6K/KFC-WEB-v0.1?node-id=10860-23278)

## Animation Details

### Flecks Movement
- 13 individual fleck elements with different sizes and blur levels
- 4-frame keyframe animation: spread → center → spread (mirrored) → center
- Each frame lasts 5 seconds (20s total cycle, loops seamlessly)

### Parallax Effect
- Depth values range from 0.15 (background) to 0.7 (foreground)
- Background flecks (large, blurry) move less
- Foreground flecks (small, sharp) move more
- Maximum offset: 150px

### Rotation Effect
- Base rotation: 30°
- Cursor right → clockwise rotation (up to +15°)
- Cursor left → counter-clockwise rotation (up to -15°)
- Top corners amplify rotation, bottom corners reduce it

## Project Structure

```
src/components/
├── AnimationFrame/           # Login background animation
│   ├── index.ts              # Clean export
│   ├── AnimationFrame.tsx    # Main container
│   ├── Flecks.tsx            # Animated flecks with parallax
│   ├── Logo.tsx              # Centered logo
│   ├── R3Vectors.tsx         # Static decorative vectors
│   └── assets/               # SVG assets from Figma
│
└── Loader/                   # Loading animation
    ├── index.ts              # Clean export
    ├── Loader.tsx            # Main component (200x52px)
    └── assets/               # SVG fleck assets
        ├── loader-l2.svg     # Large left fleck
        ├── loader-l1.svg     # Small left fleck
        ├── loader-00.svg     # Center dot (scales/fades)
        ├── loader-r1.svg     # Small right fleck
        └── loader-r2.svg     # Medium right fleck
```

## License

Private - BB8 Studio Poland
