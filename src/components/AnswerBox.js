import React from 'react';
import '../css/style.css';

const AnswerBox = ({score,playAgain}) => (
    <div className="score-board">
        <div className="score">Your score is {score}/5 correct answer !!!</div>
        <button className="playBtn" onClick={playAgain}>Play Again</button>
    </div>
)

export default AnswerBox;