import React from "react"

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
			className={props.darkMode? "navbar navbar-dark navbar-expand-lg ps-4": "navbar navbar-expand-lg ps-4"} 
			style={props.darkMode ? navbarStyleDark : navbarStyle}>
	    <a id="navbar-brand" className="navbar-brand">
	    	<img src={props.darkMode? "./SVGs/logo-7-dark-mode.svg" : "./SVGs/logo-7.svg"} className="img-fluid"/>
	    </a>
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
	              <a className="nav-link" href="#">Portfolio</a>
	          </li>
	          <li className="nav-item mx-md-4">
	              <a className="nav-link" href="#">Services</a>
	          </li>
	          <li className="nav-item mx-md-4">
	              <a className="nav-link" href="#">About Us</a>
	          </li>
	          <li className="nav-item mx-md-4">
	              <a className="nav-link" href="#">Contact</a>
	          </li>
	          </ul>
	      </div>        
	  </nav>
	</div>   
	)
}