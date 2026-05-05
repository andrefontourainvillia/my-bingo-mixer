import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { CardDeckScreen } from './components/CardDeckScreen';
import type { AppMode } from './types';

function App() {
  const [appMode, setAppMode] = useState<AppMode>('start');

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  if (appMode === 'start') {
    return (
      <StartScreen
        onStartBingo={() => {
          setAppMode('bingo');
          startGame();
        }}
        onStartCardDeck={() => setAppMode('card-deck')}
      />
    );
  }

  if (appMode === 'card-deck') {
    return <CardDeckScreen onBack={() => setAppMode('start')} />;
  }

  // bingo mode
  if (gameState === 'start') {
    return (
      <StartScreen
        onStartBingo={() => startGame()}
        onStartCardDeck={() => setAppMode('card-deck')}
      />
    );
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={() => {
          resetGame();
          setAppMode('start');
        }}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
