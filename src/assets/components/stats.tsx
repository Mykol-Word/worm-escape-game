
function Stats() {
    return(
        <div className="stats-container">
            <div className="menu-container">
                <h1 className="title-box">Total Session Stats</h1>
                <div className="text-box">
                    Correct: 0   Wrong: 0   Total: 0
                </div>
            </div>
            <div className="menu-container">
                <h1 className="title-box">Session Times</h1>
                <div className="text-box">
                    3: N/A
                    10: N/A
                    50: N/A
                    100: N/A
                </div>
            </div>
            <div className="menu-container">
                <h1 className="title-box">Directions Per Second</h1>
                <div className="text-box">
                    0 DPS
                </div>
            </div>
            <button className="button">Reset Session</button>
        </div>
    );
}

export default Stats;