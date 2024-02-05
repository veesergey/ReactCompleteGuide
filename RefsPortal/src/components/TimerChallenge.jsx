import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){

const timer = useRef();
const dialog = useRef();

const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
const score = (1 - timeRemaining / (targetTime * 1000)) * 100;

if (timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
    
}

function handleReset(){
    setTimeRemaining(targetTime * 1000);
}

function handleStart(){  
    timer.current = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 10);       
    }, 10);
    
}

function handleStop(){
    clearInterval(timer.current);    
    dialog.current.open();
}

    return (
        <>
      <ResultModal ref={dialog} remainingTime={timeRemaining} targetTime={targetTime} onReset={handleReset} score={score}/>
      <section className="challenge">
        <h2>{title}</h2>
        
        <p className="challenge-time">
            {targetTime} second{targetTime>1? 's':''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
        </p>
        <p className={timerIsActive? 'active' : undefined}>{timerIsActive ? "Time is running" : "Timer Inactive"}</p>
      </section>
      </>
    );
}