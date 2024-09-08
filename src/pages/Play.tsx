import GameManager from "../assets/components/gamemanager";
import Stats from "../assets/components/stats";
import backgroundImage from "../assets/images/playbackgroundblurred.png";

function Play() {

  return (
    <>
    <div className="vh-100 w-auto d-flex justify-content-center align-items-center"style={{backgroundImage: `url(${backgroundImage}`}}>
        <Stats></Stats>
        <GameManager></GameManager>
    </div>
    </>
  )
}

export default Play
