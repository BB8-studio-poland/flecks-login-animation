# Spec Tasks

## Tasks

- [x] 1. Project Setup
  - [x] 1.1 Initialize Vite + React + TypeScript project
  - [x] 1.2 Install dependencies (framer-motion, tailwindcss)
  - [x] 1.3 Configure TailwindCSS
  - [x] 1.4 Create component directory structure

- [x] 2. Export Assets from Figma
  - [x] 2.1 Export Logo SVG (node: 10655-22479)
  - [x] 2.2 Export all 13 Fleck element SVGs from variants
  - [x] 2.3 Export 3 R3 vector SVGs
  - [x] 2.4 Optimize SVGs and place in assets folder

- [x] 3. Build AnimationFrame Container
  - [x] 3.1 Create AnimationFrame.tsx with responsive container
  - [x] 3.2 Apply background gradient
  - [x] 3.3 Set up overflow hidden masking
  - [x] 3.4 Add configurable width/height props

- [x] 4. Implement R3Vectors Component
  - [x] 4.1 Create R3Vectors.tsx component
  - [x] 4.2 Position large vector (645x625, 30° rotation, 0.6 opacity)
  - [x] 4.3 Position medium vector (1046x1014, 30° rotation, 0.4 opacity)
  - [x] 4.4 Position small vector (483x468, 30° rotation, 0.4 opacity)

- [x] 5. Implement Flecks Animation
  - [x] 5.1 Extract exact positions from all 4 Figma variants
  - [x] 5.2 Create Flecks.tsx component structure
  - [x] 5.3 Implement position keyframes for all 13 elements
  - [x] 5.4 Apply blur filters per element spec
  - [x] 5.5 Apply opacity values per element spec
  - [x] 5.6 Configure 40-second looping animation
  - [x] 5.7 Add Vector overlay with opacity animation

- [x] 6. Implement Logo Component
  - [x] 6.1 Create Logo.tsx component
  - [x] 6.2 Center logo absolutely (x and y)
  - [x] 6.3 Set correct z-index layering

- [x] 7. Assemble & Test
  - [x] 7.1 Combine all components in AnimationFrame
  - [x] 7.2 Create index.ts export
  - [x] 7.3 Test at 960px width
  - [x] 7.4 Verify 40-second animation loop timing
  - [x] 7.5 Test responsive behavior at various widths
  - [x] 7.6 Compare visually against Figma prototype
