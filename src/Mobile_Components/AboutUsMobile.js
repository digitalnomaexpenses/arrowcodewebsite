import React from "react"
import { useInView } from 'react-intersection-observer'

import AboutUsSVG from "../SVGs/AboutUsSVG.js"
import AboutUsProjectMngtSVG from "../SVGs/AboutUsProjectMngtSVG.js"
import AboutUsWebDevSVG from "../SVGs/AboutUsWebDevSVG.js"
import AboutUsProjectsDeliSVG from "../SVGs/AboutUsProjectsDeliSVG.js"
import AboutUsFurFelSVG from "../SVGs/AboutUsFurFelSVG.js"


export default function AboutUsMobile(props) {
	const { ref: aboutUsMobileRef, inView: aboutUsMobileVisibility } = useInView();

	return(
		<div 
		className="container pt-5 ps-4 pe-4"
		ref={aboutUsMobileRef}>
			<div className={`d-flex flex-column ${props.darkMode? "" : ""}`}>
				<div className={`about-us-heading-mobile pb-4 pt-3 text-center ${aboutUsMobileVisibility ? "about-us-heading-mobile-animation" : ""}`}>About <span>Us</span></div>
				<div className={aboutUsMobileVisibility ? "about-us-mobile-svg-animation pb-3" : "pb-3"}>
					<AboutUsSVG isVisible={aboutUsMobileVisibility }/>
				</div>
				<div className={`about-us-text-mobile pb-4 ps-2 pe-2 text-center ${aboutUsMobileVisibility ? "about-us-text-mobile-animation" : ""}`}>
					We’re a small team of independent developers, 
					product managers, and their feline friends
				</div>
				<div className="row row-cols-2">
						<div className={`col text-center pb-4 ${aboutUsMobileVisibility ? "pm-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="project-management-svg">
									<AboutUsProjectMngtSVG isVisible={aboutUsMobileVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number-mobile">10+ </div>
									<div className="about-us-highlight-text-mobile">Years of Product Management</div>
								</div>
							</div>
						</div>
						<div className={`col text-center pb-4 ${aboutUsMobileVisibility ? "wd-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="web-development-svg">
									<AboutUsWebDevSVG isVisible={aboutUsMobileVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number-mobile">5+</div>
									<div className="about-us-highlight-text-mobile"> Years of Web Development</div>
								</div>
							</div>
						</div>
						<div className={`col text-center ${aboutUsMobileVisibility ? "pd-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="projects-delivered-svg">
									<AboutUsProjectsDeliSVG isVisible={aboutUsMobileVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number-mobile">40+ </div>
									<div className="about-us-highlight-text-mobile">Projects Delivered</div>
								</div>
							</div>
						</div>
						<div className={`col text-center ${aboutUsMobileVisibility ? "ff-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="furry-feline-svg">
									<AboutUsFurFelSVG isVisible={aboutUsMobileVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number-mobile">2+</div>
									<div className="about-us-highlight-text-mobile"> Furry Feline Friends</div>
								</div>
							</div>
						</div>
					</div>
			</div>			
		</div>
	)
}