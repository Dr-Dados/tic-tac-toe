import React from "react";

const Log = ({ gameTurn }) => {
  return (
    <ol id="log">
      {gameTurn.map((turn, index) => (
        <li key={index}>
          {`Player ${turn.player} selected square at row ${turn.square.row}, col ${turn.square.col}`}
        </li>
      ))}
    </ol>
  );
};

export default Log;
