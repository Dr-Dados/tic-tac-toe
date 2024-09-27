import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function onChangeHandler(e) {
    setPlayerName(e.target.value);
  }
  function editHandler() {
    setIsEditing((editing) => !editing);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={onChangeHandler} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
