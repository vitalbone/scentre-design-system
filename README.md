# Scentre Design System

A pnpm monorepo for Scentre Group's design system: a custom [Astryx](https://astryx.atmeta.com) theme plus a demo app showcasing it.

## Structure

```
apps/
  demo/            React + Vite demo app rendering Astryx components with the Scentre theme
packages/
  theme/           @scentre/theme — theme tokens & build output consumed by apps
```

## Getting Started

Install dependencies from the repo root:

```bash
pnpm install
pnpm build:theme # build the theme package (required before running the demo)
pnpm dev # run the demo app
```

## Astryx CLI

This repo uses the Astryx CLI (`@astryxdesign/cli`) to discover components/templates and build theme output.
See [AGENTS.md](./AGENTS.md) for AI-agent-specific guidance on working with Astryx in this repo.

## Theming

Custom styling should use component props first, then design tokens (`var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`) — avoid raw hex/px values. Brand colors are configured via the Astryx theme definition in `packages/theme/src/theme.ts`, not by overriding `:root`.
