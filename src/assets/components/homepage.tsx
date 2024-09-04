import { Link } from "react-router-dom";
import backgroundImage from "../images/homepagebackgroundblurred.jpg";

function HomePage() {

    return (
      <div className="vh-100 d-flex justify-content-center align-items-center"style={{backgroundImage: `url(${backgroundImage}`}}>
        <div className="menu-container">
          <h1 className="display-1 pb-3 text-white">Worm Escape</h1>
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
  
export default HomePage