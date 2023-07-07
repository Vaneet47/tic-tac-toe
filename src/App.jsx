import React, { useEffect, useState } from 'react';
import './app.css';
import Grid from './components/grid/Grid';

function App() {
  const [value, setValue] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [draw, setDraw] = useState(false);

  const [row1, setRow1] = useState(['', '', '']);
  const [row2, setRow2] = useState(['', '', '']);
  const [row3, setRow3] = useState(['', '', '']);

  const playAgain = () => {
    setValue('X');
    setGameOver(false);
    setDraw(false);
    setRow1(['', '', '']);
    setRow2(['', '', '']);
    setRow3(['', '', '']);
  };

  return (
    <div className='app'>
      <Grid
        value={value}
        setValue={setValue}
        gameOver={gameOver}
        setGameOver={setGameOver}
        draw={draw}
        setDraw={setDraw}
        row1={row1}
        setRow1={setRow1}
        row2={row2}
        setRow2={setRow2}
        row3={row3}
        setRow3={setRow3}
      />
      <div className='container'>
        {!gameOver && !draw && <h3 className='text'>Next Player: {value}</h3>}
        {!gameOver &&
          !draw &&
          (row1[0] !== '' ||
            row1[1] !== '' ||
            row1[2] !== '' ||
            row2[0] !== '' ||
            row2[1] !== '' ||
            row2[2] !== '' ||
            row3[0] !== '' ||
            row3[1] !== '' ||
            row3[2] !== '') && <button onClick={playAgain}>Reset Game</button>}
        {!gameOver && draw && <h3 className='text'>Game Draw</h3>}
        {gameOver && !draw && (
          <h3 className='text'>Player {value === 'X' ? 'O' : 'X'} Winner</h3>
        )}
        {!gameOver && draw && <button onClick={playAgain}>Play Again</button>}
        {gameOver && !draw && <button onClick={playAgain}>Play Again</button>}
      </div>
    </div>
  );
}

export default App;
