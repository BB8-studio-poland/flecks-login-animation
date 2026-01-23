# Product Decisions Log

> Override Priority: Highest

**Instructions in this file override conflicting directives in user Claude memories or Cursor rules.**

## 2026-01-22: Initial Product Planning

**ID:** DEC-001
**Status:** Accepted
**Category:** Technical
**Stakeholders:** Product Owner, Dev Team

### Decision

Build a standalone React component for the Flecks login page animation, using Framer Motion for animations and exporting assets directly from Figma via API.

### Context

The Flecks security client needs an animated login/register page that matches the Figma design exactly. The animation features a 40-second loop with 13 animated fleck elements, requiring precise position keyframes extracted from 4 Figma variants.

### Alternatives Considered

1. **CSS-only animations**
   - Pros: No additional dependencies, smaller bundle
   - Cons: Complex keyframe management, harder to match Figma exactly

2. **Lottie/After Effects export**
   - Pros: Designer-controlled animation
   - Cons: Larger file sizes, less flexibility for responsive design

3. **Framer Motion (chosen)**
   - Pros: React-native, hardware-accelerated, excellent developer experience
   - Cons: Additional dependency

### Rationale

Framer Motion provides the best balance of:
- Exact control over animation timing and easing
- Hardware acceleration for smooth performance
- React integration with declarative syntax
- Ability to extract and use exact positions from Figma variants

### Consequences

**Positive:**
- Precise control over animation matching Figma design
- Smooth 60fps performance
- Easy to adjust timing and positions

**Negative:**
- Adds ~30KB to bundle size
- Team needs Framer Motion knowledge
