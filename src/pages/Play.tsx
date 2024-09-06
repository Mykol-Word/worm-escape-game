import GameManager from "../assets/components/gamemanager";
import ProgressBar from "../assets/components/progressbar";
import backgroundImage from "../assets/images/playbackgroundblurred.png";

function Play() {

  return (
    <>
    <div className="vh-100 d-flex justify-content-center align-items-center"style={{backgroundImage: `url(${backgroundImage}`}}>
        <div className="menu-container">
            <GameManager></GameManager>
            <ProgressBar></ProgressBar>
        </div>
    </div>
    </>
  )
}

export default Play
