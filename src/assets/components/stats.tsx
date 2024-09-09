import { useState } from 'react';

interface props {
    totalScore: number;
    correctScore: number;
    sessionStartTime: number;
    resetScore(): any;
}

function Stats({totalScore, correctScore, sessionStartTime, resetScore}:props) {
    const [scoreTimes, setScoreTimes] = useState(["N/A","N/A","N/A","N/A"]);
    const [currentTime, setCurrentTime] = useState(Date.now());


    const setScoreTime = (index: number, value: any) => {
        let copyScoreTimes = scoreTimes;
        copyScoreTimes[index] = value;
        setScoreTimes(copyScoreTimes);
        return true;
    }

    const reset = () => {
        resetScore();
        setScoreTimes(["N/A","N/A","N/A","N/A"]);
    }

    const updateCurrentTime = () => {
        setCurrentTime(Date.now());
    }

    setInterval(updateCurrentTime, 10)

    return(
        <div className="stats-container">
            <div className="menu-container">
                <h1 className="title-box">Total Session Stats</h1>
                <div className="text-box">
                    Correct: <span className='special-text'>{correctScore + "   "}</span>   
                    Wrong: <span className='special-text'>{totalScore - correctScore + "   "}</span>  
                    Total: <span className='special-text'>{totalScore + "   "}</span> 
                </div>
            </div>
            <div className="menu-container">
                <h1 className="title-box">Session Times</h1>
                <div className="text-box">
                    {/* These score components are a bit confusing but not that complicated */}
                    {/* They check if the score requirement has been met and if its the first time, they change the score time to match the time since the first direction*/}
                    <p>
                        3: <span className='special-text'>
                            {(correctScore >= 3 && scoreTimes[0] == "N/A" && setScoreTime(0, ((currentTime - sessionStartTime) / 1000).toFixed(2))) ? scoreTimes[0] + " " : scoreTimes[0] + " "}
                            </span>
                    </p>
                    <p>
                        10: <span className='special-text'>
                            {(correctScore >= 10 && scoreTimes[1] == "N/A" && setScoreTime(1, ((currentTime - sessionStartTime) / 1000).toFixed(2))) ? scoreTimes[1] + " " : scoreTimes[1] + " "}
                            </span>
                    </p>
                    <p>
                        50: <span className='special-text'>
                            {(correctScore >= 50 && scoreTimes[2] == "N/A" && setScoreTime(2, ((currentTime - sessionStartTime) / 1000).toFixed(2))) ? scoreTimes[2] + " " : scoreTimes[2] + " "}
                            </span>
                    </p>
                    <p>
                        100: <span className='special-text'>
                            {(correctScore >= 100 && scoreTimes[3] == "N/A" && setScoreTime(3, ((currentTime - sessionStartTime) / 1000).toFixed(2))) ? scoreTimes[3] + " " : scoreTimes[3] + " "}
                            </span>
                    </p>
                </div>
            </div>
            <div className="menu-container">
                <h1 className="title-box">Time Elapsed</h1>
                <div className="text-box">
                    <span className='special-text'>{totalScore != 0 ? (Math.abs((currentTime - sessionStartTime) / 1000).toFixed(2)) : 0}</span>
                </div>
            </div>
            <button className="button" onClick={reset}>Reset Session</button>
        </div>
    );
}

export default Stats;