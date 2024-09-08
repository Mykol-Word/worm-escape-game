import GameManager from "../assets/components/gamemanager";
import { useState } from "react";
import Stats from "../assets/components/stats";
import backgroundImage from "../assets/images/playbackgroundblurred.png";

function Play() {
  const [totalScore, setTotalScore] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);

  const updateScore = (correct: Boolean) => {
    setTotalScore(totalScore + 1);
    if(correct) { setCorrectScore(correctScore + 1 );}
  }

  return (
    <>
    <div className="vh-100 w-auto d-flex justify-content-center align-items-center"style={{backgroundImage: `url(${backgroundImage}`}}>
        <Stats totalScore={totalScore} correctScore={correctScore}></Stats>
        <GameManager updateScore={updateScore}></GameManager>
    </div>
    </>
  )
}

export default Play
