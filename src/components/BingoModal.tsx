interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[12%] top-[18%] text-xl text-yellow-200 animate-[sparkle-pulse_1.4s_ease-in-out_infinite]">✦</span>
        <span className="absolute left-[82%] top-[24%] text-lg text-cyan-200 animate-[sparkle-pulse_1.8s_ease-in-out_0.3s_infinite]">✦</span>
        <span className="absolute left-[24%] top-[78%] text-xl text-pink-200 animate-[sparkle-pulse_1.6s_ease-in-out_0.2s_infinite]">✦</span>
        <span className="absolute left-[68%] top-[72%] text-sm text-violet-100 animate-[sparkle-pulse_1.9s_ease-in-out_0.6s_infinite]">✦</span>
      </div>

      <div className="relative w-full max-w-sm rounded-3xl border border-white/30 bg-white/12 p-7 text-center shadow-[0_22px_60px_rgba(12,8,32,0.6)] backdrop-blur-xl animate-[bubble-pop_0.32s_ease-out]">
        <div className="absolute -left-2 top-5 size-3 rounded-full bg-pink-200/70 animate-[bubble-float_3.4s_ease-in-out_infinite]" />
        <div className="absolute -right-3 bottom-12 size-4 rounded-full bg-cyan-200/65 animate-[bubble-float_4.1s_ease-in-out_0.5s_infinite]" />

        <div className="mb-3 text-5xl">🎉</div>
        <h2 className="font-display mb-2 bg-[linear-gradient(120deg,#fde68a,#f9a8d4,#c4b5fd)] bg-clip-text text-4xl text-transparent">BINGO!</h2>
        <p className="font-body mb-6 text-base font-semibold text-indigo-50">You completed a shining line!</p>

        <button
          onClick={onDismiss}
          className="font-display w-full rounded-2xl border border-pink-100/80 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 px-6 py-3 text-lg font-semibold text-white shadow-[0_10px_28px_var(--glow-pink)] transition-all duration-300 active:scale-[0.98] hover:translate-y-[-1px]"
        >
          Keep Sparkling
        </button>
      </div>
    </div>
  );
}
