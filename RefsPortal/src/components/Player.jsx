import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setPlayerName] = useState('unknown entity');
  
  function clickHandler(){
    setPlayerName(playerName.current.value)
  }


  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
