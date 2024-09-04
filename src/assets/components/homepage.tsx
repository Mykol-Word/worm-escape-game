import backgroundImage from "../images/homepagebackgroundblurred.jpg";

function HomePage() {

    return (
      <div 
        className="vh-100 d-flex justify-content-center align-items-center"
        style={{backgroundImage: `url(${backgroundImage}`}}
      >
        <div 
          className="rounded text-white p-3 m-2" 
          style={{backgroundColor: `rgba(0, 0, 0, 0.5)`}}
        >
          <h1 className="display-1">Worm Escape</h1>
        </div>

      </div>
    )
  }
  
export default HomePage