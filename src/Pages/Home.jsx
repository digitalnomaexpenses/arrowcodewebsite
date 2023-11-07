import React from "react"

import Navbar from "../Components/Navbar"
import LandingPage from "../Components/LandingPage"
import WhyUs from "../Components/WhyUs"
import Services from "../Components/Services"
import Portfolio from "../Desktop_Components/Portfolio"
import Questions from "../Desktop_Components/Questions"
import Contact from "../Desktop_Components/Contact"
import AboutUs from "../Desktop_Components/AboutUs"
import Footer from "../Desktop_Components/Footer"



export default function Home(props) {



	return(
		<div className={props.darkMode? "container-fluid app-dark": "container-fluid app-light"}>
			<Navbar 
                darkMode={props.darkMode} 
                toggleDarkMode={props.toggleDarkMode}
            	windowWidth={props.windowWidth}
                />
            <LandingPage 
            	darkMode={props.darkMode} 
            	windowWidth={props.windowWidth}/>
            <WhyUs 
            	darkMode={props.darkMode}
            	windowWidth={props.windowWidth} />
            <Services 
            	darkMode={props.darkMode}
            	windowWidth={props.windowWidth} />
            <Questions 
            	darkMode={props.darkMode}
            	windowWidth={props.windowWidth} />
            <Portfolio 
		        darkMode={props.darkMode} 
		        portWindowWidth={props.windowWidth}/> 
		    <Contact 
		    	darkMode={props.darkMode} 
		    	windowWidth={props.windowWidth}/>
		    <AboutUs 
		    	darkMode={props.darkMode}
		    	windowWidth={props.windowWidth} />
		    <Footer 
		    	darkMode={props.darkMode} 
		    	windowWidth={props.windowWidth}/>
		</div>
	)
}