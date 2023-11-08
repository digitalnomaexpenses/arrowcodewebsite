import React from "react"
import About_Us_SVG from "../SVG-Components/about-us.js"

export default function AboutUsContentMobileItem(props) {
	return(
		<>
			<h3 
				className={`section-heading pb-4 pt-3 text-center ${props.isVisible ? "about-us-heading-mobile-animation" : ""}`}>
				{props.title}<span>{props.title_span}</span>
			</h3>
			<div className={`about-us-svg-div pb-3 ${props.isVisible ? "about-us-mobile-svg-animation" : ""}`}>
				<About_Us_SVG isVisible={props.isVisible}/>
			</div>
			<p 
				className={`section-text pb-4 ps-2 pe-2 text-center ${props.isVisible ? "about-us-text-mobile-animation" : ""}`}>
				{props.text}
			</p>
		</>
	)
}