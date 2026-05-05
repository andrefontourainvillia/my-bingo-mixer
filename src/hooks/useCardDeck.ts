import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

type FlipPhase = 'idle' | 'flipping-out' | 'flipping-in' | 'revealed';

export interface CardDeckState {
  currentQuestion: string;
  flipPhase: FlipPhase;
  drawCount: number;
}

export interface CardDeckActions {
  flipCard: () => void;
  drawAnother: () => void;
}

function pickRandom(exclude?: string): string {
  const pool = exclude ? questions.filter((q) => q !== exclude) : questions;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function useCardDeck(): CardDeckState & CardDeckActions {
  const [currentQuestion, setCurrentQuestion] = useState<string>(() => pickRandom());
  const [flipPhase, setFlipPhase] = useState<FlipPhase>('idle');
  const [drawCount, setDrawCount] = useState(0);

  const flipCard = useCallback(() => {
    if (flipPhase !== 'idle') return;
    setFlipPhase('flipping-out');
    setTimeout(() => {
      setFlipPhase('flipping-in');
      setTimeout(() => {
        setFlipPhase('revealed');
      }, 220);
    }, 200);
  }, [flipPhase]);

  const drawAnother = useCallback(() => {
    if (flipPhase === 'flipping-out' || flipPhase === 'flipping-in') return;
    setFlipPhase('flipping-out');
    setTimeout(() => {
      setCurrentQuestion((prev) => pickRandom(prev));
      setDrawCount((c) => c + 1);
      setFlipPhase('flipping-in');
      setTimeout(() => {
        setFlipPhase('idle');
      }, 220);
    }, 200);
  }, [flipPhase]);

  return { currentQuestion, flipPhase, drawCount, flipCard, drawAnother };
}
