# Technical Specification

This is the technical specification for the spec detailed in @.agent-os/specs/2026-01-22-animation-frame/spec.md

## Technical Requirements

### Component Structure

```
/src/components/AnimationFrame/
├── index.ts              # Clean export
├── AnimationFrame.tsx    # Main container
├── Flecks.tsx            # Animated elements
├── Logo.tsx              # Centered logo
├── R3Vectors.tsx         # Static decorative vectors
└── assets/               # SVG files
```

### Layer Stack (bottom to top)

1. Background gradient: `linear-gradient(180deg, #0F0F0F 0%, #000000 100%)`
2. Flecks (13 animated elements)
3. R3 Vectors (3 static elements)
4. Logo (centered)

### AnimationFrame Container

- Default width: 960px (configurable via props)
- Height: 100vh or configurable
- `overflow: hidden` to act as mask
- Position: relative for absolute children
- Background: linear gradient

### Flecks Animation Details

**13 Elements with properties:**

| Element | Opacity | Blur |
|---------|---------|------|
| L1 | 0.4 | 200px |
| L2 | 0.6 | 30px |
| L2.1 | 0.6 | 67.3px |
| L3 | 0.4 | 60px |
| L3.1 | 0.6 | 67.3px |
| L4 | 0.6 | 30px |
| L5 | 0.6 | 20px |
| 00 | 0.6 | 67.3px |
| R4 | 0.6 | 30px |
| R3 | 0.6 | 20px |
| R2 | 0.6 | 30px |
| R1 | 0.6 | 40px |
| Vector | 0.3→0.1→0.3 | 67.3px |

**Animation Timeline (40 seconds):**
- 0s: Default positions
- 10s: Variant2 positions
- 20s: Variant3 positions
- 30s: Variant4 positions
- 40s: Back to Default (loop)

**Framer Motion Implementation:**
```tsx
<motion.div
  animate={{
    x: [pos1.x, pos2.x, pos3.x, pos4.x, pos1.x],
    y: [pos1.y, pos2.y, pos3.y, pos4.y, pos1.y],
  }}
  transition={{
    duration: 40,
    ease: 'easeInOut',
    repeat: Infinity,
  }}
/>
```

### R3 Vectors Specifications

| Vector | Size | Rotation | Opacity |
|--------|------|----------|---------|
| Large | 645x625 | 30° | 0.6 |
| Medium | 1046x1014 | 30° | 0.4 |
| Small | 483x468 | 30° | 0.4 |

### Logo Specifications

- Position: Absolute center (both x and y)
- z-index: Highest (on top of all layers)
- Static (no animation)

### Color Palette

- Background top: #0F0F0F
- Background bottom: #000000
- Fleck gradient: rgb(255, 122, 14) (orange)
- Vector fill: As exported from Figma

### Performance Considerations

- Use `will-change: transform` for animated elements
- Hardware-accelerated transforms (translate3d)
- Lazy load SVG assets
- Consider reducing blur on mobile for performance

## External Dependencies

- **framer-motion** - Animation library for React
  - Justification: Best-in-class React animation with hardware acceleration and declarative API

- **tailwindcss** - Utility-first CSS framework
  - Justification: Rapid styling matching existing tech stack preferences
