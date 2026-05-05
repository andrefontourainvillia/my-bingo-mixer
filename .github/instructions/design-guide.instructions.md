---
description: "Use when designing or redesigning UI screens, components, layouts, and visual polish for Bingo Mixer. Enforces a bold Anime Bubble aesthetic, expressive typography, atmospheric backgrounds, and intentional motion for React + Tailwind CSS v4 files."
name: "Anime Bubble Design Guide"
applyTo:
  - "src/components/**/*.tsx"
  - "src/App.tsx"
  - "src/index.css"
---
# Anime Bubble Design Guide

This is a strict workspace-only rule set for Bingo Mixer UI work.

## Visual Direction
- Keep a cohesive Anime Bubble mood in all frontend changes: dreamy, playful, high-energy, and social.
- Prefer dark atmospheric or candy-sky gradients with high-contrast pastel accents.
- Avoid generic default UI patterns and flat monochrome sections.

## Typography
- Use expressive rounded display fonts for headings and clear friendly body fonts for content.
- Avoid default/system-first visual identity for major headings.
- Keep hierarchy obvious: strong titles, supportive subtitles, compact helper copy.

## Color System
- Define reusable tokens in `@theme` and `:root`; do not hardcode random one-off colors repeatedly.
- Maintain a clear palette role split:
  - Primary accent (CTA and key actions)
  - Secondary accent (supporting highlights)
  - Success/marked state (board interactions)
  - Bingo/win state (celebration and winning lines)
- Ensure readable contrast on glass/gradient surfaces.

## Surfaces and Depth
- Favor layered backgrounds (gradients, subtle radial lights, soft shape overlays).
- Use glassmorphism intentionally: translucent panels, thin borders, and backdrop blur.
- Give interactive containers depth through glow and soft shadow, not heavy outlines.

## Motion
- Prioritize 2-4 meaningful animations over many tiny effects.
- Recommended animation categories:
  - Page or section reveal
  - Floating ambient bubbles/sparkles
  - Press/click feedback (pop)
  - Win-state shimmer/celebration
- Keep durations short and responsive for game interactions.

## Component Rules
- Buttons: rounded, high-contrast, obvious active feedback, and visually tappable on mobile.
- Bingo squares: states must be immediately distinguishable (idle, marked, winning, free-space).
- Bingo modal: clear celebration moment with strong headline and single obvious CTA.
- Header/instructions: concise copy, never visually louder than gameplay board.

## Tailwind v4 Usage
- Keep design tokens in `@theme` and app-level CSS variables in `:root`.
- Use modern v4 utilities (opacity slash syntax, arbitrary values) when useful.
- Do not introduce `tailwind.config.js`; this project is CSS-first.

## Responsiveness and Accessibility
- Design mobile-first, then scale up spacing and typography for larger screens.
- Preserve readable text sizes in dense board cells.
- Keep interactive states keyboard/touch friendly and clearly visible.

## Avoid
- Purple-on-white default gradient templates.
- Interchangeable SaaS dashboard aesthetics.
- Overcrowded animations that distract from gameplay.
- Style changes that reduce legibility of square text.

## Rule Priority
- When this guide conflicts with generic style preferences, follow this guide for Bingo Mixer frontend files.
