import React from "react"
import { useInView } from 'react-intersection-observer'

import About_Us_JSON from "../JSONs/about-us"
import About_Us_JSON_Component_Desktop from "../Content-Components/about-us-desktop"
import About_Us_JSON_Component_Mobile from "../Content-Components/about-us-mobile"

import About_Us_SVG from "../SVG-Components/about-us.js"
import Project_Management_SVG from "../SVG-Components/about-us-project-management.js"
import Web_Development_SVG from "../SVG-Components/about-us-web-development.js"
import Projects_Delivered_SVG from "../SVG-Components/about-us-projects-delivered.js"
import Furry_Felines_SVG from "../SVG-Components/about-us-furry-felines.js"


export default function AboutUs(props) {

	const { ref: aboutUsRef, inView: aboutUsVisibility } = useInView();

	let About_Us_JSON_Content_Desktop = About_Us_JSON.map(eachElement => (
			<About_Us_JSON_Component_Desktop
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
			/>
		))

	let About_Us_JSON_Content_Mobile = About_Us_JSON.map(eachElement => (
			<About_Us_JSON_Component_Mobile 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				isVisible={aboutUsVisibility}
			/>
		))

	return(
		<section 
		className="container pt-5"
		ref={aboutUsRef}
		id="about-us"
		>

		{
			props.windowWidth > 992 && 

			<div className="about-us d-flex flex-row">
				<div className={`col-lg-6 col-7 ps-5 pe-lg-5 pe-2 ${aboutUsVisibility ? "about-us-animation" : ""}`}>
					{About_Us_JSON_Content_Desktop}
					<div className="row row-cols-2 about-us-text-with-icons">
						<div className={`col ${aboutUsVisibility ? "project-management-animation" : ""}`}>
							<div className="d-flex flex-row pb-4 pt-2">
								<div className="project-management-svg pe-3">
									<Project_Management_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">10+ </h4>
									<h4 className="about-us-highlight-text">Years of Product Management</h4>
								</div>
							</div>
						</div>
						<div className={`col ${aboutUsVisibility ? "web-development-animation" : ""}`}>
							<div className="d-flex flex-row pb-4 pt-2">
								<div className="web-development-svg pe-3">
									<Web_Development_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">5+</h4>
									<h4 className="about-us-highlight-text"> Years of Web Development</h4>
								</div>
							</div>
						</div>
						<div className={`col ${aboutUsVisibility ? "projects-delivered-animation" : ""}`}>
							<div className="d-flex flex-row pb-4">
								<div className="projects-delivered-svg pe-3">
									<Projects_Delivered_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">40+ </h4>
									<h4 className="about-us-highlight-text">Projects Delivered</h4>
								</div>
							</div>
						</div>
						<div className={`col ${aboutUsVisibility ? "furry-feline-animation" : ""}`}>
							<div className="d-flex flex-row pb-4">
								<div className="furry-feline-svg pe-3">
									<Furry_Felines_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center">
									<h4 className="about-us-highlight-number">2+</h4>
									<h4 className="about-us-highlight-text"> Furry Feline Friends</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`col ps-5 pe-5 about-us-svg-div ${aboutUsVisibility ? "about-us-svg-animation" : ""}`}>
					<About_Us_SVG isVisible={aboutUsVisibility }/>
				</div>
			</div>
		}

		{
			props.windowWidth <=992 &&

			<div className={`d-flex flex-column ${props.darkMode? "" : ""}`}>
				{About_Us_JSON_Content_Mobile}
				<div className="row row-cols-2">
						<div className={`col text-center pb-4 ${aboutUsVisibility ? "pm-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="project-management-svg">
									<Project_Management_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">10+ </h4>
									<h4 className="about-us-highlight-text-mobile">Years of Product Management</h4>
								</div>
							</div>
						</div>
						<div className={`col text-center pb-4 ${aboutUsVisibility ? "wd-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="web-development-svg">
									<Web_Development_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">5+</h4>
									<h4 className="about-us-highlight-text-mobile"> Years of Web Development</h4>
								</div>
							</div>
						</div>
						<div className={`col text-center ${aboutUsVisibility ? "pd-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="projects-delivered-svg">
									<Projects_Delivered_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">40+ </h4>
									<h4 className="about-us-highlight-text-mobile">Projects Delivered</h4>
								</div>
							</div>
						</div>
						<div className={`col text-center ${aboutUsVisibility ? "ff-mobile-animation" : ""}`}>
							<div className="d-flex flex-column justify-content-center">
								<div className="furry-feline-svg">
									<Furry_Felines_SVG isVisible={aboutUsVisibility}/>
								</div>
								<div className="d-flex flex-column justify-content-center pt-1">
									<h4 className="about-us-highlight-number-mobile">2+</h4>
									<h4 className="about-us-highlight-text-mobile"> Furry Feline Friends</h4>
								</div>
							</div>
						</div>
					</div>
			</div>
		}

			
		</section>
	)
}