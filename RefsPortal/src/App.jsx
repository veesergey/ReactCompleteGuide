import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="One Second" targetTime={1} />
        <TimerChallenge title="Five Seconds" targetTime={5} />
        <TimerChallenge title="Ten Seconds" targetTime={10} />
        <TimerChallenge title="Fifteen Seconds" targetTime={15} />
      </div>
    </>
  );
}

export default App;
