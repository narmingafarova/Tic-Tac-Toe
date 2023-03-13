import React, { useState } from "react";
import Square from "./Square";
import CalculateWinner from "./Winner";

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  let [xScore,setXscore]=useState(0);
  let [oScore, setOscore]=useState(0);

  const handleClick = (i) => {
    const newSquares = [...squares];

    const winnerDeclared = Boolean(CalculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    
    if(winnerDeclared){
      if(CalculateWinner(newSquares)=="X"){
        setXscore(++xScore);
      } else {
        setOscore(++oScore);
      }
      resetGame();
      return ;
    }

    if(squareFilled) {
        return;
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = CalculateWinner(squares);

  const status = winner ? `----Winner is : ${winner}-\n-Click-to play again---` : `Next player: ${xIsNext ? "X" : "O"}`;
  
  const resetGame=()=>{
   setSquares(initialSquares);
   setXIsNext(true);
  };
  
  
  

  return (
    <div className="status">
      {status}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div>
        <p>Score X: {xScore}</p>
        <p>Score O: {oScore}</p>
      </div>
      <div>
        <button onClick={resetGame} className="status btn btn-light">Reset</button>
      </div>
    </div>
  );
};

export default Board;
