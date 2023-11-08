import React from "react"

import Navbar from "../Components/Navbar"
import LandingPage from "../Components/LandingPage"
import WhyUs from "../Components/WhyUs"
import Services from "../Components/Services"
import Portfolio from "../Components/Portfolio"
import Questions from "../Components/Questions"
import Contact from "../Components/Contact"
import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"



export default function Home(props) {



	return(
		<>
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
		</>
	)
}