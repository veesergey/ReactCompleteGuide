import React, { useState } from 'react';

export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(){
        setIsEditing((isEditing)=>!isEditing);
    }
   
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let playerNameDiv = isEditing ? <input id="playerName" type="text" required value={playerName} onChange={handleChange}/> : <span className="player-name">{playerName}</span>

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerNameDiv}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}