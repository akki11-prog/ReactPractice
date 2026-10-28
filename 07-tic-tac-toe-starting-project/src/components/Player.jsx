import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }
  let playerName = <span className="player-name">{newName}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" placeholder={newName} onChange={(e) => setNewName(e.target.value)} className="player-name-input" />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
