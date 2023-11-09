import React from "react"
import { Link, Element } from 'react-scroll'
import {Link as RouteLink } from 'react-router-dom'

export default function FooterContentMobItem(props) {
	return(
		<>
			<div className="footer-heading-mobile pb-2 pt-2">
				<img 
					className="img-fluid" 
					src={props.fMobDarkMode? "./SVGs/logo-7-dark-mode.svg" : "./SVGs/logo-7.svg"}
					alt="Arrow Code brand logo"/>
			</div>
			<p className="footer-text-mobile">{props.text}</p>
			<div className="d-flex flex-row pt-2">
				<img 
					src={props.fMobDarkMode ? 
						"../SVGs/Footer/facebook-icon-dark.svg" : "../SVGs/Footer/facebook-icon.svg"} 
					className="img-fluid pe-4"
					alt="Social media icon: Facebook"/>
				<img 
					src={props.fMobDarkMode ? 
						"../SVGs/Footer/linkedin-icon-dark.svg" : "../SVGs/Footer/linkedin-icon.svg"} 
					className="img-fluid pe-4"
					alt="Social media icon: LinkedIn"/>
				<img 
					src={props.fMobDarkMode ? 
						"../SVGs/Footer/twitter-icon-dark.svg" : "../SVGs/Footer/twitter-icon.svg"} 
					className="img-fluid pe-4"
					alt="Social media icon: Twitter"/>
				<img 
					src={props.fMobDarkMode ? 
						"../SVGs/Footer/instagram-icon-dark.svg" : "../SVGs/Footer/instagram-icon.svg"} 
					className="img-fluid pe-4"
					alt="Social media icon: Instagram"/>
			</div>
			<ul className="footer-nav-list pt-1">
					<li className="pb-2">
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="landing-page" 
							smooth={true} 
							duration={5}>
							{props.menu_1}
						</Link>
					</li>
					<li className="pb-2">
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="about-us" 
							smooth={true} 
							duration={5}>
							{props.menu_2}
						</Link>
					</li>
					<li className="pb-3">
						<RouteLink  
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="/terms-and-conditions"
							smooth={true} 
							duration={5}>
							{props.menu_3}
						</RouteLink>
					</li>
					<li className="pb-3">
						<RouteLink 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="/privacy-policy"
							smooth={true} 
							duration={5}>
							{props.menu_4}
						</RouteLink>
					</li>
					<li>
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="contact" 
							smooth={true} 
							duration={5}>
							{props.menu_5}
						</Link><
					/li>
				</ul>
			<h4 className="footer-heading-mobile pb-2 pt-1">{props.title}</h4>
			<p className="footer-text-mobile pb-1 pe-5">{props.timings_1}</p>
			<p className="footer-text-mobile">{props.timings_2}</p>
			<p className="footer-text-mobile pb-3">{props.timings_3}</p>
			<div className="d-flex flex-row">
				<img 
					src={props.fMobDarkMode ? 
						"../SVGs/Footer/email-icon-dark.svg" : "../SVGs/Footer/email-icon.svg"} 
					className="img-fluid pe-2"
					alt="Email icon"/>
				<p className="footer-text-mobile">{props.email}</p>
			</div>
		</>
	)
}