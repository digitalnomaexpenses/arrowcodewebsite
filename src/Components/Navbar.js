import React from "react"
import { Link, Element } from 'react-scroll'

export default function Navbar(props) {

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the styles based on scroll position
  const navbarStyle = {
    backgroundColor: scrollY > 10 ? '#F6F6F6' : '#FAF7F4',
    boxShadow: `0 0 ${Math.min(scrollY / 10, 20)}px rgba(0, 0, 0, 0.2)`,
  };

  const navbarStyleDark = {
    backgroundColor: scrollY > 10 ? '#1d1d1d' : '#0b0b0b',
    boxShadow: `0 0 ${Math.min(scrollY / 10, 20)}px rgba(0, 0, 0, 0.2)`,
  };

	
	return(
	<div className="container pt-3" id="navbar-container">
		<nav 
			id="navbar" 
			className={`navbar navbar-expand-lg ps-4 ${props.darkMode? "navbar-dark": ""}`} 
			style={props.darkMode ? navbarStyleDark : navbarStyle}>
			<div className="navbar-brand-div">
				<Link id="navbar-brand" className="navbar-brand" to="landing-page" smooth={true} duration={5}>
	    		<img src={props.darkMode? "./SVGs/logo-7-dark-mode.svg" : "./SVGs/logo-7.svg"} className="img-fluid"/>
	    	</Link>
			</div>
	    
	    {props.windowWidth <= 992 && <div onClick={props.toggleDarkMode} className="pe-3 darkMode-toggler-icon">
            	<img src={`./SVGs/Navbar/${props.darkMode? "moon.svg" : "sun.svg"}`}/>
      </div>}
    	<button 
        className={props.darkMode ? "navbar-toggler dark-navbar-toggler me-3" : "navbar-toggler me-3" }
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon dark-navbar-toggler"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-md-4">
              <Link className="nav-link" to="portfolio" smooth={true} duration={5}>Portfolio</Link>
          </li>
          <li className="nav-item mx-md-4">
              <Link className="nav-link" to="services" smooth={true} duration={5}>Services</Link>
          </li>
          <li className="nav-item mx-md-4">
              <Link className="nav-link" to="about-us" smooth={true} duration={5}>About Us</Link>
          </li>
          <li className="nav-item mx-md-4">
              <Link className="nav-link" to="contact" smooth={true} duration={5}>Contact</Link>
          </li>
          </ul>
      </div> 
      {props.windowWidth > 992 && <div onClick={props.toggleDarkMode} className="pe-3 darkMode-toggler-icon">
            	<img src={`./SVGs/Navbar/${props.darkMode? "moon.svg" : "sun.svg"}`}/>
      </div>}
	  </nav>
	</div>   
	)
}