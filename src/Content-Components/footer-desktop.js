import React from "react"
import { Link, Element } from 'react-scroll'

export default function FooterContentDesktopItem(props) {
	return(
		<>
			<div className="col-4">
				<div className="d-flex flex-column">
					<div className="footer-heading pb-4 pe-5">
						<img className="img-fluid" src={props.fDarkMode? "./SVGs/logo-7-dark-mode.svg" : "./SVGs/logo-7.svg"}/>
					</div>
					<p className="footer-text pe-5 pb-3">{props.text}</p>
					<div className="d-flex flex-row pt-xl-4">
						<img 
							src={props.fDarkMode ? 
								"../SVGs/Footer/facebook-icon-dark.svg" : "../SVGs/Footer/facebook-icon.svg"} 
							className="img-fluid pe-lg-2 pe-3"/>
						<img 
							src={props.fDarkMode ? 
								"../SVGs/Footer/linkedin-icon-dark.svg" : "../SVGs/Footer/linkedin-icon.svg"}
							className="img-fluid pe-lg-2 pe-3"/>
						<img 
							src={props.fDarkMode ? 
								"../SVGs/Footer/twitter-icon-dark.svg" : "../SVGs/Footer/twitter-icon.svg"}
							className="img-fluid pe-lg-2 pe-3"/>
						<img 
							src={props.fDarkMode ? 
								"../SVGs/Footer/instagram-icon-dark.svg" : "../SVGs/Footer/instagram-icon.svg"}
							className="img-fluid pe-lg-2 pe-3"/>
					</div>
				</div>
			</div>
			<div className="col">
				<ul className="footer-nav-list">
					<li className="pb-3">
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="landing-page" 
							smooth={true} 
							duration={5}>
							{props.menu_1}
						</Link>
					</li>
					<li className="pb-3">
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="about-us" 
							smooth={true} 
							duration={5}>
							{props.menu_2}
						</Link>
					</li>
					<li className="pb-3">
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="" 
							smooth={true} 
							duration={5}>
							{props.menu_3}
						</Link>
					</li>
					<li className="pb-3">
						<Link 
							className={`footer-link ${props.darkMode? "dark" : "light"}`} 
							to="" 
							smooth={true} 
							duration={5}>
							{props.menu_4}
						</Link>
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
			</div>
			<div className="col-5">
				<div d-flex flex-column>
					<h4 className="footer-heading pb-4">{props.title}</h4>
					<p className="footer-text">{props.timings_1}</p>
					<p className="footer-text">{props.timings_2}</p>
					<p className="footer-text pb-4">{props.timings_3}</p>
					<div className="d-flex flex-row">
						<img 
							src={props.fDarkMode ? 
								"../SVGs/Footer/email-icon-dark.svg" : "../SVGs/Footer/email-icon.svg"} 
							className="img-fluid pe-2"/>
						<p className="footer-text">{props.email}</p>
					</div>
				</div>
			</div>
		</>
	)
}