import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/homepagebackgroundblurred.jpg";
import titleImage from "../assets/images/homepagetitle.png";

function Home() {

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center"style={{backgroundImage: `url(${backgroundImage}`}}>
    <div className="menu-container">
      <a href={"https://store.steampowered.com/app/2318480/Last_Train_Outta_Wormtown/"} ><img className="title-image" src={titleImage}/></a>
      <div className="text-box">
        A quick-time escape minigame based off Get(Color) Games' "Last Train Outta' Wormtown."
        Clicking the title above will take you to the game's store page. 
      </div>
      <Link to="/play" style={{ textDecoration: 'none' }}>
        <h1 className="button">Play</h1>
      </Link>
      <Link to="/settings" style={{ textDecoration: 'none' }}>
        <h1 className="button">Settings</h1>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <h1 className="button">About</h1>
      </Link>
    </div>
  </div>
  )
}

export default Home
