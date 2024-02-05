import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset, score}, ref){
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });


    return <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>Target time was <strong>{targetTime}</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
});

export default ResultModal;