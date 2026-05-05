interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden px-6 py-10">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[16%] size-18 rounded-full bg-pink-300/25 blur-sm animate-[bubble-float_6s_ease-in-out_infinite]" />
        <span className="absolute left-[78%] top-[28%] size-12 rounded-full bg-cyan-200/30 blur-sm animate-[bubble-float_4.8s_ease-in-out_0.5s_infinite]" />
        <span className="absolute left-[22%] top-[74%] size-24 rounded-full bg-fuchsia-300/15 blur-md animate-[bubble-float_6.6s_ease-in-out_0.2s_infinite]" />
        <span className="absolute left-[67%] top-[78%] size-14 rounded-full bg-violet-200/20 blur-sm animate-[bubble-float_5.4s_ease-in-out_0.8s_infinite]" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/25 bg-white/10 p-7 text-center shadow-[0_18px_55px_rgba(10,8,28,0.45)] backdrop-blur-xl md:p-8">
        <p className="font-body text-xs tracking-[0.25em] text-cyan-100/90 uppercase">Social game</p>
        <h1 className="font-display mt-2 text-5xl leading-tight text-white md:text-6xl">Bingo Mixer</h1>
        <p className="font-body mt-2 text-lg font-semibold text-pink-100">Anime Bubble Edition</p>

        <div className="mt-8 rounded-2xl border border-white/30 bg-white/12 p-5 text-left backdrop-blur-lg">
          <h2 className="font-display mb-3 text-xl text-cyan-100">How to play</h2>
          <ul className="font-body space-y-2 text-sm text-indigo-50/95">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="font-display mt-8 w-full rounded-2xl border border-pink-100/80 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 px-8 py-4 text-xl font-semibold text-white shadow-[0_10px_28px_var(--glow-pink)] transition-all duration-300 active:scale-[0.98] hover:translate-y-[-1px] hover:shadow-[0_12px_34px_var(--glow-pink)]"
        >
          Start Bubble Match
        </button>
      </div>
    </div>
  );
}
