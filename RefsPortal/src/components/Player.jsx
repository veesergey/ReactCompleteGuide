import {useState, useRef} from 'react';

export default function Player() {

  const playerNameRef = useRef();

  const [playerName, setPlayerName] = useState('unknown entity');
  
  function clickHandler() {
    setPlayerName(playerNameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
