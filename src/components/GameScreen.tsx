import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden px-3 py-4">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[10%] top-[8%] size-16 rounded-full bg-pink-200/20 blur-md animate-[bubble-float_6.4s_ease-in-out_infinite]" />
        <span className="absolute left-[84%] top-[20%] size-12 rounded-full bg-cyan-200/20 blur-sm animate-[bubble-float_5.2s_ease-in-out_0.3s_infinite]" />
      </div>

      <header className="relative z-10 flex items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-3 py-2 shadow-[0_8px_24px_rgba(10,8,28,0.3)] backdrop-blur-md">
        <button
          onClick={onReset}
          className="font-body rounded-xl border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-semibold text-indigo-50 transition-colors active:bg-white/20"
        >
          ← Back
        </button>
        <h1 className="font-display text-xl text-white">Bingo Mixer</h1>
        <div className="w-[70px]" />
      </header>

      <p className="font-body relative z-10 px-4 py-3 text-center text-sm font-semibold text-indigo-100/90">
        Tap a square when you find someone who matches it.
      </p>

      {hasBingo && (
        <div className="font-display relative z-10 rounded-2xl border border-amber-100/70 bg-[linear-gradient(120deg,rgba(251,191,36,0.95),rgba(255,158,61,0.95),rgba(252,211,77,0.95))] bg-[length:200%_200%] px-4 py-2 text-center text-sm font-semibold text-amber-950 shadow-[0_6px_20px_rgba(251,191,36,0.45)] animate-[shimmer-wave_3.2s_ease-in-out_infinite]">
          🎉 BINGO! You got a line!
        </div>
      )}

      <div className="relative z-10 flex flex-1 items-center justify-center py-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
