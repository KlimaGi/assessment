import React, { useState } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const Square = ({ value, handleClick }) => {
  return (
    <div className="square" onClick={handleClick} style={squareStyle}>
      {value}
    </div>
  );
};

const Board = () => {
  const [player, setPlayer] = useState(true);
  let playerIs = player ? "X" : "O";

  const emptyBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [board, setBoard] = useState(emptyBoard);
  const clickSquare = (row, col) => {
    if (!board[row][col]) {
      let newBoard = [...board];
      newBoard[row][col] = playerIs;
      setBoard(newBoard);
      setPlayer(!player);
    }
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{playerIs}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>None</span>
      </div>
      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square handleClick={() => clickSquare(0, 0)} value={board[0][0]} />
          <Square handleClick={() => clickSquare(0, 1)} value={board[0][1]} />
          <Square handleClick={() => clickSquare(0, 2)} value={board[0][2]} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square handleClick={() => clickSquare(1, 0)} value={board[1][0]} />
          <Square handleClick={() => clickSquare(1, 1)} value={board[1][1]} />
          <Square handleClick={() => clickSquare(1, 2)} value={board[1][2]} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square handleClick={() => clickSquare(2, 0)} value={board[2][0]} />
          <Square handleClick={() => clickSquare(2, 1)} value={board[2][1]} />
          <Square handleClick={() => clickSquare(2, 2)} value={board[2][2]} />
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));
