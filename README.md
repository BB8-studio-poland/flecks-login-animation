# Flecks Login Animation

Animated login page background component for the Flecks security client.

## Live Demo

**[View Demo](https://bb8-studio-poland.github.io/flecks-login-animation/)**

## Features

- **40-second looping animation** - Flecks move between spread and centered positions
- **Parallax cursor interaction** - Elements shift based on mouse position with depth layers
- **Rotation effect** - Container rotates subtly based on cursor corner position
- **Spring physics** - Smooth, natural movement using Framer Motion springs

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

```tsx
import { AnimationFrame } from './components/AnimationFrame'

function LoginPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimationFrame />
      {/* Your login form here */}
    </div>
  )
}
```

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
src/components/AnimationFrame/
├── index.ts              # Clean export
├── AnimationFrame.tsx    # Main container
├── Flecks.tsx            # Animated flecks with parallax
├── Logo.tsx              # Centered logo
├── R3Vectors.tsx         # Static decorative vectors
└── assets/               # SVG assets from Figma
```

## License

Private - BB8 Studio Poland
