import { Link } from "react-router-dom";
import backgroundImage from "../images/homepagebackgroundblurred.jpg";

function HomePage() {

    return (
      <div className="vh-100 d-flex justify-content-center align-items-center"style={{backgroundImage: `url(${backgroundImage}`}}>
        <div className="rounded text-center p-5 m-2" style={{backgroundColor: `rgba(0, 0, 0, 0.5)`}}>
          <h1 className="display-1 pb-3 text-white">Worm Escape</h1>
          <Link to="/play" style={{ textDecoration: 'none' }}>
            <h1 className="display-5 button">Play</h1>
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <h1 className="display-5 button">Settings</h1>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <h1 className="display-5 button">About</h1>
          </Link>
        </div>
      </div>
    )
  }
  
export default HomePage