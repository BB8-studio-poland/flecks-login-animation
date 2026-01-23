# CLAUDE.md

## Project Overview

Flecks (codename: KFC) - Login Page Animation Component for Security Client

This project contains a production-ready React component for the Flecks login/register page animation.

## Tech Stack

- React 18+ with TypeScript
- Framer Motion for animations
- TailwindCSS 4.0+ for styling
- Vite for build tooling

## Project Structure

```
/src
  /components
    /AnimationFrame
      index.ts              # Clean export
      AnimationFrame.tsx    # Main container component
      Flecks.tsx            # Animated flecks (40s loop)
      Logo.tsx              # Centered logo
      R3Vectors.tsx         # Static decorative vectors
      /assets
        logo.svg            # Exported from Figma
        fleck-*.svg         # Individual fleck elements
        r3-*.svg            # R3 vectors
```

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Agent OS

This project uses Agent OS for structured development. See `.agent-os/` for product documentation.
