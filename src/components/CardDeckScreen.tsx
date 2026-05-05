import { useCardDeck } from '../hooks/useCardDeck';

interface CardDeckScreenProps {
  onBack: () => void;
}

export function CardDeckScreen({ onBack }: CardDeckScreenProps) {
  const { currentQuestion, flipPhase, drawCount, flipCard, drawAnother } = useCardDeck();

  const isIdle = flipPhase === 'idle';
  const isRevealed = flipPhase === 'revealed';
  const isAnimating = flipPhase === 'flipping-out' || flipPhase === 'flipping-in';

  const cardAnimation =
    flipPhase === 'flipping-out'
      ? 'animate-[card-flip-out_200ms_ease-in_forwards]'
      : flipPhase === 'flipping-in'
        ? 'animate-[card-flip-in_220ms_ease-out_forwards]'
        : '';

  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-6 py-10">
      {/* Ambient bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-[20%] size-20 rounded-full bg-pink-300/20 blur-md animate-[bubble-float_7s_ease-in-out_infinite]" />
        <span className="absolute left-[75%] top-[15%] size-14 rounded-full bg-cyan-200/25 blur-sm animate-[bubble-float_5s_ease-in-out_0.6s_infinite]" />
        <span className="absolute left-[60%] top-[70%] size-28 rounded-full bg-fuchsia-300/12 blur-lg animate-[bubble-float_8s_ease-in-out_0.3s_infinite]" />
        <span className="absolute left-[20%] top-[78%] size-16 rounded-full bg-violet-200/18 blur-sm animate-[bubble-float_6s_ease-in-out_1s_infinite]" />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-body text-xs tracking-[0.25em] text-cyan-100/80 uppercase">Modo</p>
          <h1 className="font-display mt-1 text-4xl text-white">Card Deck Shuffle</h1>
          <p className="font-body mt-1 text-sm text-indigo-200/80">
            {isIdle && drawCount === 0
              ? 'Toque na carta para revelar sua pergunta'
              : isRevealed
                ? 'Encontre alguém que combine!'
                : 'Sorteando...'}
          </p>
        </div>

        {/* Card */}
        <div
          className={`relative w-full cursor-pointer select-none rounded-3xl ${cardAnimation}`}
          style={{ minHeight: '320px' }}
          onClick={isIdle ? flipCard : undefined}
          role="button"
          aria-label={isIdle ? 'Revelar pergunta' : undefined}
        >
          {/* Card face: back (decorative) */}
          {(isIdle || flipPhase === 'flipping-out') && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500/60 via-fuchsia-500/50 to-pink-500/60 shadow-[0_20px_60px_rgba(140,60,255,0.45)] backdrop-blur-md">
              {/* Card back pattern */}
              <div className="pointer-events-none absolute inset-4 rounded-2xl border-2 border-white/15" />
              <div className="pointer-events-none absolute inset-8 rounded-xl border border-white/10" />

              <div className="flex flex-col items-center gap-4">
                <span className="text-7xl drop-shadow-lg" aria-hidden>🎴</span>
                <p className="font-display text-2xl text-white/90">Toque para revelar</p>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-2 rounded-full bg-white/50 animate-[sparkle-pulse_1.6s_ease-in-out_infinite]"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card face: front (question) */}
          {(isRevealed || flipPhase === 'flipping-in') && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-cyan-500/30 via-indigo-500/30 to-violet-500/40 p-8 shadow-[0_20px_60px_rgba(60,140,255,0.4)] backdrop-blur-md">
              <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/10" />

              <span className="text-5xl drop-shadow-lg" aria-hidden>✨</span>
              <p className="font-body text-center text-lg font-semibold leading-snug text-white">
                {currentQuestion}
              </p>
              <div className="mt-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2">
                <p className="font-body text-xs text-cyan-100/70">
                  Encontre alguém assim no evento!
                </p>
              </div>
            </div>
          )}

          {/* Invisible spacer to keep height */}
          <div className="invisible h-80 w-full" aria-hidden />
        </div>

        {/* Actions */}
        <div className="flex w-full flex-col gap-3">
          {isRevealed && (
            <button
              onClick={drawAnother}
              disabled={isAnimating}
              className="font-display w-full rounded-2xl border border-pink-100/70 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 px-8 py-4 text-xl text-white shadow-[0_10px_28px_var(--glow-pink)] transition-all duration-200 active:scale-[0.97] hover:-translate-y-[1px] disabled:opacity-50"
            >
              🔀 Nova Carta
            </button>
          )}
          <button
            onClick={onBack}
            className="font-body w-full rounded-2xl border border-white/20 bg-white/8 px-8 py-3 text-sm text-indigo-100/80 backdrop-blur-sm transition-all duration-200 active:scale-[0.97] hover:bg-white/12"
          >
            ← Voltar ao início
          </button>
        </div>

        {/* Draw counter */}
        {drawCount > 0 && (
          <p className="font-body text-xs text-indigo-200/50">
            {drawCount} carta{drawCount !== 1 ? 's' : ''} sorteada{drawCount !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  );
}
