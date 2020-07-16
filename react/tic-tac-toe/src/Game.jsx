import React, { useState, useEffect } from "react";
import Board from "./components/Board.jsx";
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
const Game = (props) => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");
  const current = history[history.length - 1];
  const winner = calculateWinner(current?.squares);
  const handleClick = (i) => {
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setHistory(history.concat({ squares: squares }));
  };
  const jumpTo = (move) => {
    console.log(move)
    setHistory(history.splice(0, move+1));
    setXIsNext(move % 2 === 0);
  };

  useEffect(() => {
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }
  }, [winner, status]);
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current?.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default Game;
