import React from "react";

const Gameover = ({ winner,restart }) => {
  return (
    <div id="game-over">
      <h2>game over!</h2>
      {winner ? <p>{` ${winner} wins!`}</p> : <p>It's a draw!</p>}
      <button onClick={restart}>restart</button>
    </div>
  );
};

export default Gameover;
