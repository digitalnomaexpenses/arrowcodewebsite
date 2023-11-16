import React from "react"
import {motion, useScroll, useTransform} from "framer-motion"

import Navbar from "../Components/Navbar"
import LandingPage from "../Components/LandingPage"
import WhyUs from "../Components/WhyUs"
import Services from "../Components/Services"
import Portfolio from "../Components/Portfolio"
import Questions from "../Components/Questions"
import Contact from "../Components/Contact"
import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"

import LandingPageAltFramerMotion from "../Components/LandingPageAltFramerMotion"
import WhyUsAltFramerMotion from "../Components/WhyUsAltFramerMotion"
import ServicesAltFramerMotion from "../Components/ServicesAltFramerMotion"
import ContactAltFramerMotion from "../Components/ContactAltFramerMotion"
import QuestionsAltFramerMotion from "../Components/QuestionsAltFramerMotion"
import AboutUsAltFramerMotion from "../Components/AboutUsAltFramerMotion"



export default function Home(props) {



	return(
		<>	
        	<Navbar 
            darkMode={props.darkMode} 
            toggleDarkMode={props.toggleDarkMode}
        	windowWidth={props.windowWidth}
            />
			
            <LandingPageAltFramerMotion 
            	darkMode={props.darkMode} 
            	windowWidth={props.windowWidth}/>
            <WhyUsAltFramerMotion
            	darkMode={props.darkMode}
            	windowWidth={props.windowWidth} />
            <ServicesAltFramerMotion 
            	darkMode={props.darkMode}
            	windowWidth={props.windowWidth} />
            <QuestionsAltFramerMotion
            	darkMode={props.darkMode}
            	windowWidth={props.windowWidth} />
            <Portfolio 
		        darkMode={props.darkMode} 
		        portWindowWidth={props.windowWidth}/> 
		    <ContactAltFramerMotion 
		    	darkMode={props.darkMode} 
		    	windowWidth={props.windowWidth}/>
		    <AboutUsAltFramerMotion 
		    	darkMode={props.darkMode}
		    	windowWidth={props.windowWidth} />
		    <Footer 
		    	darkMode={props.darkMode} 
		    	windowWidth={props.windowWidth}/>
		</>
	)
}