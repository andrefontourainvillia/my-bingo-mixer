import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'font-body relative flex min-h-[62px] select-none items-center justify-center rounded-xl border p-1.5 text-center text-[11px] leading-tight font-semibold transition-all duration-200';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-amber-200 bg-[linear-gradient(145deg,rgba(251,191,36,0.95),rgba(253,224,71,0.92),rgba(251,146,60,0.95))] bg-[length:180%_180%] text-amber-950 shadow-[0_0_16px_rgba(251,191,36,0.48)] animate-[shimmer-wave_3s_ease-in-out_infinite]'
      : 'border-marked-border bg-marked text-emerald-950 shadow-[0_0_14px_rgba(52,211,153,0.38)]'
    : 'border-white/30 bg-white/15 text-indigo-50 backdrop-blur-sm active:scale-[0.98]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-display border-cyan-200/70 bg-[linear-gradient(145deg,rgba(103,232,249,0.92),rgba(216,180,254,0.9))] text-indigo-950 shadow-[0_0_12px_var(--glow-cyan)] text-xs'
    : '';

  const popClass = square.isMarked ? 'animate-[bubble-pop_0.24s_ease-out]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} ${popClass}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-[10px] text-emerald-900">✓</span>
      )}
    </button>
  );
}
