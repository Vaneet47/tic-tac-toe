import React, { useEffect, useState } from 'react';
import './grid.css';

function Grid(props) {
  let row1 = props.row1;
  let row2 = props.row2;
  let row3 = props.row3;
  let value = props.value;
  let gameOver = props.gameOver;
  let draw = props.draw;

  useEffect(() => {
    row1 = props.row1;
    row2 = props.row2;
    row3 = props.row3;
    value = props.value;
    gameOver = props.gameOver;
    draw = props.draw;
  }, [props]);

  const checkGameOver = () => {
    if (value === 'X') {
      props.setValue('O');
    } else {
      props.setValue('X');
    }

    if (
      (row1[0] === row1[1] && row1[0] === row1[2] && row1[0] !== '') ||
      (row2[0] === row2[1] && row2[0] === row2[2] && row2[0] !== '') ||
      (row3[0] === row3[1] && row3[0] === row3[2] && row3[0] !== '') ||
      (row1[0] === row2[0] && row1[0] === row3[0] && row1[0] !== '') ||
      (row1[1] === row2[1] && row1[1] === row3[1] && row1[1] !== '') ||
      (row1[2] === row2[2] && row1[2] === row3[2] && row1[2] !== '') ||
      (row3[0] === row2[1] && row3[0] === row1[2] && row3[0] !== '') ||
      (row3[2] === row2[1] && row3[2] === row1[0] && row3[2] !== '')
    ) {
      props.setGameOver(true);
      return;
    }

    if (
      row1[0] !== '' &&
      row1[1] !== '' &&
      row1[2] !== '' &&
      row2[0] !== '' &&
      row2[1] !== '' &&
      row2[2] !== '' &&
      row3[0] !== '' &&
      row3[1] !== '' &&
      row3[2] !== '' &&
      !gameOver
    ) {
      props.setDraw(true);
    }
  };

  useEffect(() => {
    checkGameOver();
  }, [props.row1, props.row2, props.row3]);

  const handleClick = (pos) => {
    switch (pos) {
      case 'row1-0':
        if (row1[0] === '') props.setRow1((prev) => [value, prev[1], prev[2]]);
        break;
      case 'row1-1':
        if (row1[1] === '') props.setRow1((prev) => [prev[0], value, prev[2]]);
        break;
      case 'row1-2':
        if (row1[2] === '') props.setRow1((prev) => [prev[0], prev[1], value]);
        break;
      case 'row2-0':
        if (row2[0] === '') props.setRow2((prev) => [value, prev[1], prev[2]]);
        break;
      case 'row2-1':
        if (row2[1] === '') props.setRow2((prev) => [prev[0], value, prev[2]]);
        break;
      case 'row2-2':
        if (row2[2] === '') props.setRow2((prev) => [prev[0], prev[1], value]);
        break;
      case 'row3-0':
        if (row3[0] === '') props.setRow3((prev) => [value, prev[1], prev[2]]);
        break;
      case 'row3-1':
        if (row3[1] === '') props.setRow3((prev) => [prev[0], value, prev[2]]);
        break;
      case 'row3-2':
        if (row3[2] === '') props.setRow3((prev) => [prev[0], prev[1], value]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!gameOver && !draw && (
        <div className='grid'>
          <div className='row'>
            <div className='input' onClick={() => handleClick('row1-0')}>
              {row1[0]}
            </div>
            <div className='input' onClick={() => handleClick('row1-1')}>
              {row1[1]}
            </div>
            <div className='input' onClick={() => handleClick('row1-2')}>
              {row1[2]}
            </div>
          </div>
          <div className='row'>
            <div className='input' onClick={() => handleClick('row2-0')}>
              {row2[0]}
            </div>
            <div className='input' onClick={() => handleClick('row2-1')}>
              {row2[1]}
            </div>
            <div className='input' onClick={() => handleClick('row2-2')}>
              {row2[2]}
            </div>
          </div>
          <div className='row'>
            <div className='input' onClick={() => handleClick('row3-0')}>
              {row3[0]}
            </div>
            <div className='input' onClick={() => handleClick('row3-1')}>
              {row3[1]}
            </div>
            <div className='input' onClick={() => handleClick('row3-2')}>
              {row3[2]}
            </div>
          </div>
        </div>
      )}
      {gameOver && !draw && (
        <div className='gridSuccess'>
          <div className='gameSuccess'>
            <h3 className='text'>Game Over!</h3>
            <h3 className='text'>Player {value === 'X' ? 'O' : 'X'} wins</h3>
          </div>
        </div>
      )}
      {draw && !gameOver && (
        <div className='gridSuccess'>
          <h1 className='text'>Draw</h1>
        </div>
      )}
    </>
  );
}

export default Grid;
