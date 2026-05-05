# Bingo Mixer — Agent Instructions

Social bingo game for in-person mixers. Players find people who match prompts and mark them off to get 5 in a row.

## Before Every Change

- [ ] `npm run lint` — zero errors
- [ ] `npm run build` — must succeed
- [ ] `npm run test` — all tests pass

## Commands

```bash
npm run dev    # Vite dev server (port 5173)
npm run build  # tsc -b && vite build
npm run test   # Vitest, run once
npm run lint   # ESLint
```

## Architecture

| File | Role |
|------|------|
| `src/App.tsx` | Root — composes screens from `useBingoGame` state |
| `src/types/index.ts` | Domain types: `BingoSquareData`, `BingoLine`, `GameState` |
| `src/data/questions.ts` | Question pool (≥ 24 strings) + `FREE_SPACE` constant |
| `src/hooks/useBingoGame.ts` | All state + `localStorage` persistence |
| `src/utils/bingoLogic.ts` | Pure functions: `generateBoard`, `toggleSquare`, `checkBingo`, `getWinningSquareIds` |
| `src/components/` | `StartScreen`, `GameScreen`, `BingoBoard`, `BingoSquare`, `BingoModal` |

**Data flow:** `useBingoGame` → `App` → screen components (one-way).  
**Persistence:** key `bingo-game-state`, schema-versioned (`STORAGE_VERSION`). Increment when `StoredGameData` shape changes.  
**Board:** flat array of 25 `BingoSquareData`, indices `0–24`. Center `id=12` is always the free space.

## Conventions

- Named exports only: `export function Foo` (no `export default`).
- Props interfaces at top of the component file, not in `types/`.
- Domain types in `src/types/index.ts`; pure utils in `src/utils/` (no React imports).
- Tests co-located with the module (`bingoLogic.test.ts`); use `vi.spyOn(Math, 'random')` for determinism.

## Styling

Tailwind CSS v4 — `@theme` in [`src/index.css`](src/index.css), **no `tailwind.config.js`**.  
Tokens: `--color-accent`, `--color-accent-light`, `--color-marked`, `--color-marked-border`, `--color-bingo`.  
→ Read [tailwind-4 instructions](.github/instructions/tailwind-4.instructions.md) before any Tailwind work.  
→ Read [frontend-design instructions](.github/instructions/frontend-design.instructions.md) for UI work.

## Questions

Edit `src/data/questions.ts` — keep ≥ 24 unique strings. See [Quiz Master agent](.github/agents/quiz-master.agent.md) for content guidelines.

## Deployment

GitHub Pages via CI. `VITE_REPO_NAME` env var overrides the base path (default `/`).
