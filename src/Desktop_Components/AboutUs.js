import React from "react"
import { useInView } from 'react-intersection-observer'

import JSON_AboutUsContent from "../Additional_Components/JSONs/JSON_AboutUsContent.js"
import AboutUsContentDesktopItem from "../Additional_Components/AboutUsContentDesktopItem.js"

import AboutUsSVG from "../SVGs/AboutUsSVG.js"
import AboutUsProjectMngtSVG from "../SVGs/AboutUsProjectMngtSVG.js"
import AboutUsWebDevSVG from "../SVGs/AboutUsWebDevSVG.js"
import AboutUsProjectsDeliSVG from "../SVGs/AboutUsProjectsDeliSVG.js"
import AboutUsFurFelSVG from "../SVGs/AboutUsFurFelSVG.js"

export default function AboutUs(props) {

	//intersection observer animation start
	const { ref: aboutUsRef, inView: aboutUsVisibility } = useInView();
 	//intersection observer animation end

	let AboutUsContentElement = JSON_AboutUsContent.map(eachElement => (
			<AboutUsContentDesktopItem
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
			/>
		))

	return(
		<div 
		className="container pt-5"
		ref={aboutUsRef}
		>
			<div className="about-us d-flex flex-row">
				<div className={`col-lg-6 col-7 ps-5 pe-lg-5 pe-2 ${aboutUsVisibility ? "about-us-animation" : ""}`}>
					{AboutUsContentElement}
					<div className="row row-cols-2 about-us-text-with-icons">
						<div className={`col ${aboutUsVisibility ? "project-management-animation" : ""}`}>
							<div className="d-flex flex-row pb-4 pt-2">
								<div className="project-management-svg pe-3">
									<AboutUsProjectMngtSVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number">10+ </div>
									<div className="about-us-highlight-text">Years of Product Management</div>
								</div>
							</div>
						</div>
						<div className={`col ${aboutUsVisibility ? "web-development-animation" : ""}`}>
							<div className="d-flex flex-row pb-4 pt-2">
								<div className="web-development-svg pe-3">
									<AboutUsWebDevSVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number">5+</div>
									<div className="about-us-highlight-text"> Years of Web Development</div>
								</div>
							</div>
						</div>
						<div className={`col ${aboutUsVisibility ? "projects-delivered-animation" : ""}`}>
							<div className="d-flex flex-row pb-4">
								<div className="projects-delivered-svg pe-3">
									<AboutUsProjectsDeliSVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number">40+ </div>
									<div className="about-us-highlight-text">Projects Delivered</div>
								</div>
							</div>
						</div>
						<div className={`col ${aboutUsVisibility ? "furry-feline-animation" : ""}`}>
							<div className="d-flex flex-row pb-4">
								<div className="furry-feline-svg pe-3">
									<AboutUsFurFelSVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<div className="about-us-highlight-number">2+</div>
									<div className="about-us-highlight-text"> Furry Feline Friends</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`col ps-5 ${aboutUsVisibility ? "about-us-svg-animation" : ""}`}>
					<div className="ps-5">
						<AboutUsSVG isVisible={aboutUsVisibility }/>
					</div>
				</div>
			</div>
		</div>
	)
}